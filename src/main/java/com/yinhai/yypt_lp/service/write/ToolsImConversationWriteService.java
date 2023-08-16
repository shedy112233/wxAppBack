package com.yinhai.yypt_lp.service.write;

import com.yinhai.yypt_lp.vo.ToolsImConversationVo;

public interface ToolsImConversationWriteService {
    /**
     * 记录新建单聊会话数据
     * @param record
     */
    void insertConversation(ToolsImConversationVo record);
    /**
     * 更新单聊会话数据
     * @param record
     */
    void updateConversation(ToolsImConversationVo record);
    /**
     * 更新单聊会话状态为失效
     * @param record
     */
    void delConversation(ToolsImConversationVo record);
}
