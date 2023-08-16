package com.yinhai.yypt_lp.schedule;

import com.yinhai.yypt_lp.common.TxCommonFunction;
import com.yinhai.yypt_lp.dto.ResponseDto;
import com.yinhai.yypt_lp.entity.ToolsImUserEntity;
import com.yinhai.yypt_lp.enummeration.CommonEnum;
import com.yinhai.yypt_lp.enummeration.MsgEnum;
import com.yinhai.yypt_lp.mapper.write.ToolsImGroupMsgLogWriteMapper;
import com.yinhai.yypt_lp.service.read.MessageService;
import com.yinhai.yypt_lp.service.read.ToolsImGroupReadService;
import com.yinhai.yypt_lp.service.read.ToolsImUserReadService;
import com.yinhai.yypt_lp.service.write.ToolsImMsgLogWriteService;
import com.yinhai.yypt_lp.utils.CosUtil;
import com.yinhai.yypt_lp.vo.ToolsImGroupMsgLogVo;
import com.yinhai.yypt_lp.vo.ToolsImGroupVo;
import com.yinhai.yypt_lp.vo.ToolsImMsgLogVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.util.ClassUtils;

import java.io.File;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.*;

//@Component
@Slf4j
public class Task {

    @Autowired
    private ToolsImUserReadService toolsImUserService;
    @Autowired
    private MessageService messageService;
    @Autowired
    private ToolsImMsgLogWriteService toolsImMsgLogService;
    @Autowired
    private ToolsImGroupReadService toolsImGroupService;
    @Autowired
    private ToolsImGroupMsgLogWriteMapper toolsImGroupMsgLogMapper;

    SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd");
    String path = ClassUtils.getDefaultClassLoader().getResource("static").getPath();

    @Scheduled(cron ="0 0/30 * * * ?")
    public void task() throws Exception {
        String[] split = path.split("\\/");
        String url = "/" + split[1] + "/" + split[2] + "/" + "static/";
        String fileName = "message_person_" + sf.format(new Date()) + ".json";
        List<ToolsImUserEntity> toolsImUserEntities = toolsImUserService.queryAllInfo();
        List<String> strList = new ArrayList<String>();
        for(ToolsImUserEntity item : toolsImUserEntities) {
            for (ToolsImUserEntity user:toolsImUserEntities) {
                log.info("item.phone:{}",item.getPhone());
                log.info("user.phone:{}",user.getPhone());
                if(!strList.contains(user.getPhone() + '-' + item.getPhone()) && !item.equals(user)&&
                !item.getUserRole().equals(user.getUserRole())) {
                    strList.add(item.getPhone() + '-' + user.getPhone());
                }
                if(!item.equals(user)&&!item.getUserRole().equals(user.getUserRole())&&
                !strList.contains(user.getPhone() + '-' + item.getPhone())){
                    try {
                        //messageService.handlePersonMessage(item.getPhone(),user.getPhone(),path,fileName);
                        messageService.handlePersonMessage(item.getPhone(),user.getPhone(),url,fileName);
                        ToolsImMsgLogVo toolsImMsgLogVo = new ToolsImMsgLogVo();
                        toolsImMsgLogVo.setId(UUID.randomUUID().toString());
                        toolsImMsgLogVo.setMsgType(MsgEnum.TIMTextElem.toString());
                        toolsImMsgLogVo.setPhone(item.getPhone());
                        toolsImMsgLogVo.setToPhone(user.getPhone());
                        toolsImMsgLogVo.setCraeteTime(LocalDateTime.now());
                        toolsImMsgLogService.insertMsgLog(toolsImMsgLogVo);
                        log.info("---------------------------插入数据成功！--------------------------------");
                    } catch (Exception e) {
                        log.error(e.getMessage(),e);
                    }
                }
            }
        }
        //File file = new File(path + File.separator + fileName);
        File file = new File(url  + fileName);
        ResponseDto responseDto = CosUtil.uploadFile(file, TxCommonFunction.initCOSClient());
        if("200".equals(String.valueOf(responseDto.getCode()))){
            log.info("---------------------------上传json文件成功！--------------------------------");
            Map data = (Map) responseDto.getData();
            ToolsImMsgLogVo toolsImMsgLogVo = new ToolsImMsgLogVo();
            toolsImMsgLogVo.setPath(String.valueOf(data.get("url")));
            toolsImMsgLogVo.setCosKey(String.valueOf(data.get("key")));
            toolsImMsgLogService.updateMsgLog(toolsImMsgLogVo);
            log.info("---------------------------更新数据成功！--------------------------------");
        } else {
            log.error("上传聊天记录：json文件失败");
        }
    }

    //@Scheduled(cron ="0 0/2 * * * ?")
    public void handleGroupMsg() throws Exception {
        String fileName = "message_group_" + sf.format(new Date()) + ".json";
        String groupMsgPath = path + File.separator + fileName;
        ToolsImGroupVo toolsImGroupVo = new ToolsImGroupVo();
        toolsImGroupVo.setGroupStatus(CommonEnum.EFFECTIVE.toString());
        List<ToolsImGroupVo> toolsImGroupVos = toolsImGroupService.queryGroup(toolsImGroupVo);
        for (ToolsImGroupVo groupRecord:toolsImGroupVos) {
            messageService.handleGroupMessage(groupRecord.getGroupId(),groupMsgPath);
            ToolsImGroupMsgLogVo groupMsgLogVo = new ToolsImGroupMsgLogVo();
            groupMsgLogVo.setGroupId(groupRecord.getGroupId());
            groupMsgLogVo.setId(UUID.randomUUID().toString());
            groupMsgLogVo.setMsgType(MsgEnum.TIMTextElem.toString());
            groupMsgLogVo.setCreateTime(LocalDateTime.now());
            toolsImGroupMsgLogMapper.insertInfo(groupMsgLogVo);
        }
        File file = new File(groupMsgPath);
        ResponseDto responseDto = CosUtil.uploadFile(file, TxCommonFunction.initCOSClient());
        if("200".equals(String.valueOf(responseDto.getCode()))){
            Map data = (Map) responseDto.getData();
            ToolsImGroupMsgLogVo toolsImGroupMsgLogVo = new ToolsImGroupMsgLogVo();
            toolsImGroupMsgLogVo.setPath(String.valueOf(data.get("url")));
            toolsImGroupMsgLogVo.setCosKey(String.valueOf(data.get("key")));
            toolsImGroupMsgLogMapper.updateInfo(toolsImGroupMsgLogVo);
        }
    }
}
