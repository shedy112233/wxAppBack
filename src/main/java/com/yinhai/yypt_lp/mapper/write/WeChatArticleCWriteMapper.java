package com.yinhai.yypt_lp.mapper.write;

import com.yinhai.yypt_lp.entity.WechatArticle;

/**
* 微信文章表(WechatArticle)表数据库访问层
*
* @author default
* @since 2023-07-19 13:46:36
*/
public interface WeChatArticleCWriteMapper {
    /**
    * 新增数据
    *
    * @param wechatArticle 实例对象
    * @return 影响行数
    */
    int insertC(WechatArticle wechatArticle);


}
