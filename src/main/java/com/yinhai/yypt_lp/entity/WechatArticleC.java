package com.yinhai.yypt_lp.entity;

import java.io.Serializable;
import java.util.Date;

/**
* 微信文章表(WechatArticle)实体类
*
* @author default
* @since 2023-07-19 13:46:38
*/
public class WechatArticleC extends WechatArticle implements Serializable {
    private static final long serialVersionUID = -47832371628435769L;
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
