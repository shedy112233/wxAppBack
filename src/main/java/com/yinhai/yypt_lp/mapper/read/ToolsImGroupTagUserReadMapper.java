package com.yinhai.yypt_lp.mapper.read;

import com.yinhai.ta404.module.mybatis.mapper.Ta404SupportMapper;
import com.yinhai.yypt_lp.vo.ToolsImGroupTagUserVo;

import java.util.List;

/**
 * 标签下的用户信息表
 */
public interface ToolsImGroupTagUserReadMapper extends Ta404SupportMapper {
    /**
     * 查询分组和用户的关系
     * @param vo
     * @return
     */
    List<ToolsImGroupTagUserVo> queryInfo(ToolsImGroupTagUserVo vo);
}
