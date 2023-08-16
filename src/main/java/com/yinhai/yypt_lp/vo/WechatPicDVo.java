package com.yinhai.yypt_lp.vo;

import lombok.Data;

import java.util.Date;

@Data
public class WechatPicDVo {

    private String id;

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
     * 排序时间
     */
    private Date sortTime;

    /**
     * 图片内容
     */
    private byte[] pic;
}
