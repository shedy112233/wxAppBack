package com.yinhai.yypt_lp.service.write.impl;

import com.yinhai.ta404.core.transaction.annotation.TaTransactional;
import com.yinhai.yypt_lp.mapper.write.ToolsImBindInfoWriteMapper;
import com.yinhai.yypt_lp.service.write.ToolsImBindInfoWriteService;
import com.yinhai.yypt_lp.vo.ToolsImBindInfoVo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
@TaTransactional
public class ToolsImBindInfoWriteServiceImpl implements ToolsImBindInfoWriteService {

    @Resource
    private ToolsImBindInfoWriteMapper toolsImBindInfoWriteMapper;


    @Override
    public void insert(ToolsImBindInfoVo record) {
        toolsImBindInfoWriteMapper.insert(record);
    }
}
