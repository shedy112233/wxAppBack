package com.yinhai.yypt_lp.service.read;

import com.yinhai.yypt_lp.vo.ToolsImMsgLogVo;

import java.util.List;

public interface ToolsImMsgLogReadService {

    /**
     * 查询消息记录表数据
     * @param toolsImMsgLogVo
     * @return
     */
    List<ToolsImMsgLogVo> queryMsgLog(ToolsImMsgLogVo toolsImMsgLogVo);
}
