package com.yinhai.yypt_lp.service.write;

import com.yinhai.yypt_lp.entity.ToolsImUserEntity;

import java.util.List;

public interface ToolsImUserWriteService {

    /**
     * 插入用户信息
     * @param toolsImUserEntity
     */
    void insertUserInfo(ToolsImUserEntity toolsImUserEntity);

    /**
     * 更新用户信息
     * @param toolsImUserEntity
     */
    void updateUserInfo(ToolsImUserEntity toolsImUserEntity);

    /**
     * 更新备注信息
     * @param record
     * @return
     */
    void updateBz(ToolsImUserEntity record);

    void insertData(ToolsImUserEntity toolsImUserEntity);

    void updateData(ToolsImUserEntity toolsImUserEntity);

    void deleteData(ToolsImUserEntity toolsImUserEntity);

    void deleteList(List<ToolsImUserEntity> toolsImUserEntityList);
}
