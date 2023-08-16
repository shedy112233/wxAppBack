package com.yinhai.yypt_lp.utils;
import cn.hutool.core.date.DateTime;
import cn.hutool.core.util.StrUtil;
import com.qcloud.cos.COSClient;
import com.qcloud.cos.exception.CosClientException;
import com.qcloud.cos.exception.CosServiceException;
import com.qcloud.cos.model.*;
import com.yinhai.yypt_lp.constant.TengXunImContstant;
import com.yinhai.yypt_lp.dto.ResponseDto;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CosUtil { // 加个更新  以及删除，下载时的流量问题

    public static final String filePath = "test/";

    public static final String preKey = "/test/";

    public static String getPostUrl(String url){
        StringBuilder str = new StringBuilder();
        String userSign = TLSSigAPIv2.genUserSig("administrator",1685325600);
        str.append(url).append("?sdkappid=").append(TengXunImContstant.SDKAppID)
                .append("&identifier=administrator")
                .append("&usersig=")
                .append(userSign)
                .append("&random=99999999&contenttype=json");
        return str.toString();
    }

    /**
     * 上传文件
     * @param file
     * @return
     */
    public static ResponseDto uploadFile(MultipartFile file, COSClient cosClient){
        ResponseDto responseDto = null;
        try {
            String originalfileName = file.getOriginalFilename();

            // 获得文件流
            InputStream inputStream = file.getInputStream();

            //设置文件key
            String filePath = getFileKey(originalfileName);

            // 上传文件
            cosClient.putObject(new PutObjectRequest(TengXunImContstant.bucketName, filePath, inputStream, null));
            cosClient.setBucketAcl(TengXunImContstant.bucketName, CannedAccessControlList.PublicRead);
            String url = TengXunImContstant.url + "/" + filePath;
            Map<String, String> map = new HashMap<>();
            map.put("fileName", originalfileName);
            map.put("url", url);
            map.put("key", filePath);
            return new ResponseDto(200, "成功并返回数据", map);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            cosClient.shutdown();
        }
        return responseDto;
    }

    /**
     * 上传文件
     * @param file
     * @return
     */
    public static ResponseDto uploadFile(File file,COSClient cosClient){
        ResponseDto responseDto = null;
        try {
            String originalfileName = file.getName();

            // 获得文件流
            InputStream inputStream = new FileInputStream(file);

            //设置文件key
            String filePath = getFileKey(originalfileName);

            // 上传文件
            cosClient.putObject(new PutObjectRequest(TengXunImContstant.bucketName, filePath, inputStream, null));
            cosClient.setBucketAcl(TengXunImContstant.bucketName, CannedAccessControlList.PublicRead);
            String url = TengXunImContstant.url + "/" + filePath;
            Map<String, String> map = new HashMap<>();
            map.put("fileName", originalfileName);
            map.put("url", url);
            map.put("key", filePath);
            return new ResponseDto(200, "成功并返回数据", map);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            cosClient.shutdown();
        }
        return responseDto;
    }

    /**
     * 下载文件
     * @param path 文件存储路径
     * @return
     */
    public static ResponseDto downLoadFile(String path,String fileName,COSClient cosClient) {
        File downFile = new File(path);
        String key = preKey+fileName;
        GetObjectRequest getObjectRequest = new GetObjectRequest(TengXunImContstant.bucketName, key);
        ObjectMetadata downObjectMeta = cosClient.getObject(getObjectRequest, downFile);
        cosClient.shutdown();
        String etag = downObjectMeta.getETag();
        return new ResponseDto(200,"下载成功！",etag);
    }

    /**
     * 删除文件
     * @param fileName
     * @param cosClient
     */
    public static ResponseDto deleteFile(String fileName,COSClient cosClient) {
        try {
            String key = preKey+fileName;
            cosClient.deleteObject(TengXunImContstant.bucketName, key);
            return new ResponseDto(200,"删除文件成功！",null);
        } catch (CosClientException e) {
            e.printStackTrace();
            return new ResponseDto(405,"删除文件失败！",null);
        } finally {
            cosClient.shutdown();
        }
    }

    /**
     * 创建桶
     * @param bucketName
     * @return
     * @throws CosClientException
     * @throws CosServiceException
     */
    public Bucket createBucket(String bucketName,COSClient cosClient) throws CosClientException, CosServiceException {
        Bucket bucket = null;
        try {
            bucket = cosClient.createBucket(bucketName);
        } catch (CosClientException e) {
            e.printStackTrace();
        } finally {
        }
        return bucket;
    };

    /**
     * 删除桶
     * @param bucketName
     * @throws CosClientException
     * @throws CosServiceException
     */
    public void deleteBucket(String bucketName,COSClient cosClient) throws CosClientException, CosServiceException {
        try {
            cosClient.deleteBucket(bucketName);
        } catch (CosClientException e) {
            e.printStackTrace();
        } finally {
        }
    };

    /**
     * 判断桶是否存在
     * @param bucketName
     * @return
     * @throws CosClientException
     * @throws CosServiceException
     */
    public boolean doesBucketExist(String bucketName,COSClient cosClient) throws CosClientException, CosServiceException {
        boolean bucketExistFlag = cosClient.doesBucketExist(bucketName);
        return bucketExistFlag;
    };

    /**
     * 查看桶文件
     * @param bucketName
     * @return
     * @throws CosClientException
     * @throws CosServiceException
     */
    public ObjectListing listObjects(String bucketName,COSClient cosClient) throws CosClientException, CosServiceException {
        // 获取 bucket 下成员（设置 delimiter）
        ListObjectsRequest listObjectsRequest = new ListObjectsRequest();
        listObjectsRequest.setBucketName(bucketName);
        // 设置 list 的 prefix, 表示 list 出来的文件 key 都是以这个 prefix 开始
        listObjectsRequest.setPrefix("");
        // 设置 delimiter 为/, 即获取的是直接成员，不包含目录下的递归子成员
        listObjectsRequest.setDelimiter("/");
        // 设置 marker, (marker 由上一次 list 获取到, 或者第一次 list marker 为空)
        listObjectsRequest.setMarker("");
        // 设置最多 list 100 个成员,（如果不设置, 默认为 1000 个，最大允许一次 list 1000 个 key）
        listObjectsRequest.setMaxKeys(100);

        ObjectListing objectListing = cosClient.listObjects(listObjectsRequest);
        // 获取下次 list 的 marker
        String nextMarker = objectListing.getNextMarker();
        // 判断是否已经 list 完, 如果 list 结束, 则 isTruncated 为 false, 否则为 true
        boolean isTruncated = objectListing.isTruncated();
        List<COSObjectSummary> objectSummaries = objectListing.getObjectSummaries();
        for (COSObjectSummary cosObjectSummary : objectSummaries) {
            // get file path
            String key = cosObjectSummary.getKey();
            // get file length
            long fileSize = cosObjectSummary.getSize();
            // get file etag
            String eTag = cosObjectSummary.getETag();
            // get last modify time
            Date lastModified = cosObjectSummary.getLastModified();
            // get file save type
            String StorageClassStr = cosObjectSummary.getStorageClass();
        }
        return objectListing;
    }

    /**
     * 生成文件路径
     *
     * @return
     */
    private static String getFileKey(String originalfileName) {
        //1.获取后缀名 2.去除文件后缀 替换所有特殊字符
        String fileType = originalfileName.substring(originalfileName.lastIndexOf("."));
        String fileStr = StrUtil.removeSuffix(originalfileName, fileType).replaceAll("[^0-9a-zA-Z\\u4e00-\\u9fa5]", "_");
        return filePath + new DateTime().toString("yyyyMMddHHmmss") + "_" + fileStr + fileType;
    }
}
