package com.yinhai.yypt_lp.service.read.impl;

import com.yinhai.ta404.core.restservice.requestbean.PageParam;
import com.yinhai.ta404.core.restservice.resultbean.Page;
import com.yinhai.ta404.core.transaction.annotation.TaTransactional;
import com.yinhai.yypt_lp.entity.ToolsImUserEntity;
import com.yinhai.yypt_lp.mapper.read.ToolsImUserBzReadMapper;
import com.yinhai.yypt_lp.mapper.read.ToolsImUserReadMapper;
import com.yinhai.yypt_lp.service.read.ToolsImUserReadService;
import com.yinhai.yypt_lp.vo.ToolsImUserBzVo;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import javax.annotation.Resource;
import java.util.List;

@Service
@TaTransactional(readOnly = true)
public class ToolsImUserReadServiceImpl implements ToolsImUserReadService {

    @Resource
    private ToolsImUserReadMapper readMapper;
    @Resource
    private ToolsImUserBzReadMapper bzReadMapper;

    @Override
    public List<ToolsImUserEntity> queryAllInfo() {
        return readMapper.queryAllInfo();
    }

    @Override
    public ToolsImUserEntity queryUserInfoByPhone(String phone,String openId) {
        ToolsImUserEntity toolsImUserEntity = readMapper.selectByPrimaryKey(phone, openId);
        return toolsImUserEntity;
    }

    @Override
    public ToolsImUserEntity queryUserByPhone(String phone, String operator) {
        ToolsImUserEntity toolsImUserEntity = readMapper.selectByPrimaryKey(phone, null);
        ToolsImUserBzVo toolsImUserBzVo = new ToolsImUserBzVo();
        toolsImUserBzVo.setPhone(phone);
        toolsImUserBzVo.setOperator(operator);
        ToolsImUserBzVo bzByOperator = bzReadMapper.getBzByOperator(toolsImUserBzVo);
        if(!ObjectUtils.isEmpty(bzByOperator) && !ObjectUtils.isEmpty(toolsImUserEntity)){
            toolsImUserEntity.setBz(bzByOperator.getBz());
        }
        return toolsImUserEntity;
    }

    @Override
    public List<ToolsImUserEntity> queryInfoByOther(String inviteCode) {
        return readMapper.queryInfoByOther(inviteCode);
    }

    @Override
    public Page<ToolsImUserEntity> queryToolsImUserEntityInfoPage(ToolsImUserEntity toolsImUserEntity, PageParam pageParam) {
        readMapper.beginPager(pageParam);
        return readMapper.endPager(readMapper.queryList(toolsImUserEntity));
    }
}
