package com.yinhai.yypt_lp.vo;

import lombok.Data;

@Data
public class ToolsImGroupTagUserVo {
    /**
     * 表主键
     */
    private String id;

    /**
     * 分组id
     */
    private String tagId;

    /**
     * 用户id
     */
    private String phone;

    /**
     * 创建时间
     */
    private String createTime;

    /**
     * 昵称
     */
    private String nickName;
}
