package com.yinhai.yypt_lp.vo;

import lombok.Data;

@Data
public class ToolsImInviteByCodeVo {
    /**
     * 表主键
     */
    private String id;

    /**
     * 邀请人手机号
     */
    private String invitePhone;

    /**
     * 被邀请人昵称
     */
    private String invitedNickName;

    /**
     * 被邀请人头像
     */
    private String invitedAvatar;

    /**
     * 被邀请人手机号
     */
    private String invitedPhone;

    /**
     * 申请原因
     */
    private String applyReason;

    /**
     * 创建时间
     */
    private String createTime;
    /**
     * 好友状态
     */
    private String friendStatus;

    private String yesOrNo;
}
