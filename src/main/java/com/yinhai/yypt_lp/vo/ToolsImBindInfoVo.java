package com.yinhai.yypt_lp.vo;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public class ToolsImBindInfoVo  implements Serializable {
    /**
     * 编号
     */
    private String id;

    /**
     * 邀请者Id
     */
    private String inviteId;

    /**
     * 接收邀请者id
     */
    private String acceptId;

    /**
     * 绑定时间
     */
    private LocalDateTime bindTime;

    /**
     * 绑定状态 0 有效 1 无效
     */
    private String bindStatus;

    private static final long serialVersionUID = 1L;
}
