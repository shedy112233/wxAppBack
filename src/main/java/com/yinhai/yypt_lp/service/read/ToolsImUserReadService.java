package com.yinhai.yypt_lp.service.read;

import com.yinhai.ta404.core.restservice.requestbean.PageParam;
import com.yinhai.ta404.core.restservice.resultbean.Page;
import com.yinhai.yypt_lp.entity.ToolsImUserEntity;

import java.util.List;

public interface ToolsImUserReadService {

    /**
     * 查询所有用户数据
     * @return
     */
    List<ToolsImUserEntity> queryAllInfo();

    /**
     * 通过手机号查询用户信息
     * @param phone
     * @return
     */
    ToolsImUserEntity queryUserInfoByPhone(String phone,String openId);

    /**
     * 查询携带备注的数据
     * @param phone
     * @param operator
     * @return
     */
    ToolsImUserEntity queryUserByPhone(String phone,String operator);

    /**
     * 通过邀请码查询数据
     * @param inviteCode
     * @return
     */
    List<ToolsImUserEntity> queryInfoByOther(String inviteCode);

    /**
     * 分页查询用户数据
     * @param toolsImUserEntity
     * @param pageParam
     * @return
     */
    Page<ToolsImUserEntity> queryToolsImUserEntityInfoPage(ToolsImUserEntity toolsImUserEntity, PageParam pageParam);
}
