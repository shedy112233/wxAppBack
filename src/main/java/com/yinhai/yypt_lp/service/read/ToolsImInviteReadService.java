package com.yinhai.yypt_lp.service.read;

import com.yinhai.yypt_lp.vo.ToolsImInviteVo;

import java.util.List;

public interface ToolsImInviteReadService {
    /**
     * 查询多条邀请数据
     * @param record
     * @return
     */
    List<ToolsImInviteVo> queryInviteInfo(ToolsImInviteVo record);

    /**
     * 查询单挑邀请数据
     * @param userId
     * @return
     */
    ToolsImInviteVo queryInfoByCondition(String userId);

    /**
     * 通过邀请码查询数据
     * @param inviteCode
     * @return
     */
    ToolsImInviteVo queryInfoByInviteCode(String inviteCode);
}
