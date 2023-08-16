package com.yinhai.yypt_lp.mapper.write;

import com.yinhai.yypt_lp.entity.ToolsImUserEntity;

public interface ToolsImUserWriteMapper {

    /**
     * 根据手机号删除用户数据
     * @param phone
     * @return
     */
    int deleteByPrimaryKey(String phone);

    /**
     * 插入用户数据
     * @param record
     * @return
     */
    int insert(ToolsImUserEntity record);

    /**
     * 更新用户数据
     * @param record
     * @return
     */
    int updateByPrimaryKey(ToolsImUserEntity record);

    /**
     * 更新备注信息
     * @param record
     * @return
     */
    int updateBz(ToolsImUserEntity record);

    int updateData(ToolsImUserEntity toolsImUserEntity);
    int deleteData(String phone);
}
