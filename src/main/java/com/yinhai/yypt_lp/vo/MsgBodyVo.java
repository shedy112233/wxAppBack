package com.yinhai.yypt_lp.vo;

import com.alibaba.fastjson.annotation.JSONField;
import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonAutoDetect(getterVisibility = JsonAutoDetect.Visibility.NONE)
public class MsgBodyVo<T> implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 消息类型
     */
    @JsonProperty(value="MsgType")
    @JSONField(name = "MsgType")
    private String MsgType;

    /**
     * 消息内容
     */
    @JsonProperty(value="MsgContent")
    @JSONField(name = "MsgContent")
    private T MsgContent;
}
