package com.yinhai.yypt_lp.service.read;

import com.yinhai.yypt_lp.vo.ToolsImFriendGroupTagVo;

import java.util.List;

public interface FriendGroupTagReadService {
    /**
     * 获取分组标签信息
     * @param vo
     * @return
     */
    List<ToolsImFriendGroupTagVo> getTags(ToolsImFriendGroupTagVo vo);

    /**
     * 查询单个用户的标签信息
     * @param phone
     * @param operator
     * @return
     */
    String queryPersonTagName(String phone,String operator);
}
