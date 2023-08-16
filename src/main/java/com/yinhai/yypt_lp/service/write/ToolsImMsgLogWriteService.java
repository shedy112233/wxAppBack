package com.yinhai.yypt_lp.service.write;

import com.yinhai.yypt_lp.vo.ToolsImMsgLogVo;

public interface ToolsImMsgLogWriteService {

    /**
     * 向消息记录表中插入消息
     * @param toolsImMsgLogVo
     * @return
     */
    void insertMsgLog(ToolsImMsgLogVo toolsImMsgLogVo);

    /**
     * 更新消息记录表内容
     * @param toolsImMsgLogVo
     */
    void updateMsgLog(ToolsImMsgLogVo toolsImMsgLogVo);
}
