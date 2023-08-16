package com.yinhai.yypt_lp.service.read.impl;

import com.yinhai.ta404.core.transaction.annotation.TaTransactional;
import com.yinhai.yypt_lp.mapper.read.ToolsImConversationReadMapper;
import com.yinhai.yypt_lp.service.read.ToolsImConversationReadService;
import com.yinhai.yypt_lp.vo.ToolsImConversationVo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
@TaTransactional(readOnly = true)
public class ToolsImConversationReadServiceImpl implements ToolsImConversationReadService {

    @Resource
    private ToolsImConversationReadMapper conversationMapper;

    @Override
    public List<ToolsImConversationVo> queryConversation(ToolsImConversationVo record) {
        List<ToolsImConversationVo> toolsImConversationVos = conversationMapper.queryConversation(record);
        return toolsImConversationVos;
    }
}
