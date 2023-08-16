package com.yinhai.yypt_lp.vo;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ToolsImMsgLogVo {

    /**
     * 表主键
     */
    private String id;

    /**
     * 手机号(用户id)
     */
    private String phone;

    /**
     * 消息类型
     */
    private String msgType;

    /**
     * 存储图片或者聊天记录文件地址
     */
    private String path;

    /**
     * 消息key 当消息内容为图片类型时，必填
     */
    private String msgKey;

    /**
     * 记录时间
     */
    private LocalDateTime craeteTime;

    /**
     * 对象存储key
     */
    private String cosKey;
    /**
     * 发送对象
     */
    private String toPhone;
}
