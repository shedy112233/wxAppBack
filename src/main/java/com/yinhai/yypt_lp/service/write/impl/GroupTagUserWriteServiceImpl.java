package com.yinhai.yypt_lp.service.write.impl;

import com.yinhai.ta404.core.transaction.annotation.TaTransactional;
import com.yinhai.yypt_lp.mapper.write.ToolsImGroupTagUserWriteMapper;
import com.yinhai.yypt_lp.service.write.GroupTagUserWriteService;
import com.yinhai.yypt_lp.vo.ToolsImGroupTagUserVo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
@TaTransactional
public class GroupTagUserWriteServiceImpl implements GroupTagUserWriteService {

    @Resource
    private ToolsImGroupTagUserWriteMapper groupTagUserReadMapper;

    @Override
    public void insertInfo(ToolsImGroupTagUserVo vo) throws Exception {
        int i = groupTagUserReadMapper. insertInfo(vo);
        if(i > 1){
            throw new Exception("新增了多条关系数据！");
        }
    }

    @Override
    public void delInfo(ToolsImGroupTagUserVo vo) {
        groupTagUserReadMapper.delInfo(vo);
    }
}
