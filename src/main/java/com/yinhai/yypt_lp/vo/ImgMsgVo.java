package com.yinhai.yypt_lp.vo;

import com.alibaba.fastjson.annotation.JSONField;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class ImgMsgVo implements Serializable {
    private static final long serialVersionUID = 1L;

    @JsonProperty(value="Type")
    @JSONField(name = "Type")
    private Integer Type;

    @JsonProperty(value="Size")
    @JSONField(name = "Size")
    private Integer Size;

    @JsonProperty(value="Height")
    @JSONField(name = "Height")
    private Integer Height;

    @JsonProperty(value="Width")
    @JSONField(name = "Width")
    private Integer Width;

    @JsonProperty(value="URL")
    @JSONField(name = "URL")
    private String URL;
}
