package com.yinhai.yypt_lp.service.write;

import com.yinhai.yypt_lp.entity.WechatArticle;

import java.io.IOException;
import java.util.List;

/**
* 微信文章表(WechatArticle)表服务接口
*
* @author default
* @since 2023-07-19 13:46:38
*/
public interface WeChatArticleWriteService {
    /**
    * 新增数据
    *
    * @param wechatArticleAddVo 实例对象
    * @return 实例对象
    */
    WechatArticle addWechatArticleInfo(WechatArticle wechatArticle) throws IOException;

    /**
    * 修改数据
    *
    * @param wechatArticleEditVo 实例对象
    * @return 实例对象
    */
    WechatArticle editWechatArticleInfo(WechatArticle wechatArticle);

    /**
    * 通过主键物理删除数据
    *
    * @param id 主键
    * @return 是否成功
    */
    int removeWechatArticleById(String id,String aae011);


    void sortList(List<WechatArticle> wechatArticles);
}
