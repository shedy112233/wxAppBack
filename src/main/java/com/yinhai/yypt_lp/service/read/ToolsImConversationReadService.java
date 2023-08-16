package com.yinhai.yypt_lp.service.read;

import com.yinhai.yypt_lp.vo.ToolsImConversationVo;

import java.util.List;

public interface ToolsImConversationReadService {
    /**
     * 查询单聊会话数据
     * @param record
     */
    List<ToolsImConversationVo> queryConversation(ToolsImConversationVo record);
}
