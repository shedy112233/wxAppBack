package com.yinhai.yypt_lp.mapper.read;

import com.yinhai.ta404.module.mybatis.mapper.Ta404SupportMapper;
import com.yinhai.yypt_lp.vo.ToolsImConversationVo;

import java.util.List;

/**
 * Im会话表
 */
public interface ToolsImConversationReadMapper extends Ta404SupportMapper {

    List<ToolsImConversationVo> queryConversation(ToolsImConversationVo record);
}
