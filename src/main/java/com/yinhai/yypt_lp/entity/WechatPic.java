package com.yinhai.yypt_lp.entity;

import java.util.Date;
import java.io.Serializable;

/**
* 微信图片表(WechatPic)实体类
*
* @author default
* @since 2023-07-19 13:57:30
*/
public class WechatPic implements Serializable {
    private static final long serialVersionUID = 107160493880709467L;

    private String id;
    //图片内容
    private String pic;
    //开始时间
    private Date startTime;
    //结束时间
    private Date endTime;
    //展示序号
    private Integer sort;
    //创建日期
    private Date aae036;
    //创建人
    private String aae011;
    //备注
    private String remarks;
    private Date sortTime;



    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public Integer getSort() {
        return sort;
    }

    public void setSort(Integer sort) {
        this.sort = sort;
    }

    public Date getAae036() {
        return aae036;
    }

    public void setAae036(Date aae036) {
        this.aae036 = aae036;
    }

    public String getAae011() {
        return aae011;
    }

    public void setAae011(String aae011) {
        this.aae011 = aae011;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public Date getSortTime() {
        return sortTime;
    }

    public void setSortTime(Date sortTime) {
        this.sortTime = sortTime;
    }
}
