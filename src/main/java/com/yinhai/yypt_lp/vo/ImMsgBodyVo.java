package com.yinhai.yypt_lp.vo;

import com.alibaba.fastjson.annotation.JSONField;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class ImMsgBodyVo<T> implements Serializable {
    private static final long serialVersionUID = 1L;

    /**
     * 消息的发送者
     */
    @JsonProperty(value="From_Account")
    @JSONField(name = "From_Account")
    private String From_Account;

    /**
     * MsgBody 为空，该字段为1，撤回的消息，该字段为2
     */
    @JsonProperty(value="IsPlaceMsg")
    @JSONField(name = "IsPlaceMsg")
    private Integer IsPlaceMsg;

    /**
     * 消息内容
     */
    @JsonProperty(value="MsgBody")
    @JSONField(name = "MsgBody")
    private T MsgBody;

    /**
     * 消息的优先级
     */
    @JsonProperty(value="MsgPriority")
    @JSONField(name = "MsgPriority")
    private Integer MsgPriority;

    /**
     * 消息随机值，用于对消息去重
     */
    @JsonProperty(value="MsgRandom")
    @JSONField(name = "MsgRandom")
    private Long MsgRandom;

    /**
     * 消息 seq，用于标识唯一消息，值越小发送的越早
     */
    @JsonProperty(value="MsgSeq")
    @JSONField(name = "MsgSeq")
    private Integer MsgSeq;

    /**
     * 消息被发送的时间戳，server 的时间
     */
    @JsonProperty(value="MsgTimeStamp")
    @JSONField(name = "MsgTimeStamp")
    private Long MsgTimeStamp;
}
