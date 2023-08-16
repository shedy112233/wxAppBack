package com.yinhai.yypt_lp.service.write.impl;

import com.yinhai.ta404.core.transaction.annotation.TaTransactional;
import com.yinhai.yypt_lp.mapper.write.ToolsImFriendGroupTagWriteMapper;
import com.yinhai.yypt_lp.service.write.FriendGroupTagWriteService;
import com.yinhai.yypt_lp.vo.ToolsImFriendGroupTagVo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
@TaTransactional
public class FriendGroupTagWriteServiceImpl implements FriendGroupTagWriteService {

    @Resource
    private ToolsImFriendGroupTagWriteMapper friendGroupTagMapper;

    @Override
    public void insertGroupTag(ToolsImFriendGroupTagVo vo) throws Exception {
        int i = friendGroupTagMapper.insertGroupTag(vo);
        if(i > 1){
            throw new Exception("新增了多条数据！");
        }
    }

    @Override
    public void updateGroupTag(ToolsImFriendGroupTagVo vo) throws Exception {
        int i = friendGroupTagMapper.updateGroupTag(vo);
        if(i > 1){
            throw new Exception("更新了多条数据！");
        }
    }

    @Override
    public void delGroupTag(ToolsImFriendGroupTagVo vo) {
        friendGroupTagMapper.delGroupTag(vo);
    }
}
