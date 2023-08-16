package com.yinhai.yypt_lp.vo;

import com.alibaba.fastjson.annotation.JSONField;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class ImResultVo implements Serializable {
    private static final long serialVersionUID = 1L;

    /**
     * 请求处理的结果，OK 表示处理成功，FAIL 表示失败
     */
    @JsonProperty(value="ActionStatus")
    @JSONField(name = "ActionStatus")
    private String ActionStatus;

    /**
     * 错误码，0表示成功，非0表示失败
     */
    @JsonProperty(value="ErrorCode")
    @JSONField(name = "ErrorCode")
    private Integer ErrorCode;

    /**
     * 错误信息
     */
    @JsonProperty(value="ErrorInfo")
    @JSONField(name = "ErrorInfo")
    private String ErrorInfo;

    /**
     * 请求中的群组 ID
     */
    @JsonProperty(value="GroupId")
    @JSONField(name = "GroupId")
    private String GroupId;

    /**
     * 是否完成获取所有消息：0未完成 1已完成
     */
    @JsonProperty(value="IsFinished")
    @JSONField(name = "IsFinished")
    private Integer IsFinished;

    /**
     * 返回的消息列表
     */
    @JsonProperty(value="RspMsgList")
    @JSONField(name = "RspMsgList")
    private List<ImMsgBodyVo> RspMsgList;

}
