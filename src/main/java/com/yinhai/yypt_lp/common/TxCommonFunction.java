package com.yinhai.yypt_lp.common;

import cn.hutool.core.date.DateUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.qcloud.cos.COSClient;
import com.qcloud.cos.ClientConfig;
import com.qcloud.cos.auth.BasicCOSCredentials;
import com.qcloud.cos.auth.COSCredentials;
import com.qcloud.cos.region.Region;
import com.yinhai.yypt_lp.constant.TencentCloudImApiConstant;
import com.yinhai.yypt_lp.constant.TengXunImContstant;
import com.yinhai.yypt_lp.utils.FileUtil;
import com.yinhai.yypt_lp.utils.HttpUtil;
import com.yinhai.yypt_lp.utils.TLSSigAPIv2;
import com.yinhai.yypt_lp.vo.*;
import lombok.extern.slf4j.Slf4j;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Slf4j
public class TxCommonFunction {

    public static COSClient initCOSClient(){
        COSCredentials cred = new BasicCOSCredentials(TengXunImContstant.SecretId, TengXunImContstant.SecretKey);
        Region region = new Region(TengXunImContstant.region);
        ClientConfig clientConfig = new ClientConfig(region);
        // 生成 cos 客户端。
        COSClient cosClient = new COSClient(cred, clientConfig);
        return cosClient;
    }

