package com.yinhai.yypt_lp.service.read.impl;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.json.JsonMapper;
import com.yinhai.ta404.core.transaction.annotation.TaTransactional;
import com.yinhai.yypt_lp.common.TxCommonFunction;
import com.yinhai.yypt_lp.dto.ResponseDto;
import com.yinhai.yypt_lp.enummeration.MsgEnum;
import com.yinhai.yypt_lp.mapper.read.ToolsImGroupMsgLogReadMapper;
import com.yinhai.yypt_lp.mapper.read.ToolsImMsgLogReadMapper;
import com.yinhai.yypt_lp.mapper.write.ToolsImGroupMsgLogWriteMapper;
import com.yinhai.yypt_lp.service.read.MessageService;
import com.yinhai.yypt_lp.service.read.ToolsImMsgLogReadService;
import com.yinhai.yypt_lp.service.write.ToolsImMsgLogWriteService;
import com.yinhai.yypt_lp.utils.CosUtil;
import com.yinhai.yypt_lp.utils.FileUtil;
import com.yinhai.yypt_lp.utils.JSONResult;
import com.yinhai.yypt_lp.utils.JsonFormUtil;
import com.yinhai.yypt_lp.vo.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.ClassUtils;
import org.springframework.util.ObjectUtils;

import javax.annotation.Resource;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@TaTransactional
@Slf4j
public class MessageServiceImpl implements MessageService {

    @Resource
    private ToolsImMsgLogReadService msgLogReadService;

    @Resource
    private ToolsImMsgLogWriteService msgLogWriteService;

    @Resource
    private ToolsImGroupMsgLogReadMapper groupMsgLogReadMapper;

    @Resource
    private ToolsImGroupMsgLogWriteMapper groupMsgLogWriteMapper;

    JsonMapper jsonMapper = new JsonMapper();
    ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public String handlePersonMessage(String Operator_Account,String Peer_Account,String path,String fileName) throws IOException {
        String filePath = null;
        try {
            JSONObject personMessage = TxCommonFunction.getPersonMessage(Operator_Account, Peer_Account, 0, null, false);
            PersonMsgVo personMsgVo = JSONObject.parseObject(personMessage.toJSONString(), PersonMsgVo.class);
            personMsgVo.setConversationValue("C2C" + Operator_Account + "&" + "C2C" + Peer_Account);
            log.info("---------------------------获取数据成功！--------------------------------");
            if(!"FAIL".equals(personMsgVo.getActionStatus())&&personMsgVo.getMsgList().size() > 0) {
                // 处理图片
                List<PerMsgBodyVo> perMsgBodyVos = handlePersonImage(personMsgVo.getMsgList());
                log.info("---------------------------处理图片成功！--------------------------------");
                personMsgVo.setMsgList(perMsgBodyVos);
                JSONObject perosonMsg = (JSONObject) JSON.toJSON(personMsgVo);
                filePath = path + fileName;
                FileUtil.writeJson(path + fileName,perosonMsg,true);
                log.info("---------------------------数据写入json文件成功！--------------------------------");
                if("0".equals(String.valueOf(personMsgVo.getComplete()))){
                    long lastMsgTime = personMsgVo.getLastMsgTime();
                    String lastMsgKey = personMsgVo.getLastMsgKey();
                    JSONObject perse = TxCommonFunction.getPersonMessage(Operator_Account, Peer_Account, lastMsgTime, lastMsgKey, true);
                    FileUtil.writeJson(path + fileName,perse,true);
                }
            }
        } catch (Exception e) {
            log.error(e.getMessage(),e);
        }
        return filePath;
    }

    @Override
    public void handleGroupMessage(String groupId,String path) throws Exception {
        ImResultVo groupMsg = TxCommonFunction.getGroupMsg(groupId, 1000);

        List<ImMsgBodyVo> imMsgBodyVos = handleGroupImage(groupMsg.getRspMsgList(),groupId);
        groupMsg.setRspMsgList(imMsgBodyVos);
        FileUtil.writeJson(path,JSONObject.parseObject(jsonMapper.writeValueAsString(groupMsg)),true);
        //Files.delete(Paths.get((path).substring(1)));
    }

