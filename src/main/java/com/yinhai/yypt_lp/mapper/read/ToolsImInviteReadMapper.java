package com.yinhai.yypt_lp.mapper.read;

import com.yinhai.ta404.module.mybatis.mapper.Ta404SupportMapper;
import com.yinhai.yypt_lp.vo.ToolsImInviteVo;

import java.util.List;

/**
 * 邀请记录表
 */
public interface ToolsImInviteReadMapper extends Ta404SupportMapper {
    /**
     * 查询多条邀请码数据
     * @param record
     * @return
     */
    List<ToolsImInviteVo> queryInviteInfo(ToolsImInviteVo record);

    /**
     * 查询单条邀请码数据
     * @param phone
     * @return
     */
    ToolsImInviteVo queryInfoByCondition(String phone);

    /**
     * 通过邀请码查询数据
     * @param inviteCode
     * @return
     */
    ToolsImInviteVo queryInfoByInviteCode(String inviteCode);

}
