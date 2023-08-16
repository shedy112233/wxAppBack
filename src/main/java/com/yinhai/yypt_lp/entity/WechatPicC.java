package com.yinhai.yypt_lp.entity;

import java.io.Serializable;
import java.util.Date;

/**
* 微信图片表(WechatPic)实体类
*
* @author default
* @since 2023-07-19 13:57:30
*/
public class WechatPicC extends WechatPic implements Serializable {
    // 主键
    String cId;
    // 事件类型1新增3删除
    String evtType;

    public String getcId() {
        return cId;
    }

    public void setcId(String cId) {
        this.cId = cId;
    }

    public String getEvtType() {
        return evtType;
    }

    public void setEvtType(String evtType) {
        this.evtType = evtType;
    }
}
