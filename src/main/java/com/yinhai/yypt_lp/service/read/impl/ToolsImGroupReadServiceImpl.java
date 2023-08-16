package com.yinhai.yypt_lp.service.read.impl;

import com.yinhai.ta404.core.transaction.annotation.TaTransactional;
import com.yinhai.yypt_lp.mapper.read.ToolsImGroupReadMapper;
import com.yinhai.yypt_lp.service.read.ToolsImGroupReadService;
import com.yinhai.yypt_lp.vo.ToolsImGroupVo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
@TaTransactional(readOnly = true)
public class ToolsImGroupReadServiceImpl implements ToolsImGroupReadService {

    @Resource
    private ToolsImGroupReadMapper readMapper;

    @Override
    public List<ToolsImGroupVo> queryGroup(ToolsImGroupVo toolsImGroupVo) {
        List<ToolsImGroupVo> toolsImGroupVos = readMapper.queryGroup(toolsImGroupVo);
        return toolsImGroupVos;
    }
}
