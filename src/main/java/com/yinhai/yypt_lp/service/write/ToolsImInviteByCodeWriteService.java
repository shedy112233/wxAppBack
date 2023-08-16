package com.yinhai.yypt_lp.service.write;

import com.yinhai.yypt_lp.vo.ToolsImInviteByCodeVo;

import java.text.ParseException;

public interface ToolsImInviteByCodeWriteService {

    /**
     * 新增被邀请用户信息
     * @param record
     */
    void insertInvitedInfo(ToolsImInviteByCodeVo record);

    /**
     * 更新被邀请用户信息
     * @param record
     */
    void updateInvitedInfo(ToolsImInviteByCodeVo record) throws ParseException;
}
