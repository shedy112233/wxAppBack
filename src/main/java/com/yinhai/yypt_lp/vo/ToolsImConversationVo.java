package com.yinhai.yypt_lp.vo;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class ToolsImConversationVo {

    /**
     * 表主键
     */
    private String id;

    /**
     * 发起用户id
     */
    private String fromId;

    /**
     * 接收用户id
     */
    private String toId;

    /**
     * 会话状态
     */
    private String conversationStatus;

    /**
     * 会话id
     */
    private String conversationId;

    /**
     * 创建时间
     */
    private LocalDateTime createTime;
}
