package com.yinhai.yypt_lp.mapper.read;

import com.yinhai.ta404.module.mybatis.mapper.Ta404SupportMapper;
import com.yinhai.yypt_lp.vo.ToolsImMsgLogVo;

import java.util.List;

public interface ToolsImMsgLogReadMapper extends Ta404SupportMapper {

    List<ToolsImMsgLogVo> getMsgLog(ToolsImMsgLogVo record);
}
