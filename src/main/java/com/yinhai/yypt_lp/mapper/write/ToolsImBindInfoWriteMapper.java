package com.yinhai.yypt_lp.mapper.write;

import com.yinhai.yypt_lp.vo.ToolsImBindInfoVo;

public interface ToolsImBindInfoWriteMapper {
    /**
     * 向绑定关系表中插入相关数据
     * @param record
     * @return
     */
    int insert(ToolsImBindInfoVo record);
}
