package com.yinhai.yypt_lp.service.read.impl;

import com.yinhai.ta404.core.transaction.annotation.TaTransactional;
import com.yinhai.yypt_lp.mapper.read.ToolsImConstantReadMapper;
import com.yinhai.yypt_lp.service.read.ParamService;
import com.yinhai.yypt_lp.utils.FileDESUtil;
import com.yinhai.yypt_lp.utils.RedisUtil;
import com.yinhai.yypt_lp.vo.ToolsImConstantVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import javax.annotation.Resource;
import java.util.List;

@Service
@Slf4j
@TaTransactional
public class ParamServiceImpl implements ParamService {

    @Resource
    private RedisUtil redisUtil;
    @Resource
    private ToolsImConstantReadMapper constantMapper;

    @Override
    public void handleInfo() throws Exception {
        redisUtil.set("STRING_KEY","******@147258");
        List<ToolsImConstantVo> allConstant = constantMapper.getAllConstant();
        if(allConstant.size() >0){
            for (ToolsImConstantVo vo:allConstant) {
                String key = vo.getTKey();
                String value = vo.getTValue();
                if(!ObjectUtils.isEmpty(key)&&!ObjectUtils.isEmpty(value)){
                    redisUtil.set(key,value);
                }
            }
        } else {
            log.error("返回的常量数据不能为空！");
        }
    }
}
