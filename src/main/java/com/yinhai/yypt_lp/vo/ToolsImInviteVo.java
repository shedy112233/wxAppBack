package com.yinhai.yypt_lp.vo;

import lombok.Data;

@Data
public class ToolsImInviteVo {
    /**
     * 表主键
     */
    private String id;

    /**
     * 获取邀请码的人
     */
    private String phone;

    /**
     * 获取的邀请码
     */
    private String inviteCode;

    /**
     * 获取邀请码时间
     */
    private String createTime;

    /**
     * 邀请人
     */
    private String acceptPerson;

    /**
     * 邀请时间
     */
    private String acceptTime;
}
