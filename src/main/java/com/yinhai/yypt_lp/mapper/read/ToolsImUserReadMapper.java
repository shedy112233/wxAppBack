package com.yinhai.yypt_lp.mapper.read;

import com.yinhai.ta404.module.mybatis.mapper.Ta404SupportMapper;
import com.yinhai.yypt_lp.entity.ToolsImUserC;
import com.yinhai.yypt_lp.entity.ToolsImUserEntity;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ToolsImUserReadMapper extends Ta404SupportMapper {

    /**
     * 根据手机号查询用户信息
     * @param phone
     * @return
     */
    ToolsImUserEntity selectByPrimaryKey(@Param("phone") String phone, @Param("openId") String openId);

    /**
     * 通过邀请码查询数据
     * @param inviteCode
     * @return
     */
    List<ToolsImUserEntity> queryInfoByOther(String inviteCode);

    /**
     * 查询所有用户数据
     * @return
     */
    List<ToolsImUserEntity> queryAllInfo();

    ToolsImUserEntity queryByPhone(String phone);

    List<ToolsImUserEntity> queryList(ToolsImUserEntity toolsImUserEntity);

    ToolsImUserC queryByPhoneForC(String phone);
}
