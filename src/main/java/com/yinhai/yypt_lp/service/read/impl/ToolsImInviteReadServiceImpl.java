package com.yinhai.yypt_lp.service.read.impl;

import com.yinhai.ta404.core.transaction.annotation.TaTransactional;
import com.yinhai.yypt_lp.mapper.read.ToolsImInviteReadMapper;
import com.yinhai.yypt_lp.service.read.ToolsImInviteReadService;
import com.yinhai.yypt_lp.vo.ToolsImInviteVo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
@TaTransactional(readOnly = true)
public class ToolsImInviteReadServiceImpl implements ToolsImInviteReadService {

    @Resource
    private ToolsImInviteReadMapper readMapper;

    @Override
    public List<ToolsImInviteVo> queryInviteInfo(ToolsImInviteVo record) {
        return readMapper.queryInviteInfo(record);
    }

    @Override
    public ToolsImInviteVo queryInfoByCondition(String userId) {
        return readMapper.queryInfoByCondition(userId);
    }

    @Override
    public ToolsImInviteVo queryInfoByInviteCode(String inviteCode) {
        return readMapper.queryInfoByInviteCode(inviteCode);
    }

}
