package com.yinhai.yypt_lp.mapper.read;

import com.yinhai.ta404.module.mybatis.mapper.Ta404SupportMapper;
import com.yinhai.yypt_lp.vo.ToolsImConstantVo;

import java.util.List;

/**
 * 常量信息表
 */
public interface ToolsImConstantReadMapper  extends Ta404SupportMapper {
    /**
     * 查询所有的常量
     * @return
     */
    List<ToolsImConstantVo> getAllConstant();
}
