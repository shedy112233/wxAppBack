package com.yinhai.yypt_lp.vo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class PersonMsgVo {
    /**
     * 获取数据状态
     */
    private String ActionStatus;
    /**
     * 是否拉取完数据
     */
    private Integer Complete;
    /**
     * 最后消息的时间戳
     */
    private long LastMsgTime;
    /**
     * 最后一条消息的键
     */
    private String LastMsgKey;
    /**
     * 消息对象列表
     */
    private List<PerMsgBodyVo> MsgList;
    /**
     * 会话id
     */
    private String ConversationValue;
}
