package com.yinhai.yypt_lp.service.read;

import com.yinhai.yypt_lp.vo.ToolsImUserBzVo;

public interface ToolsImUserBzReadService {

    /**
     * 根据条件查询备注数据
     * @param record
     * @return
     */
    ToolsImUserBzVo getBzByOperator(ToolsImUserBzVo record);
}
