package com.yinhai.yypt_lp.mapper.write;

import com.yinhai.yypt_lp.vo.ToolsImConstantVo;

public interface ToolsImConstantWriteMapper {
    /**
     * 添加常量数据
     * @param record
     * @return
     */
    int insert(ToolsImConstantVo record);
    /**
     * 更新常量数据
     * @param record
     * @return
     */
    int updateByPrimaryKeySelective(ToolsImConstantVo record);
}
