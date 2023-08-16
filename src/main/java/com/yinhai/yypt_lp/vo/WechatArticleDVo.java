package com.yinhai.yypt_lp.vo;

import lombok.Data;

import java.util.Date;

@Data
public class WechatArticleDVo {

    private String id;

    /**
     * 文章标题
     */
    private String title;

    /**
     * 开始时间
     */
    private Date startTime;

    /**
     * 结束时间
     */
    private Date endTime;

    /**
     * 展示序号
     */
    private Integer sort;

    /**
     * 创建日期
     */
    private Date aae036;

    /**
     * 创建人
     */
    private String aae011;

    /**
     * 备注
     */
    private String remarks;

    /**
     * 文件名称
     */
    private String fileName;

    /**
     * 文件类型
     */
    private String fileType;

    /**
     * 简介
     */
    private String introduction;

    /**
     * 排序时间
     */
    private Date sortTime;

    /**
     * 文章内容
     */
    private byte[] content;
}
