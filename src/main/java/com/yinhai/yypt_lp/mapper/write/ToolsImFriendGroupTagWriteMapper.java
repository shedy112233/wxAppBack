package com.yinhai.yypt_lp.mapper.write;

import com.yinhai.yypt_lp.vo.ToolsImFriendGroupTagVo;

public interface ToolsImFriendGroupTagWriteMapper {
    /**
     * 新增分组标签信息
     * @param vo
     * @return
     */
    int insertGroupTag(ToolsImFriendGroupTagVo vo);

    /**
     * 更新分组标签信息
     * @param vo
     * @return
     */
    int updateGroupTag(ToolsImFriendGroupTagVo vo);

    /**
     * 删除分组标签
     * @param vo
     * @return
     */
    int delGroupTag(ToolsImFriendGroupTagVo vo);
}
