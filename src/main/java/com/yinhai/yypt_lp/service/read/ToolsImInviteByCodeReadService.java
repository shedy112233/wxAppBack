package com.yinhai.yypt_lp.service.read;

import com.yinhai.yypt_lp.vo.ToolsImInviteByCodeVo;

import java.util.List;

public interface ToolsImInviteByCodeReadService {

    /**
     * 查询被邀请人信息
     * @return
     */
    List<ToolsImInviteByCodeVo> queryInvitedInfo(ToolsImInviteByCodeVo record);
}
