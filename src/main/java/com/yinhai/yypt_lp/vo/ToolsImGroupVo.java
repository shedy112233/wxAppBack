package com.yinhai.yypt_lp.vo;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ToolsImGroupVo {

    /**
     * 表主键
     */
    private String id;

    /**
     * 发起用户id
     */
    private String groupId;

    /**
     * 会话状态
     */
    private String groupStatus;

    /**
     * 创建时间
     */
    private LocalDateTime createTime;
    /**
     * 会话Id
     */
    private String conversationId;
}
