package com.yinhai.yypt_lp.mapper.read;

import com.yinhai.yypt_lp.entity.WechatPic;
import com.yinhai.ta404.module.mybatis.mapper.Ta404SupportMapper;
import java.util.List;

/**
* 微信图片表(WechatPic)表数据库访问层
*
* @author default
* @since 2023-07-19 13:57:30
*/
public interface WeChatPicReadMapper extends Ta404SupportMapper{

    /**
    * 通过ID查询单条数据
    *
    * @param id 主键
    * @return 实例对象
    */
    WechatPic queryById(String id);

    /**
    * 查询指定行数据
    *
    * @return 对象列表
    */
    List<WechatPic> queryList(WechatPic wechatPic);
    List<WechatPic> queryListForSort(WechatPic wechatPic);

}
