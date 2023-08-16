package com.yinhai.yypt_lp.service.write.impl;

import com.yinhai.yypt_lp.dto.ResponseDto;
import com.yinhai.yypt_lp.entity.WechatArticle;
import com.yinhai.yypt_lp.entity.WechatArticleC;
import com.yinhai.yypt_lp.mapper.read.WeChatArticleReadMapper;
import com.yinhai.yypt_lp.mapper.write.WeChatArticleCWriteMapper;
import com.yinhai.yypt_lp.mapper.write.WeChatArticleWriteMapper;
import com.yinhai.yypt_lp.service.read.CosFileReadService;
import com.yinhai.yypt_lp.service.write.WeChatArticleWriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.yinhai.ta404.core.transaction.annotation.TaTransactional;
import com.yinhai.ta404.core.service.BaseService;
import com.yinhai.ta404.core.utils.UUIDUtils;
import com.yinhai.ta404.core.exception.AppException;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import java.io.*;
import java.util.List;
import java.util.Map;

import static org.springframework.boot.Banner.Mode.LOG;

/**
* 微信文章表(WechatArticle)表服务实现类
*
* @author default
* @since 2023-07-19 13:46:39
*/
@Service
@TaTransactional
public class WeChatArticleWriteServiceImpl extends BaseService implements WeChatArticleWriteService {
    @Resource
    private WeChatArticleWriteMapper weChatArticleWriteMapper;
    @Resource
    private WeChatArticleCWriteMapper weChatArticleCWriteMapper;
    @Resource
    private WeChatArticleReadMapper weChatArticleReadMapper;
    @Resource
    private CosFileReadService cosFileService;
    /**
    * 新增数据
    *
    * @param wechatArticleAddVo 实例对象
    * @return 实例对象
    */
    @Override
    public WechatArticle addWechatArticleInfo(WechatArticle wechatArticle) throws IOException {
        InputStream inputStream = null;
        ByteArrayOutputStream bos = null;
        // 文件处理
        MultipartFile[] fileList = wechatArticle.getFile();
        if(fileList.length >1){
            throw new AppException("请传入单个文件");
        }else if(fileList.length == 0){
            throw new AppException("请上传文件");
        }
        MultipartFile file = fileList[0];
        inputStream = file.getInputStream();
        byte[] buffer = null;
        // 此处用字节输出流
        bos = new ByteArrayOutputStream();
        byte[] temp = new byte[1024];
        int n;
        while ((n = inputStream.read(temp)) != -1) {
            bos.write(temp, 0, n);
        }
        // 将字节输出流转化为byte[],保存到数据库中
        buffer = bos.toByteArray();
        wechatArticle.setContent(buffer);
        // 记录文件名和文件类型
        String[] fileName = file.getOriginalFilename().split("\\.");
        wechatArticle.setFileName(fileName[0]);
        wechatArticle.setFileType(fileName[1]);
        wechatArticle.setId(UUIDUtils.getUUID());
        wechatArticle.setAae036(getSysTimestamp());
        /**----------将文件上传到cos--------**/
        ResponseDto responseDto = cosFileService.upload(file);
        if("200".equals(String.valueOf(responseDto.getCode()))){
            Map data = (Map) responseDto.getData();
            wechatArticle.setPath(String.valueOf(data.get("url")));
            wechatArticle.setCosKey(String.valueOf(data.get("key")));
        }
        int i = weChatArticleWriteMapper.insert(wechatArticle);
        if (i != 1) {
        throw new AppException("未添加任何数据，请重试");
        }
        // 新增记录表
        insertC(wechatArticle,"1");
        return wechatArticle;
    }

    /**
    * 修改数据
    *
    * @param wechatArticleEditVo 实例对象
    * @return 实例对象
    */
    @Override
    public WechatArticle editWechatArticleInfo(WechatArticle wechatArticle) {
        wechatArticle.setAae036(getSysTimestamp());
        int i = weChatArticleWriteMapper.update(wechatArticle);
        if (i != 1) {
        throw new AppException("未更新任何数据，请重试");
        }
        // 新增记录表
        wechatArticle = weChatArticleReadMapper.queryById(wechatArticle.getId());
        insertC(wechatArticle,"2");
        return wechatArticle;
    }
    /**
    * 通过主键物理删除数据
    *
    * @param id 主键
    * @return 受影响行数
    */
    @Override
    public int removeWechatArticleById(String id,String aae011) {
        WechatArticle wechatArticle = weChatArticleReadMapper.queryById(id);
        wechatArticle.setAae011(aae011);
        wechatArticle.setAae036(getSysTimestamp());
        // 新增记录表
        insertC(wechatArticle,"3");
        int i = this.weChatArticleWriteMapper.deleteById(id);
        if (i == 0) throw new AppException("未删除任何数据，请重试");
        return i;
    }

    @Override
    public void sortList(List<WechatArticle> wechatArticles) {
// 按照顺序排序
        for(int i = 0;i<wechatArticles.size();i++){
            weChatArticleWriteMapper.updateSort(wechatArticles.get(i).getId(), i);
        }
    }

    /**
     * 新增记录表
     * @param wechatArticle
     * @param evtType
     */
    public void insertC(WechatArticle wechatArticle,String evtType){
        WechatArticleC wechatArticleC = new WechatArticleC();
        wechatArticleC.setcId(UUIDUtils.getUUID());
        wechatArticleC.setId(wechatArticle.getId());
        wechatArticleC.setEvtType(evtType);
        wechatArticleC.setTitle(wechatArticle.getTitle());
        wechatArticleC.setContent(wechatArticle.getContent());
        wechatArticleC.setStartTime(wechatArticle.getStartTime());
        wechatArticleC.setEndTime(wechatArticle.getEndTime());
        wechatArticleC.setSort(wechatArticle.getSort());
        wechatArticleC.setAae036(wechatArticle.getAae036());
        wechatArticleC.setAae011(wechatArticle.getAae011());
        wechatArticleC.setRemarks(wechatArticle.getRemarks());
        wechatArticleC.setFileName(wechatArticle.getFileName());
        wechatArticleC.setFileType(wechatArticle.getFileType());
        wechatArticleC.setIntroduction(wechatArticle.getIntroduction());
        int i = weChatArticleCWriteMapper.insertC(wechatArticleC);
        if (i == 0) throw new AppException("未新增日志，请重试");
    }
    /**
     * 从数据库读文件
     * @return
     */
    public boolean readResourceFromDB(String id) {
        FileOutputStream fos = null;
        ByteArrayInputStream bis = null;
        try{
            // 查询资源
            WechatArticle wechatArticle = weChatArticleReadMapper.queryById(id);
            File file = new File("D:\\"+wechatArticle.getFileName()+"."+wechatArticle.getFileType());
            if (file.createNewFile()) {
                System.out.println("创建文件成功！");
            } else {
                System.out.println("文件已经存在不需要重复创建");
            }
            // 获取资源内容的byte[]
            bis = new ByteArrayInputStream(wechatArticle.getContent());
            // 将byte[]输出到文件
            fos = new FileOutputStream(file);
            int len = 0;
            byte[] buf = new byte[1024];
            while ((len = bis.read(buf)) != -1) {
                fos.write(buf, 0, len);
            }
            return true;
        } catch (Exception e) {
            return false;
        } finally {
            if (null != fos) {
                try {
                    fos.close();
                } catch (IOException e) {
                }
            }
            if (null != bis) {
                try {
                    bis.close();
                } catch (IOException e) {
                }
            }
        }

    }
    
    //private String upload(MultipartFile file){
    //
    //}
}
