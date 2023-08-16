package com.yinhai.yypt_lp.mapper.write;

import com.yinhai.yypt_lp.vo.ToolsImGroupTagUserVo;

public interface ToolsImGroupTagUserWriteMapper {
    /**
     * 新增标签和用户的关系
     * @param vo
     * @return
     */
    int insertInfo(ToolsImGroupTagUserVo vo);

    /**
     * 删除标签和用户的关系
     * @param vo
     * @return
     */
    int delInfo(ToolsImGroupTagUserVo vo);
}
