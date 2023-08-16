package com.yinhai.yypt_lp.mapper.write;

import com.yinhai.yypt_lp.vo.ToolsImInviteVo;

public interface ToolsImInviteWriteMapper {

    /**
     * 新增一条邀请码数据
     * @param record
     * @return
     */
    int insertInviteInfo(ToolsImInviteVo record);

    /**
     * 更新邀请码数据
     * @param record
     * @return
     */
    int updateInviteInfo(ToolsImInviteVo record);
}
