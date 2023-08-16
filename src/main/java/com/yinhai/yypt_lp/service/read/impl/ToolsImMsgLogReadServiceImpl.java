package com.yinhai.yypt_lp.service.read.impl;

import com.yinhai.ta404.core.transaction.annotation.TaTransactional;
import com.yinhai.yypt_lp.mapper.read.ToolsImMsgLogReadMapper;
import com.yinhai.yypt_lp.service.read.ToolsImMsgLogReadService;
import com.yinhai.yypt_lp.vo.ToolsImMsgLogVo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
@TaTransactional(readOnly = true)
public class ToolsImMsgLogReadServiceImpl implements ToolsImMsgLogReadService {

    @Resource
    private ToolsImMsgLogReadMapper readMapper;

    @Override
    public List<ToolsImMsgLogVo> queryMsgLog(ToolsImMsgLogVo toolsImMsgLogVo) {
        return readMapper.getMsgLog(toolsImMsgLogVo);
    }



}
