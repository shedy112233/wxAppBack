package com.yinhai.yypt_lp.service.read;

import com.yinhai.yypt_lp.vo.ToolsImGroupTagUserVo;

import java.util.List;

public interface GroupTagUserReadService {

    /**
     * 查询分组和用户的关系
     * @param vo
     * @return
     */
    List<ToolsImGroupTagUserVo> queryInfo(ToolsImGroupTagUserVo vo);
}
