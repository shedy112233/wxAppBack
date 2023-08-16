package com.yinhai.yypt_lp.vo;

import com.alibaba.fastjson.annotation.JSONField;
import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonAutoDetect(getterVisibility = JsonAutoDetect.Visibility.NONE)
public class PerMsgBodyVo  implements Serializable {
    private static final long serialVersionUID = 1L;
    /**
     * 发送人
     */
    @JsonProperty(value="From_Account")
    @JSONField(name = "From_Account")
    private String From_Account;
    /**
     * 接收人
     */
    @JsonProperty(value="To_Account")
    @JSONField(name = "To_Account")
    private String To_Account;
    /**
     * MsgBody 为空，该字段为1，撤回的消息，该字段为2
     */
    @JsonProperty(value="IsPlaceMsg")
    @JSONField(name = "IsPlaceMsg")
    private Integer IsPlaceMsg;
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
     * 消息发送时间
     */
    @JsonProperty(value="MsgTimeStamp")
    @JSONField(name = "MsgTimeStamp")
    private long MsgTimeStamp;
    /**
     * 消息键
     */
    @JsonProperty(value="MsgKey")
    @JSONField(name = "MsgKey")
    private String MsgKey;
    /**
     * 消息序列
     */
    @JsonProperty(value="MsgSeq")
    @JSONField(name = "MsgSeq")
    private String MsgSeq;
    /**
     * 消息体（包括类型和内容）
     */
    @JsonProperty(value="MsgBody")
    @JSONField(name = "MsgBody")
    private List<MsgBodyVo> MsgBody;
}
