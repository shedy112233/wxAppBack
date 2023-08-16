package com.yinhai.yypt_lp.vo;

import com.alibaba.fastjson.annotation.JSONField;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class ImgMsgContentVo implements Serializable {
    private static final long serialVersionUID = 1L;

    @JsonProperty(value="ImageInfoArray")
    @JSONField(name = "ImageInfoArray")
    private Object ImageInfoArray;

    @JsonProperty(value="UUID")
    @JSONField(name = "UUID")
    private String UUID;

    @JsonProperty(value="ImageFormat")
    @JSONField(name = "ImageFormat")
    private Integer ImageFormat;
}
