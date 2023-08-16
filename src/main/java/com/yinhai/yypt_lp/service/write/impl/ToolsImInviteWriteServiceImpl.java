package com.yinhai.yypt_lp.service.write.impl;

import com.yinhai.ta404.core.exception.AppException;
import com.yinhai.ta404.core.transaction.annotation.TaTransactional;
import com.yinhai.yypt_lp.mapper.write.ToolsImInviteWriteMapper;
import com.yinhai.yypt_lp.service.write.ToolsImInviteWriteService;
import com.yinhai.yypt_lp.vo.ToolsImInviteVo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
@TaTransactional
public class ToolsImInviteWriteServiceImpl implements ToolsImInviteWriteService {

    @Resource
    private ToolsImInviteWriteMapper writeMapper;

    @Override
    public void insertInviteInfo(ToolsImInviteVo record) {
        int i = writeMapper.insertInviteInfo(record);
        if(i > 1) {
            throw new AppException("新增了多条数据");
        }
    }

    @Override
    public void updateInviteInfo(ToolsImInviteVo record) {
        int i = writeMapper.updateInviteInfo(record);
        if(i > 1) {
            throw new AppException("更新了多条数据");
        }
    }
}
