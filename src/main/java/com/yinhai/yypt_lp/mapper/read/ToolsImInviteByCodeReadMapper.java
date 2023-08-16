package com.yinhai.yypt_lp.mapper.read;

import com.yinhai.ta404.module.mybatis.mapper.Ta404SupportMapper;
import com.yinhai.yypt_lp.vo.ToolsImInviteByCodeVo;

import java.util.List;

public interface ToolsImInviteByCodeReadMapper extends Ta404SupportMapper {
    /**
     * 查询被邀请人信息
     * @return
     */
    List<ToolsImInviteByCodeVo> queryInvitedInfo(ToolsImInviteByCodeVo record);



}
