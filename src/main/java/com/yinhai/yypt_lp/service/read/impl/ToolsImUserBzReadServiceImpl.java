package com.yinhai.yypt_lp.service.read.impl;

import com.yinhai.ta404.core.exception.AppException;
import com.yinhai.ta404.core.transaction.annotation.TaTransactional;
import com.yinhai.yypt_lp.mapper.read.ToolsImUserBzReadMapper;
import com.yinhai.yypt_lp.service.read.ToolsImUserBzReadService;
import com.yinhai.yypt_lp.vo.ToolsImUserBzVo;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import javax.annotation.Resource;

@Service
@TaTransactional(readOnly = true)
public class ToolsImUserBzReadServiceImpl implements ToolsImUserBzReadService {

    @Resource
    private ToolsImUserBzReadMapper toolsImUserBzReadMapper;

    @Override
    public ToolsImUserBzVo getBzByOperator(ToolsImUserBzVo record) {
        if(ObjectUtils.isEmpty(record.getPhone())){
            throw new AppException("用户id不能为空！");
        }
        if(ObjectUtils.isEmpty(record.getOperator())){
                throw new AppException("操作人id不能为空！");
        }
        return toolsImUserBzReadMapper.getBzByOperator(record);
    }
}
