package com.yinhai.yypt_lp.mapper.read;

import com.yinhai.ta404.module.mybatis.mapper.Ta404SupportMapper;
import com.yinhai.yypt_lp.vo.ToolsImGroupVo;

import java.util.List;

/**
 * 聊天群信息表
 */
public interface ToolsImGroupReadMapper extends Ta404SupportMapper {

    List<ToolsImGroupVo> queryGroup(ToolsImGroupVo toolsImGroupVo);
}
