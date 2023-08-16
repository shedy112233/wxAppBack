package com.yinhai.yypt_lp.vo;

import lombok.Data;

/**
 * tools_im_user_bz
 * @author
 */
@Data
public class ToolsImUserBzVo {
    /**
     * 表主键
     */
    private String id;

    /**
     * 备注用户id
     */
    private String phone;

    /**
     * 描述
     */
    private String desc;

    /**
     * 备注
     */
    private String bz;

    /**
     * 备注操作人
     */
    private String operator;

    /**
     * 备注时间
     */
    private String createTime;
    /**
     * 标签串
     */
    private String tags;
    /**
     * 标签串
     */
    private String nickName;
}
