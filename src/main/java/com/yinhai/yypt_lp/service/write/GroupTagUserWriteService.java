package com.yinhai.yypt_lp.service.write;

import com.yinhai.yypt_lp.vo.ToolsImGroupTagUserVo;

public interface GroupTagUserWriteService{
    /**
     * 新增标签和用户的关系
     * @param vo
     * @return
     */
    void insertInfo(ToolsImGroupTagUserVo vo) throws Exception;

    /**
     * 删除标签和用户的关系
     * @param vo
     * @return
     */
    void delInfo(ToolsImGroupTagUserVo vo);

}
