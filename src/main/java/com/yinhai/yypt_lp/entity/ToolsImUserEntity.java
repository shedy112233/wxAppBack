package com.yinhai.yypt_lp.entity;

import lombok.Data;

/**
 * tools_im_user
 * @author
 */
@Data
public class ToolsImUserEntity {
    /**
     * 手机号
     */
    private String phone;

    /**
     * openid
     */
    private String openId;

    /**
     * 用户名头像地址
     */
    private String userImage;

    /**
     * 昵称
     */
    private String nickName;

    /**
     * 用户状态
     */
    private String userStatus;

    /**
     * 用户角色
     */
    private String userRole;
    /**
     * 邀请码
     */
    private String inviteCode;
    /**
     * 备注
     */
    private String bz;
}
