package com.yinhai.yypt_lp.vo;

import lombok.Data;

import java.util.Date;

@Data
public class ToolsImConstantVo {
    /**
     * 表主键
     */
    private Integer tid;

    /**
     * 主键
     */
    private String tKey;

    /**
     * 值
     */
    private String tValue;

    /**
     * 创建时间
     */
    private Date createTime;
}
