package com.yinhai.yypt_lp.mapper.read;

import com.yinhai.ta404.module.mybatis.mapper.Ta404SupportMapper;
import com.yinhai.yypt_lp.vo.ToolsImBindInfoVo;

import java.util.List;

/**
 * 绑定信息表
 */
public interface ToolsImBindInfoReadMapper  extends Ta404SupportMapper {
    /**
     * 查询绑定数据
     * @param record
     * @return
     */
    List<ToolsImBindInfoVo> selectInfoByVo(ToolsImBindInfoVo record);
}
