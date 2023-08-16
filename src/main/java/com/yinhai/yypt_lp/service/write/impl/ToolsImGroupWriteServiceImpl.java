package com.yinhai.yypt_lp.service.write.impl;

import com.yinhai.ta404.core.transaction.annotation.TaTransactional;
import com.yinhai.yypt_lp.enummeration.CommonEnum;
import com.yinhai.yypt_lp.mapper.read.ToolsImGroupReadMapper;
import com.yinhai.yypt_lp.mapper.write.ToolsImGroupWriteMapper;
import com.yinhai.yypt_lp.service.write.ToolsImGroupWriteService;
import com.yinhai.yypt_lp.vo.ToolsImGroupVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@TaTransactional
@Slf4j
public class ToolsImGroupWriteServiceImpl implements ToolsImGroupWriteService {

    @Resource
    private ToolsImGroupReadMapper readMapper;
    @Resource
    private ToolsImGroupWriteMapper writeMapper;

    @Override
    public void insertGroup(ToolsImGroupVo toolsImGroupVo) {
        List<ToolsImGroupVo> toolsImGroupVos = readMapper.queryGroup(toolsImGroupVo);
        if(toolsImGroupVos.size() == 0){
            toolsImGroupVo.setId(UUID.randomUUID().toString());
            toolsImGroupVo.setGroupStatus(CommonEnum.STAGING.toString());
            toolsImGroupVo.setCreateTime(LocalDateTime.now());
            writeMapper.insertGroup(toolsImGroupVo);
        } else {
            for (ToolsImGroupVo vo:toolsImGroupVos) {
                if(CommonEnum.INVALID.equals(vo.getGroupStatus())){
                    toolsImGroupVo.setGroupStatus(CommonEnum.STAGING.toString());
                    writeMapper.updateGroup(toolsImGroupVo);
                }
            }
        }
    }

    @Override
    public void updateGroup(ToolsImGroupVo toolsImGroupVo) {
        List<ToolsImGroupVo> toolsImGroupVos = readMapper.queryGroup(toolsImGroupVo);
        if(toolsImGroupVos.size() > 0){
            for (ToolsImGroupVo vo:toolsImGroupVos) {
                if (!CommonEnum.EFFECTIVE.equals(vo.getGroupStatus())) {
                    toolsImGroupVo.setGroupStatus(CommonEnum.EFFECTIVE.toString());
                    int i = writeMapper.updateGroup(toolsImGroupVo);
                    log.info("更新数据条数：{}",i);
                }
            }
        }
    }

    @Override
    public void delGroup(ToolsImGroupVo toolsImGroupVo) {
        List<ToolsImGroupVo> toolsImGroupVos = readMapper.queryGroup(toolsImGroupVo);
        if(toolsImGroupVos.size() > 0){
            toolsImGroupVo.setGroupStatus(CommonEnum.INVALID.toString());
            int i = writeMapper.updateGroup(toolsImGroupVo);
            log.info("更新数据条数：{}",i);
        }
    }
}
