package com.yinhai.yypt_lp.service.write.impl;

import com.yinhai.ta404.core.transaction.annotation.TaTransactional;
import com.yinhai.yypt_lp.enummeration.CommonEnum;
import com.yinhai.yypt_lp.mapper.read.ToolsImConversationReadMapper;
import com.yinhai.yypt_lp.mapper.write.ToolsImConversationWriteMapper;
import com.yinhai.yypt_lp.service.write.ToolsImConversationWriteService;
import com.yinhai.yypt_lp.vo.ToolsImConversationVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@TaTransactional
@Slf4j
public class ToolsImConversationWriteServiceImpl implements ToolsImConversationWriteService {

    @Resource
    private ToolsImConversationReadMapper readMapper;
    @Resource
    private ToolsImConversationWriteMapper writeMapper;

    @Override
    public void insertConversation(ToolsImConversationVo record) {
        List<ToolsImConversationVo> toolsImConversationVos = readMapper.queryConversation(record);
        if(toolsImConversationVos.size() == 0) {
            record.setId(UUID.randomUUID().toString());
            record.setConversationStatus(CommonEnum.STAGING.toString());
            record.setCreateTime(LocalDateTime.now());
            writeMapper.insertConversation(record);
        } else {
            for (ToolsImConversationVo vo:toolsImConversationVos) {
                if(CommonEnum.INVALID.equals(vo.getConversationStatus())){
                    record.setConversationStatus(CommonEnum.STAGING.toString());
                    writeMapper.updateConversation(record);
                }
            }
        }
    }

    @Override
    public void updateConversation(ToolsImConversationVo record) {
        List<ToolsImConversationVo> toolsImConversationVos = readMapper.queryConversation(record);
        if(toolsImConversationVos.size() > 0){
            for (ToolsImConversationVo vo:toolsImConversationVos) {
                if(!CommonEnum.EFFECTIVE.equals(vo.getConversationStatus())){
                    record.setConversationStatus(CommonEnum.EFFECTIVE.toString());
                    int i = writeMapper.updateConversation(record);
                    log.info("更新数据条数：{}",i);
                }
            }
        }
    }

    @Override
    public void delConversation(ToolsImConversationVo record) {
        List<ToolsImConversationVo> toolsImConversationVos = readMapper.queryConversation(record);
        if(toolsImConversationVos.size() > 0){
            record.setConversationStatus(CommonEnum.INVALID.toString());
            int i = writeMapper.updateConversation(record);
            log.info("更新数据条数：{}",i);
        }
    }
}
