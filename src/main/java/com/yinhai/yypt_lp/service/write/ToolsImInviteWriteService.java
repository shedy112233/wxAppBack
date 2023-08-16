package com.yinhai.yypt_lp.service.write;

import com.yinhai.yypt_lp.vo.ToolsImInviteVo;

public interface ToolsImInviteWriteService {
    /**
     * 新增邀请数据
     * @param record
     * @throws Exception
     */
    void insertInviteInfo(ToolsImInviteVo record) throws Exception;

    /**
     * 更新邀请数据
     * @param record
     * @throws Exception
     */
    void updateInviteInfo(ToolsImInviteVo record) throws Exception;
}
