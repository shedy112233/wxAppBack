package com.yinhai.yypt_lp.mapper.read;

import com.yinhai.ta404.module.mybatis.mapper.Ta404SupportMapper;
import com.yinhai.yypt_lp.vo.ToolsImUserBzVo;

import java.util.List;

public interface ToolsImUserBzReadMapper extends Ta404SupportMapper {
    /**
     * 查询所有备注信息
     * @param record
     * @return
     */
    List<ToolsImUserBzVo> getBzInfo(ToolsImUserBzVo record);

    /**
     * 根据条件查询备注数据
     * @param record
     * @return
     */
    ToolsImUserBzVo getBzByOperator(ToolsImUserBzVo record);
}
