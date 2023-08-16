package com.yinhai.yypt_lp.mapper.write;

import com.yinhai.yypt_lp.vo.ToolsImInviteByCodeVo;

public interface ToolsImInviteByCodeWriteMapper {
    /**
     * 新增被邀请用户信息
     * @param record
     * @return
     */
    int insertInvitedInfo(ToolsImInviteByCodeVo record);

    /**
     * 更新被邀请用户信息
     * @param record
     * @return
     */
    int updateInvitedInfo(ToolsImInviteByCodeVo record);
}
