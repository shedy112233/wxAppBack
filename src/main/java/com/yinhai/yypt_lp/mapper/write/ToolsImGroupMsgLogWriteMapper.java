package com.yinhai.yypt_lp.mapper.write;

import com.yinhai.yypt_lp.vo.ToolsImGroupMsgLogVo;

public interface ToolsImGroupMsgLogWriteMapper {

    /**
     * 插入群聊数据
     * @param groupMsgLogVo
     * @return
     */
    int insertInfo(ToolsImGroupMsgLogVo groupMsgLogVo);
    /**
     * 更新群聊数据
     * @param groupMsgLogVo
     * @return
     */
    int updateInfo(ToolsImGroupMsgLogVo groupMsgLogVo);
}
