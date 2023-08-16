package com.yinhai.yypt_lp.mapper.write;

import com.yinhai.yypt_lp.entity.WechatArticle;
import org.apache.ibatis.annotations.Param;

import java.util.Date;

/**
* 微信文章表(WechatArticle)表数据库访问层
*
* @author default
* @since 2023-07-19 13:46:36
*/
public interface WeChatArticleWriteMapper {
    /**
    * 新增数据
    *
    * @param wechatArticle 实例对象
    * @return 影响行数
    */
    int insert(WechatArticle wechatArticle);

    /**
    * 修改数据
    *
    * @param wechatArticle 实例对象
    * @return 影响行数
    */
    int update(WechatArticle wechatArticle);

    /**
    * 通过主键物理删除数据
    *
    * @param id 主键
    * @return 影响行数
    */
    int deleteById(String id);

    int updateSort(@Param("id") String id, @Param("sort") Integer sort);
}
