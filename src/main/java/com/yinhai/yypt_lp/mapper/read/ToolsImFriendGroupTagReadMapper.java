package com.yinhai.yypt_lp.mapper.read;

import com.yinhai.ta404.module.mybatis.mapper.Ta404SupportMapper;
import com.yinhai.yypt_lp.vo.ToolsImFriendGroupTagVo;

import java.util.List;

/**
 * 好友分组标签表
 */
public interface ToolsImFriendGroupTagReadMapper extends Ta404SupportMapper {
    /**
     * 获取分组标签信息
     * @param vo
     * @return
     */
    List<ToolsImFriendGroupTagVo> getTags(ToolsImFriendGroupTagVo vo);

    /**
     * 通过id查询数据
     * @param vo
     * @return
     */
    ToolsImFriendGroupTagVo getTagByTagId(ToolsImFriendGroupTagVo vo);

}
