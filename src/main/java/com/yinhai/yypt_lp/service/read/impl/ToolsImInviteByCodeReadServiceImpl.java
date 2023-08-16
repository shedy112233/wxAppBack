package com.yinhai.yypt_lp.service.read.impl;

import com.yinhai.ta404.core.transaction.annotation.TaTransactional;
import com.yinhai.yypt_lp.mapper.read.ToolsImInviteByCodeReadMapper;
import com.yinhai.yypt_lp.service.read.ToolsImInviteByCodeReadService;
import com.yinhai.yypt_lp.vo.ToolsImInviteByCodeVo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
@TaTransactional(readOnly = true)
public class ToolsImInviteByCodeReadServiceImpl implements ToolsImInviteByCodeReadService {

    @Resource
    private ToolsImInviteByCodeReadMapper inviteByCodeReadMapper;

    @Override
    public List<ToolsImInviteByCodeVo> queryInvitedInfo(ToolsImInviteByCodeVo record) {
        return inviteByCodeReadMapper.queryInvitedInfo(record);
    }
}