    /**
     * 拉取个人聊天信息到json文件
     * @param Operator_Account
     * @param Peer_Account
     * @param lastMsgTime
     * @param lastMsgKey
     * @return path
     * @throws ParseException
     */
    public static JSONObject getPersonMessage(String Operator_Account,String Peer_Account,long lastMsgTime,String lastMsgKey,boolean flag) throws ParseException {
        SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String endDate = sf.format(new Date());
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());
        calendar.add(Calendar.DAY_OF_MONTH, -7);
        long firstDate = sf.parse(sf.format(calendar.getTime())).getTime()/1000;
        long lastDate = sf.parse(endDate).getTime()/1000;
        Map map = new HashMap<>();
        map.put("Operator_Account",Operator_Account);
        map.put("Peer_Account",Peer_Account);
        map.put("MaxCnt",200);
        map.put("MinTime",firstDate);
        if(flag){
            map.put("MaxTime",lastMsgTime);
            map.put("LastMsgKey",lastMsgKey);
        } else {
            map.put("MaxTime",lastDate);
        }
        String url = TencentCloudImApiConstant.baseUrl + TencentCloudImApiConstant.HistoryMessage.GET_PERSON_MSG;
        StringBuilder str = new StringBuilder();
        String userSign = TLSSigAPIv2.genUserSig("administrator",sf.parse(endDate).getTime()/1000);
        str.append(url).append("?sdkappid=").append(TengXunImContstant.SDKAppID)
                .append("&identifier=administrator")
                .append("&usersig=")
                .append(userSign)
                .append("&random=99999999&contenttype=json");
        String s = HttpUtil.sendPost(str.toString(), map);
        JSONObject parse = (JSONObject)JSONObject.parse(s);
        return parse;
    }

    /**
     * 添加好友
     * @param From_Account 自己账号
     * @param To_Account   好友账号
     * @param AddSource
     * return
     */
    public static JSONObject addFriend(String From_Account,String To_Account,String AddSource) throws ParseException {
        SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String data = sf.format(new Date());
        Map map = new HashMap();
        map.put("From_Account",From_Account);
        List list = new ArrayList();
        Map param = new HashMap();
        param.put("To_Account",To_Account);
        param.put("AddSource",AddSource);
        list.add(param);
        map.put("AddFriendItem",list);
        String url = TencentCloudImApiConstant.baseUrl + TencentCloudImApiConstant.RelationManage.FRIEND_ADD;
        StringBuilder str = new StringBuilder();
        String userSign = TLSSigAPIv2.genUserSig("administrator",sf.parse(data).getTime()/1000);
        str.append(url).append("?sdkappid=").append(TengXunImContstant.SDKAppID)
                .append("&identifier=administrator")
                .append("&usersig=")
                .append(userSign)
                .append("&random=99999999&contenttype=json");
        String s = HttpUtil.sendPost(str.toString(), map);
        JSONObject parse = (JSONObject)JSONObject.parse(s);
        return parse;
    }

    /**
     * 拉取好友列表
     * @param From_Account 当前账号
     * return
     */
    public static JSONObject getFriends(String From_Account){
        Map map = new HashMap();
        map.put("From_Account",From_Account);
        map.put("StartIndex",0);
        map.put("StandardSequence",0);
        String url = TencentCloudImApiConstant.baseUrl + TencentCloudImApiConstant.RelationManage.FRIEND_GET;
        StringBuilder str = new StringBuilder();
        String userSign = TLSSigAPIv2.genUserSig("administrator",1688325600);
        str.append(url).append("?sdkappid=").append(TengXunImContstant.SDKAppID)
                .append("&identifier=administrator")
                .append("&usersig=")
                .append(userSign)
                .append("&random=99999999&contenttype=json");
        String s = HttpUtil.sendPost(str.toString(), map);
        JSONObject parse = (JSONObject)JSONObject.parse(s);
        return parse;
    }

    /**
     * 获取群消息
     * @param GroupId
     * @param ReqMsgNumber
     * @return
     */
    public static ImResultVo getGroupMsg(String GroupId, Integer ReqMsgNumber) throws ParseException {
        SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String data = sf.format(new Date());
        Map map = new HashMap();
        map.put("GroupId",GroupId);
        map.put("ReqMsgNumber",ReqMsgNumber);
        String getGroupUrl = TencentCloudImApiConstant.baseUrl + TencentCloudImApiConstant.HistoryMessage.GET_GROUP_MSG;
        StringBuilder str = new StringBuilder();
        String userSign = TLSSigAPIv2.genUserSig("administrator",sf.parse(data).getTime()/1000);
        str.append(getGroupUrl).append("?sdkappid=").append(TengXunImContstant.SDKAppID)
                .append("&identifier=administrator")
                .append("&usersig=")
                .append(userSign)
                .append("&random=99999999&contenttype=json");
        String s = HttpUtil.sendPost(str.toString(), map);
        JSONObject parse = (JSONObject)JSONObject.parse(s);
        log.info(parse.toJSONString());
        return JSON.parseObject(JSON.toJSONBytes(JSON.parse(s)),ImResultVo.class);
    }

    /**
     * 获取所以群聊天记录
     * @param groupId
     * @return
     */
    public List<ImResultVo> getGroupMsgAll(String groupId) throws ParseException {
        List<ImResultVo> results = new ArrayList<>();
        int reqMsgSeq = 0;
        boolean flag = false;
        List<ImMsgBodyVo> rspMsgList;
        ImResultVo result;
        do {
            result = getGroupMsg(groupId, reqMsgSeq);
            rspMsgList = result.getRspMsgList();
            if (rspMsgList != null) {
                // 移除指定对象
                rspMsgList.removeIf(imMsgBody -> imMsgBody.getIsPlaceMsg() != 0);
                int msgSize = rspMsgList.size();
                if (msgSize != 0) {
                    // 遍历消息，如果消息是图片，视频就保存文件服务器，返回地址，重新存进去
                    rspMsgList = saveImgOrVideo(rspMsgList, groupId);
                    result.setRspMsgList(rspMsgList);
                    results.add(result);
                    if (msgSize > 1) {
                        reqMsgSeq = rspMsgList.get(msgSize - 1).getMsgSeq() - 1;
                        if(reqMsgSeq == 0){
                            // 说明消息读完了，跳出循环
                            flag = false;
                        }else {
                            // 否则继续读
                            flag = true;
                        }
                    } else {
                        flag = false;
                    }
                } else {
                    flag = false;
                }
            }
        } while (flag);
        return results;
    }

    /**
     * 保存聊天记录中的图片或视频
     * @param rspMsgList
     * @param groupId
     * @return
     */
    private List<ImMsgBodyVo> saveImgOrVideo(List<ImMsgBodyVo> rspMsgList, String groupId) {
        rspMsgList.forEach(
                imMsgBody -> {
                    try {
                        List<MsgBodyVo> msgBodys = JSONObject.parseArray(JSONArray.toJSONString(imMsgBody.getMsgBody()), MsgBodyVo.class);
                        if (msgBodys != null && msgBodys.get(0) != null) {
                            MsgBodyVo msgBody = msgBodys.get(0);
                            String msgType = msgBody.getMsgType();
                            if (msgType != null) {
                                if ("TIMImageElem".equalsIgnoreCase(msgType)) {
                                    log.info("存图片");
                                    ImgMsgContentVo img = JSON.parseObject(JSON.toJSONBytes(msgBody.getMsgContent()), ImgMsgContentVo.class);
                                    List<ImgMsgVo> img1 = (List<ImgMsgVo>) img.getImageInfoArray();
                                    img1.forEach(imgMsg -> {
                                        FileInputStream fileInputStream = null;
                                        File fileByUrl = null;
                                        try {
                                            // 根据url下载图片
                                            fileByUrl = FileUtil.getFileByUrl(imgMsg.getURL());
                                            fileInputStream = new FileInputStream(fileByUrl);
                                            String newName = DateUtil.currentSeconds() + "_" + imgMsg.getType() + FileUtil.getFileType(imgMsg.getURL());
                                            //String fileObject = Contant.IM_IMG + groupId + "/" + newName;
                                            //// 存储图片
                                            //minioUtil.putObject(minioConfig.getBucketName(), fileObject, fileInputStream);
                                            //String url = minioUtil.getObjectUrl(minioConfig.getBucketName(), fileObject);
                                            log.info("Minio存储Img");
                                            // 更新图片地址
                                            //imgMsg.setURL(url);
                                        } catch (Exception ignored) {
                                            // 如果出异常了，就不更新聊天记录的图片了
                                        } finally {
                                            if (fileInputStream != null) {
                                                try {
                                                    fileInputStream.close();
                                                } catch (IOException ignored) {
                                                }
                                            }
                                            if (fileByUrl != null) {
                                                fileByUrl.delete();
                                            }
                                        }
                                    });
                                    img.setImageInfoArray(img1);
                                    msgBody.setMsgContent(img);
                                    msgBodys.clear();
                                    msgBodys.add(msgBody);
                                    imMsgBody.setMsgBody(msgBodys);

                                }/*else if ("TIMFileElem".equalsIgnoreCase(msgType)) {
                                    log.info("存文件");
                                    FileMsgContent file = JSON.parseObject(JSON.toJSONBytes(msgBody.getMsgContent()), FileMsgContent.class);
                                    FileInputStream fileInputStream = null;
                                    File fileByUrl = null;
                                    try {
                                        // 根据url下载文件
                                        fileByUrl = FileUtil.getFileByUrl(file.getUrl());
                                        fileInputStream = new FileInputStream(fileByUrl);
                                        String fileObject = Contant.IM_FILE + groupId + "/" + fileByUrl.getName();
                                        // 存储图片
                                        minioUtil.putObject(minioConfig.getBucketName(), fileObject, fileInputStream);
                                        String url = minioUtil.getObjectUrl(minioConfig.getBucketName(), fileObject);
                                        log.info("Minio存储文件");
                                        file.setUrl(url);
                                    } catch (Exception ignored) {
                                        // 如果出异常了，就不更新聊天记录的文件
                                    } finally {
                                        if (fileInputStream != null) {
                                            try {
                                                fileInputStream.close();
                                            } catch (IOException ignored) {
                                            }
                                        }
                                        if (fileByUrl != null) {
                                            fileByUrl.delete();
                                        }
                                    }
                                    msgBody.setMsgContent(file);
                                    msgBodys.clear();
                                    msgBodys.add(msgBody);
                                    imMsgBody.setMsgBody(msgBodys);
                                }*/
                            }
                        }
                    } catch (Exception ignored) {
                        // 报错说明消息不符合解析格式，不需要处理
                    }
                }
        );
        return rspMsgList;
    }

}