    @Override
    public JSONResult getPersonMsg(String userId, String toUserId, Integer time) throws IOException {
        String path = ClassUtils.getDefaultClassLoader().getResource("static").getPath();
        ToolsImMsgLogVo toolsImMsgLogVo = new ToolsImMsgLogVo();
        toolsImMsgLogVo.setPhone(userId);
        List<PersonMsgVo> list = null;
        List<PersonMsgVo> personMsgList = new ArrayList<PersonMsgVo>();
        String result = null;
        List<ToolsImMsgLogVo> toolsImMsgLogVos = msgLogReadService.queryMsgLog(toolsImMsgLogVo);
        if(toolsImMsgLogVos.size() > 0) {
            for (ToolsImMsgLogVo msgLogVo : toolsImMsgLogVos) {
                if(MsgEnum.TIMTextElem.toString().equals(msgLogVo.getMsgType())){
                    String key = msgLogVo.getCosKey();
                    if(!ObjectUtils.isEmpty(key)){
                        String[] split = key.split("\\/");
                        String fileName = split[split.length -1];
                        String localPath = path + File.pathSeparator + fileName;
                        ResponseDto responseDto = CosUtil.downLoadFile(localPath, fileName, TxCommonFunction.initCOSClient());
                        if("200".equals(String.valueOf(responseDto.getCode()))){
                            log.info("-----------开始读取单聊json文件内容-------------------");
                            result = FileUtil.readJson(localPath);
                            Files.delete(Paths.get(localPath.substring(1)));
                            log.info("-----------读取单聊json文件内容结束-------------------");
                            log.info(JsonFormUtil.formatJson(result));
                            String str = "["+result+"]";
                            list = objectMapper.readValue(JSON.parse(str).toString(), List.class);
                            list = list.stream().distinct().collect(Collectors.toList());

                        } else {
                            return JSONResult.errorMsg("文件下载失败");
                        }
                    } else {
                        return JSONResult.errorMsg("保存json文件的cos_key不能为空");
                    }
                }
            }
            list = JSONObject.parseArray(JSONObject.toJSONString(list),PersonMsgVo.class);
            for (PersonMsgVo vo:list) {
                log.info(vo.getConversationValue());
                log.info("{}",vo.getConversationValue().contains("C2C" + userId));
                if(time != 0){
                    List<PerMsgBodyVo> msgList = vo.getMsgList();
                    List<PerMsgBodyVo> perMsgBodyVoStream = msgList.stream().filter(item -> item.getMsgTimeStamp() < time).collect(Collectors.toList());
                    vo.setMsgList(perMsgBodyVoStream);
                }
                // 对json中的数据进行过滤，获取用户想要的数据
                if(vo.getConversationValue().contains("C2C" + userId) && vo.getConversationValue().contains("C2C" + toUserId)){
                    personMsgList.add(vo);
                }
            }
        }
        return new JSONResult(200,"获取数据成功！", personMsgList);
    }

    @Override
    public JSONResult getGroupMsg(String groupId,Integer time) throws IOException {
        String result = null;
        String path = ClassUtils.getDefaultClassLoader().getResource("static").getPath();
        ToolsImGroupMsgLogVo toolsImGroupMsgLogVo = new ToolsImGroupMsgLogVo();
        toolsImGroupMsgLogVo.setGroupId(groupId);
        List<ToolsImGroupMsgLogVo> toolsImGroupMsgLogVos = groupMsgLogReadMapper.queryInfo(toolsImGroupMsgLogVo);
        for (ToolsImGroupMsgLogVo groupMsgLogVo:toolsImGroupMsgLogVos ) {
            if(MsgEnum.TIMTextElem.toString().equals(groupMsgLogVo.getMsgType())){
                String key = groupMsgLogVo.getCosKey();
                if(!ObjectUtils.isEmpty(key)) {
                    String[] split = key.split("\\/");
                    String fileName = split[split.length - 1];
                    String localPath = path + File.pathSeparator + fileName;
                    ResponseDto responseDto = CosUtil.downLoadFile(localPath, fileName, TxCommonFunction.initCOSClient());
                    if("200".equals(String.valueOf(responseDto.getCode()))) {
                        log.info("-----------开始读取群聊天json文件内容-------------------");
                        result = FileUtil.readJson(localPath);
                        //Files.delete(Paths.get(localPath.substring(1)));
                        log.info("-----------读取群聊天json文件内容结束-------------------");
                    } else {
                        return JSONResult.errorMsg("文件下载失败");
                    }
                } else {
                    return JSONResult.errorMsg("保存json文件的cos_key不能为空");
                }
            }
        }
        return new JSONResult(200,"获取数据成功！",result);
    }

