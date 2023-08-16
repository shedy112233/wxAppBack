package com.yinhai.yypt_lp.service.read;

import com.yinhai.yypt_lp.vo.ToolsImGroupVo;

import java.util.List;

public interface ToolsImGroupReadService {
    /**
     * 查询群组数据
     * @param toolsImGroupVo
     */
    List<ToolsImGroupVo> queryGroup(ToolsImGroupVo toolsImGroupVo);
}
