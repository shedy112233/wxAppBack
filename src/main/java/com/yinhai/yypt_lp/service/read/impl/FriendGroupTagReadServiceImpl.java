package com.yinhai.yypt_lp.service.read.impl;

import com.yinhai.ta404.core.transaction.annotation.TaTransactional;
import com.yinhai.yypt_lp.mapper.read.ToolsImFriendGroupTagReadMapper;
import com.yinhai.yypt_lp.mapper.read.ToolsImGroupTagUserReadMapper;
import com.yinhai.yypt_lp.service.read.FriendGroupTagReadService;
import com.yinhai.yypt_lp.vo.ToolsImFriendGroupTagVo;
import com.yinhai.yypt_lp.vo.ToolsImGroupTagUserVo;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import javax.annotation.Resource;
import java.util.List;

@Service
@TaTransactional(readOnly = true)
public class FriendGroupTagReadServiceImpl implements FriendGroupTagReadService {

    @Resource
    private ToolsImFriendGroupTagReadMapper friendGroupTagMapper;
    @Resource
    private ToolsImGroupTagUserReadMapper toolsImGroupTagUserReadMapper;

    @Override
    public List<ToolsImFriendGroupTagVo> getTags(ToolsImFriendGroupTagVo vo) {
        return friendGroupTagMapper.getTags(vo);
    }

    @Override
    public String queryPersonTagName(String phone, String operator) {
        String result = null;
        ToolsImGroupTagUserVo tagUserVo = new ToolsImGroupTagUserVo();
        tagUserVo.setPhone(phone);
        List<ToolsImGroupTagUserVo> toolsImGroupTagUserVos = toolsImGroupTagUserReadMapper.queryInfo(tagUserVo);
        for (ToolsImGroupTagUserVo vo:toolsImGroupTagUserVos){
            ToolsImFriendGroupTagVo groupTagVo = new ToolsImFriendGroupTagVo();
            groupTagVo.setTagId(vo.getTagId());
            ToolsImFriendGroupTagVo tagByTagId = friendGroupTagMapper.getTagByTagId(groupTagVo);
            if(!ObjectUtils.isEmpty(tagByTagId)){
                if(result == null){
                    result = tagByTagId.getTagName();
                } else {
                    result = result + "," + tagByTagId.getTagName();
                }
            }
        }
        return result;
    }
}
