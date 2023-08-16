package com.yinhai.yypt_lp.service.write.impl;

import com.yinhai.ta404.core.exception.AppException;
import com.yinhai.ta404.core.transaction.annotation.TaTransactional;
import com.yinhai.yypt_lp.mapper.write.ToolsImMsgLogWriteMapper;
import com.yinhai.yypt_lp.service.write.ToolsImMsgLogWriteService;
import com.yinhai.yypt_lp.vo.ToolsImMsgLogVo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
@TaTransactional
public class ToolsImMsgLogWriteServiceImpl implements ToolsImMsgLogWriteService {
    @Resource
    private ToolsImMsgLogWriteMapper writeMapper;

    @Override
    public void insertMsgLog(ToolsImMsgLogVo toolsImMsgLogVo) {
        int i = writeMapper.insertMsgLog(toolsImMsgLogVo);
        if(i > 1){
            throw new AppException("插入了多条消息");
        }
    }

    @Override
    public void updateMsgLog(ToolsImMsgLogVo toolsImMsgLogVo) {
        int i = writeMapper.updateMsgLog(toolsImMsgLogVo);
        if(i > 1){
            throw new AppException("插入更新了多条消息");
        }
    }
}
