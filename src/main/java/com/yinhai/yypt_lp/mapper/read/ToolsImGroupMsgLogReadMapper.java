package com.yinhai.yypt_lp.mapper.read;

import com.yinhai.ta404.module.mybatis.mapper.Ta404SupportMapper;
import com.yinhai.yypt_lp.vo.ToolsImGroupMsgLogVo;

import java.util.List;

/**
 * 群组聊天信息表
 */
public interface ToolsImGroupMsgLogReadMapper extends Ta404SupportMapper {

    /**
     * 查询群聊数据
     * @param groupMsgLogVo
     * @return
     */
    List<ToolsImGroupMsgLogVo> queryInfo(ToolsImGroupMsgLogVo groupMsgLogVo);
}