    /**
     * 处理单聊记录中的图片
     * @param msgVoList
     */
    private List<PerMsgBodyVo> handlePersonImage(List<PerMsgBodyVo> msgVoList){
        msgVoList.forEach(item -> {
            List<MsgBodyVo> msgBodyVos = item.getMsgBody();
            ImgMsgContentVo img = null;
            if (MsgEnum.TIMImageElem.toString().equals(msgBodyVos.get(0).getMsgType())){
                img = JSON.parseObject(String.valueOf(msgBodyVos.get(0).getMsgContent()), ImgMsgContentVo.class);
                JSONObject jsonObject = (JSONObject) JSON.toJSON(img);
                JSONArray jsonArray = jsonObject.getJSONArray("ImageInfoArray");
                String js = JSONObject.toJSONString(jsonArray);
                List<ImgMsgVo> images = JSONObject.parseArray(js,ImgMsgVo.class);
                List<ImageFrontVo> frontImages = new ArrayList<ImageFrontVo>();
                images.forEach(imageMsg -> {
                    File fileByUrl = null;
                    try {
                        ImgMsgVo imgMsgVo = jsonMapper.readValue(jsonMapper.writeValueAsString(imageMsg), ImgMsgVo.class);
                        fileByUrl = FileUtil.getFileByUrl(imgMsgVo.getURL());
                        ResponseDto responseDto = CosUtil.uploadFile(fileByUrl, TxCommonFunction.initCOSClient());
                        if("200".equals(String.valueOf(responseDto.getCode()))){
                            Map data = (Map) responseDto.getData();
                            imgMsgVo.setURL(String.valueOf(data.get("url")));
                            ImageFrontVo imageFrontVo = new ImageFrontVo();
                            imageFrontVo.setHeight(imgMsgVo.getHeight());
                            imageFrontVo.setImageUrl(String.valueOf(data.get("url")));
                            imageFrontVo.setType(imgMsgVo.getType());
                            imageFrontVo.setSize(imgMsgVo.getSize());
                            imageFrontVo.setSizeType(imgMsgVo.getType());
                            imageFrontVo.setUrl(String.valueOf(data.get("url")));
                            imageFrontVo.setWidth(imgMsgVo.getWidth());
                            frontImages.add(imageFrontVo);
                            /*----------存库操作---------------*/
                            ToolsImMsgLogVo toolsImMsgLogVo = new ToolsImMsgLogVo();
                            toolsImMsgLogVo.setId(UUID.randomUUID().toString());
                            toolsImMsgLogVo.setMsgType(msgBodyVos.get(0).getMsgType());
                            toolsImMsgLogVo.setMsgKey(item.getMsgKey()); // 消息键
                            toolsImMsgLogVo.setPath(String.valueOf(data.get("url")));
                            toolsImMsgLogVo.setCosKey(String.valueOf(data.get("key")));
                            toolsImMsgLogVo.setPhone(item.getFrom_Account());
                            toolsImMsgLogVo.setCraeteTime(LocalDateTime.now());
                            toolsImMsgLogVo.setToPhone(item.getTo_Account());
                            msgLogWriteService.insertMsgLog(toolsImMsgLogVo);
                        }
                        log.info(responseDto.toString());
                    } catch (Exception e) {
                        log.error(e.getMessage(),e);
                    }
                });
                Object parse = JSONObject.parse(JSONObject.toJSONString(frontImages));
                img.setImageInfoArray(parse);
                msgBodyVos.get(0).setMsgContent(JSONObject.parse(JSONObject.toJSONString(img)));
            }
        });
        return msgVoList;
    }


