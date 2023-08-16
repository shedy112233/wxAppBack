package com.yinhai.yypt_lp.mapper.write;

import com.yinhai.yypt_lp.vo.ToolsImUserBzVo;

public interface ToolsImUserBzWriteMapper {
    /**
     * 新增备注数据
     * @param record
     * @return
     */
    int insertInfo(ToolsImUserBzVo record);

    /**
     * 更新备注数据
     * @param record
     * @return
     */
    int updateInfo(ToolsImUserBzVo record);
}
