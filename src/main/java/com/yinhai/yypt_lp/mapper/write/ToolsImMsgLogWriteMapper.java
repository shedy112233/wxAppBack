package com.yinhai.yypt_lp.mapper.write;

import com.yinhai.yypt_lp.vo.ToolsImMsgLogVo;

public interface ToolsImMsgLogWriteMapper {

    int deleteByPrimaryKey(String id);

    int insertMsgLog(ToolsImMsgLogVo record);

    int updateMsgLog(ToolsImMsgLogVo record);
}
