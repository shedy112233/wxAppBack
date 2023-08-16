package com.yinhai.yypt_lp.service.write.impl;

import com.yinhai.ta404.core.transaction.annotation.TaTransactional;
import com.yinhai.yypt_lp.mapper.read.ToolsImFriendGroupTagReadMapper;
import com.yinhai.yypt_lp.mapper.read.ToolsImGroupTagUserReadMapper;
import com.yinhai.yypt_lp.mapper.read.ToolsImUserBzReadMapper;
import com.yinhai.yypt_lp.mapper.write.ToolsImGroupTagUserWriteMapper;
import com.yinhai.yypt_lp.mapper.write.ToolsImUserBzWriteMapper;
import com.yinhai.yypt_lp.service.write.ToolsImUserBzWriteService;
import com.yinhai.yypt_lp.vo.ToolsImFriendGroupTagVo;
import com.yinhai.yypt_lp.vo.ToolsImGroupTagUserVo;
import com.yinhai.yypt_lp.vo.ToolsImUserBzVo;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
@TaTransactional
public class ToolsImUserBzWriteServiceImpl implements ToolsImUserBzWriteService {

    @Resource
    private ToolsImUserBzWriteMapper toolsImUserBzWriteMapper;
    @Resource
    private ToolsImUserBzReadMapper toolsImUserBzReadMapper;
    @Resource
    private ToolsImGroupTagUserWriteMapper toolsImGroupTagUserWriteMapper;
    @Resource
    private ToolsImGroupTagUserReadMapper toolsImGroupTagUserReadMapper;
    @Resource
    private ToolsImFriendGroupTagReadMapper toolsImFriendGroupTagReadMapper;

    @Override
    public void insertInfo(ToolsImUserBzVo record) {
        SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        if(!ObjectUtils.isEmpty(record.getBz())||!ObjectUtils.isEmpty(record.getDesc())){
            ToolsImUserBzVo bzByOperator = toolsImUserBzReadMapper.getBzByOperator(record);
            record.setId(UUID.randomUUID().toString());
            record.setCreateTime(sf.format(new Date()));
            if(ObjectUtils.isEmpty(bzByOperator)){
                toolsImUserBzWriteMapper.insertInfo(record);
            } else {
                bzByOperator.setBz(record.getBz());
                toolsImUserBzWriteMapper.updateInfo(bzByOperator);
            }
        }
        if(!ObjectUtils.isEmpty(record.getTags())){
            String tags = record.getTags();
            String[] split = tags.split("\\,");
            if(split.length != 0){
                for (String str:split) {
                    ToolsImFriendGroupTagVo toolsImFriendGroupTagVo = new ToolsImFriendGroupTagVo();
                    toolsImFriendGroupTagVo.setOperateUser(record.getOperator());
                    toolsImFriendGroupTagVo.setTagName(str);
                    List<ToolsImFriendGroupTagVo> tagsVos = toolsImFriendGroupTagReadMapper.getTags(toolsImFriendGroupTagVo);
                    if(tagsVos.size() > 0) {
                        ToolsImGroupTagUserVo tagUserVo = new ToolsImGroupTagUserVo();
                        tagUserVo.setTagId(tagsVos.get(0).getTagId());
                        tagUserVo.setPhone(record.getPhone());
                        List<ToolsImGroupTagUserVo> toolsImGroupTagUserVos = toolsImGroupTagUserReadMapper.queryInfo(tagUserVo);
                        if(toolsImGroupTagUserVos.size() == 0){
                            tagUserVo.setId(UUID.randomUUID().toString());
                            tagUserVo.setCreateTime(sf.format(new Date()));
                            tagUserVo.setNickName(record.getNickName());
                            toolsImGroupTagUserWriteMapper.insertInfo(tagUserVo);
                        }
                    }

                }
            }

        }
    }
}
