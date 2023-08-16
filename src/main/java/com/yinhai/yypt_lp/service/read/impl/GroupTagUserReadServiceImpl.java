package com.yinhai.yypt_lp.service.read.impl;

import com.yinhai.ta404.core.transaction.annotation.TaTransactional;
import com.yinhai.yypt_lp.mapper.read.ToolsImGroupTagUserReadMapper;
import com.yinhai.yypt_lp.service.read.GroupTagUserReadService;
import com.yinhai.yypt_lp.vo.ToolsImGroupTagUserVo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
@TaTransactional(readOnly = true)
public class GroupTagUserReadServiceImpl implements GroupTagUserReadService {

    @Resource
    private ToolsImGroupTagUserReadMapper groupTagUserReadMapper;

    @Override
    public List<ToolsImGroupTagUserVo> queryInfo(ToolsImGroupTagUserVo vo) {
        return groupTagUserReadMapper.queryInfo(vo);
    }
}
