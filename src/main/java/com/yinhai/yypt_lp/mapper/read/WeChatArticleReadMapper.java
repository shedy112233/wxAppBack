package com.yinhai.yypt_lp.mapper.read;

import com.yinhai.yypt_lp.entity.WechatArticle;
import com.yinhai.ta404.module.mybatis.mapper.Ta404SupportMapper;
import java.util.List;

/**
* 微信文章表(WechatArticle)表数据库访问层
*
* @author default
* @since 2023-07-19 13:46:40
*/
public interface WeChatArticleReadMapper extends Ta404SupportMapper{

    /**
    * 通过ID查询单条数据
    *
    * @param id 主键
    * @return 实例对象
    */
    WechatArticle queryById(String id);

    /**
    * 查询指定行数据
    *
    * @return 对象列表
    */
    List<WechatArticle> queryList(WechatArticle wechatArticleQueryVo);

    List<WechatArticle> queryListForSort(WechatArticle wechatArticle);
}