    /**
     * 处理群聊记录中的图片
     * @param msgVoList
     */
    private List<ImMsgBodyVo> handleGroupImage(List<ImMsgBodyVo> msgVoList,String groupId){
        if(msgVoList.size()!=0){
            msgVoList.forEach(item -> {
                try{
                    List<MsgBodyVo> msgBodys = JSONObject.parseArray(JSONArray.toJSONString(item.getMsgBody()), MsgBodyVo.class);
                    if (msgBodys.size() > 0 && msgBodys != null && msgBodys.get(0) != null) {
                        MsgBodyVo msgBody = msgBodys.get(0);
                        Map content = (Map) msgBody.getMsgContent();
                        ImgMsgContentVo imgMsgContentVo = null;
                        if (MsgEnum.TIMImageElem.toString().equals(msgBody.getMsgType())) {
                            imgMsgContentVo = JSON.parseObject(content.toString(), ImgMsgContentVo.class);
                            JSONObject jsonObject = (JSONObject) JSON.toJSON(imgMsgContentVo);
                            JSONArray jsonArray = jsonObject.getJSONArray("ImageInfoArray");
                            String js = JSONObject.toJSONString(jsonArray);
                            List<ImgMsgVo> images = JSONObject.parseArray(js, ImgMsgVo.class);
                            List<ImageFrontVo> frontImages = new ArrayList<ImageFrontVo>();
                            images.forEach(imageMsg -> {
                                File fileByUrl = null;
                                ImgMsgVo imgMsgVo = null;
                                try {
                                    imgMsgVo = jsonMapper.readValue(jsonMapper.writeValueAsString(imageMsg), ImgMsgVo.class);
                                } catch (JsonProcessingException e) {
                                    log.error(e.getMessage(),e);
                                }
                                fileByUrl = FileUtil.getFileByUrl(imageMsg.getURL());
                                ResponseDto responseDto = CosUtil.uploadFile(fileByUrl, TxCommonFunction.initCOSClient());
                                if ("200".equals(String.valueOf(responseDto.getCode()))) {
                                    Map data = (Map) responseDto.getData();
                                    imageMsg.setURL(String.valueOf(data.get("url")));
                                    ImageFrontVo imageFrontVo = new ImageFrontVo();
                                    imageFrontVo.setHeight(imgMsgVo.getHeight());
                                    imageFrontVo.setImageUrl(String.valueOf(data.get("url")));
                                    imageFrontVo.setType(imgMsgVo.getType());
                                    imageFrontVo.setSize(imgMsgVo.getSize());
                                    imageFrontVo.setSizeType(imgMsgVo.getType());
                                    imageFrontVo.setUrl(String.valueOf(data.get("url")));
                                    imageFrontVo.setWidth(imgMsgVo.getWidth());
                                    frontImages.add(imageFrontVo);
                                    ToolsImGroupMsgLogVo toolsImGroupMsgLogVo = new ToolsImGroupMsgLogVo();
                                    toolsImGroupMsgLogVo.setId(UUID.randomUUID().toString());
                                    toolsImGroupMsgLogVo.setGroupId(groupId);
                                    toolsImGroupMsgLogVo.setMsgType(MsgEnum.TIMImageElem.toString());
                                    toolsImGroupMsgLogVo.setMsgKey(String.valueOf(item.getMsgSeq()));
                                    toolsImGroupMsgLogVo.setPath(String.valueOf(data.get("url")));
                                    toolsImGroupMsgLogVo.setCosKey(String.valueOf(data.get("key")));
                                    toolsImGroupMsgLogVo.setCreateTime(LocalDateTime.now());
                                    groupMsgLogWriteMapper.insertInfo(toolsImGroupMsgLogVo);
                                }
                            });
                            Object parse = JSONObject.parse(JSONObject.toJSONString(frontImages));
                            imgMsgContentVo.setImageInfoArray(parse);
                            msgBody.setMsgContent(JSONObject.parse(JSONObject.toJSONString(imgMsgContentVo)));
                        }
                    }
                } catch (Exception e) {
                    log.error(e.getMessage(),e);
                }
            });
        }
        return msgVoList;
    }

}
