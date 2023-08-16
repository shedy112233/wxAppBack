package com.yinhai.yypt_lp.vo;

import lombok.Data;

import java.util.List;

@Data
public class ParamVo {

    private List<String> toAccountList;

    private List<MsgBodyVo> msgBodyVoList;
}
