package com.yinhai.yypt_lp.dto;

import lombok.Data;

@Data
public class ResponseDto<T> {
    /**
     * 状态码
     */
    private Integer code;

    /**
     * 状态信息
     */
    private String message;


    /**
     * 数据
     */
    private T data;

    public ResponseDto(Integer code, String message, T data) {
        this.code = code;
        this.data = data;
        this.message = message;
    }

    public ResponseDto(T data) {
        this.code = 10000;
        this.data = data;
        this.message = "成功并返回数据";
    }
}
