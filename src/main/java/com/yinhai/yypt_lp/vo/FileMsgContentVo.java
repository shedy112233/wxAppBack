package com.yinhai.yypt_lp.vo;

import com.alibaba.fastjson.annotation.JSONField;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.io.Serializable;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class FileMsgContentVo implements Serializable {
    private static final long serialVersionUID = 1L;

    @JsonProperty(value="Download_Flag")
    @JSONField(name = "Download_Flag")
    private Integer Download_Flag;

    @JsonProperty(value="FileName")
    @JSONField(name = "FileName")
    private String FileName;

    @JsonProperty(value="Url")
    @JSONField(name = "Url")
    private String Url;

    @JsonProperty(value="UUID")
    @JSONField(name = "UUID")
    private String UUID;

    @JsonProperty(value="FileSize")
    @JSONField(name = "FileSize")
    private Long FileSize;
}
