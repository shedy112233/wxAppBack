package com.yinhai.yypt_lp.service.write.impl;

import com.yinhai.ta404.core.exception.AppException;
import com.yinhai.ta404.core.transaction.annotation.TaTransactional;
import com.yinhai.ta404.core.utils.UUIDUtils;
import com.yinhai.ta404.core.utils.ValidateUtil;
import com.yinhai.yypt_lp.entity.ToolsImUserC;
import com.yinhai.yypt_lp.entity.ToolsImUserEntity;
import com.yinhai.yypt_lp.enummeration.UserStatusEnum;
import com.yinhai.yypt_lp.mapper.read.ToolsImUserReadMapper;
import com.yinhai.yypt_lp.mapper.write.ToolsImUserCWriteMapper;
import com.yinhai.yypt_lp.mapper.write.ToolsImUserWriteMapper;
import com.yinhai.yypt_lp.service.write.ToolsImUserWriteService;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import javax.annotation.Resource;
import java.util.List;

@Service
@TaTransactional
public class ToolsImUserWriteServiceImpl implements ToolsImUserWriteService {

    @Resource
    private ToolsImUserWriteMapper writeMapper;
    @Resource
    private ToolsImUserReadMapper toolsImUserReadMapper;
    @Resource
    private ToolsImUserCWriteMapper toolsImUserCWriteMapper;

    @Override
    public void insertUserInfo(ToolsImUserEntity toolsImUserEntity) {
        int i = writeMapper.insert(toolsImUserEntity);
        if(i > 1){
            throw new AppException("新增了多条数据！");
        }
    }

    @Override
    public void updateUserInfo(ToolsImUserEntity toolsImUserEntity) {
        int i = writeMapper.updateByPrimaryKey(toolsImUserEntity);
        if(i > 1){
            throw new AppException("更新了多条数据！");
        }
    }

    @Override
    public void updateBz(ToolsImUserEntity record) {
        if(ObjectUtils.isEmpty(record.getBz())){
            throw new AppException("备注信息不能为空！");
        }
        int i = writeMapper.updateBz(record);
        if(i > 1){
            throw new AppException("更新了多条数据的备注信息！");
        }
    }

    /**
     * 新增数据
     * @param toolsImUserEntity
     */
    @Override
    public void insertData(ToolsImUserEntity toolsImUserEntity) {
        // 查询电话号码是否存在
        if(!ValidateUtil.isEmpty(toolsImUserReadMapper.queryByPhone(toolsImUserEntity.getPhone()))){
            throw new AppException("您已经注册过，请直接登陆！");
        }
        toolsImUserEntity.setUserStatus(UserStatusEnum.EFFECTIVE.toString());
        insertUserInfo(toolsImUserEntity);
        // 记录日志
        insertC(toolsImUserReadMapper.queryByPhoneForC(toolsImUserEntity.getPhone()),"1");
    }

    /**
     * 修改数据
     * @param toolsImUserEntity
     */
    @Override
    public void updateData(ToolsImUserEntity toolsImUserEntity) {
        writeMapper.updateData(toolsImUserEntity);
        insertC(toolsImUserReadMapper.queryByPhoneForC(toolsImUserEntity.getPhone()),"2");
    }
    /**
     * 删除数据
     */
    @Override
    public void deleteData(ToolsImUserEntity toolsImUserEntity) {
        insertC(toolsImUserReadMapper.queryByPhoneForC(toolsImUserEntity.getPhone()),"3");
        writeMapper.deleteData(toolsImUserEntity.getPhone());
    }
    /**
     * 批量删除
     */
    @Override
    public void deleteList(List<ToolsImUserEntity> list){
        for(ToolsImUserEntity toolsImUserEntity:list){
            deleteData(toolsImUserEntity);
        }
    }

    public void insertC(ToolsImUserC toolsImUserC, String evtType){
        toolsImUserC.setId(UUIDUtils.getUUID());
        toolsImUserC.setEvtType(evtType);
        toolsImUserCWriteMapper.insert(toolsImUserC);
    }
}
