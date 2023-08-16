package com.yinhai.yypt_lp.mapper.write;

import com.yinhai.yypt_lp.entity.WechatPic;
import org.apache.ibatis.annotations.Param;

/**
* 微信图片表(WechatPic)表数据库访问层
*
* @author default
* @since 2023-07-19 13:57:30
*/
public interface WeChatPicWriteMapper {
    /**
    * 新增数据
    *
    * @param wechatPic 实例对象
    * @return 影响行数
    */
    int insert(WechatPic wechatPic);

    /**
    * 修改数据
    *
    * @param wechatPic 实例对象
    * @return 影响行数
    */
    int update(WechatPic wechatPic);

    /**
    * 通过主键物理删除数据
    *
    * @param id 主键
    * @return 影响行数
    */
    int deleteById(String id);


    int updateSort(@Param("id") String id, @Param("sort") Integer sort);
}
