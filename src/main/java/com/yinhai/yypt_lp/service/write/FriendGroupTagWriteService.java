package com.yinhai.yypt_lp.service.write;

import com.yinhai.yypt_lp.vo.ToolsImFriendGroupTagVo;

public interface FriendGroupTagWriteService {
    /**
     * 新增分组标签信息
     * @param vo
     * @return
     */
    void insertGroupTag(ToolsImFriendGroupTagVo vo) throws Exception;

    /**
     * 更新分组标签信息
     * @param vo
     * @return
     */
    void updateGroupTag(ToolsImFriendGroupTagVo vo) throws Exception;

    /**
     * 删除分组标签
     * @param vo
     * @return
     */
    void delGroupTag(ToolsImFriendGroupTagVo vo);
}
