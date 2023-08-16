package com.yinhai.yypt_lp.rest;

import com.alibaba.fastjson.JSON;
import com.yinhai.ta404.core.restservice.BaseRestService;
import com.yinhai.ta404.core.restservice.annotation.RestService;
import com.yinhai.ta404.core.restservice.requestbean.PageParam;
import com.yinhai.yypt_lp.entity.ToolsImUserEntity;
import com.yinhai.yypt_lp.entity.WechatPic;
import com.yinhai.yypt_lp.service.read.ToolsImUserReadService;
import com.yinhai.yypt_lp.service.write.ToolsImUserWriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

/**
 * TODO
 *
 * @author cx
 * @explain
 * @date 2023年08月01日 13:55
 */
@Validated
@RestService("userManager")
public class UserManagerRestService extends BaseRestService {
    @Autowired
    private ToolsImUserWriteService toolsImUserWriteService;
    @Autowired
    private ToolsImUserReadService toolsImUserService;

    /**
     * 新增数据
     * @param toolsImUserEntity
     */
    @PostMapping("insertData")
    public void insertData(ToolsImUserEntity toolsImUserEntity){
        toolsImUserWriteService.insertData(toolsImUserEntity);
    }

    /**
     * 更新数据
     * @param toolsImUserEntity
     */
    @PostMapping("updateData")
    public void updateData(ToolsImUserEntity toolsImUserEntity){
        toolsImUserWriteService.updateData(toolsImUserEntity);
    }

    /**
     * 单个删除
     * @param toolsImUserEntity
     */
    @PostMapping("deleteData")
    public void deleteData(ToolsImUserEntity toolsImUserEntity){
        toolsImUserWriteService.deleteData(toolsImUserEntity);
    }

    /**
     * 批量删除
     * @param json
     */
    @PostMapping("deleteList")
    public void deleteList(String json){
        List<ToolsImUserEntity> toolsImUserEntityList = JSON.parseArray(json, ToolsImUserEntity.class);
        toolsImUserWriteService.deleteList(toolsImUserEntityList);
    }

    /**
     * 分页查询
     * @param toolsImUserEntity
     * @param pageParam
     */
    @PostMapping("queryToolsImUserEntityInfoPage")
    public void queryToolsImUserEntityInfoPage(ToolsImUserEntity toolsImUserEntity, PageParam pageParam){
        setPageBean(toolsImUserService.queryToolsImUserEntityInfoPage(toolsImUserEntity, pageParam));
    }

}
