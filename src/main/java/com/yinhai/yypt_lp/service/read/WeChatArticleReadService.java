package com.yinhai.yypt_lp.service.read;

import com.yinhai.yypt_lp.entity.WechatArticle;
import java.util.List;
import com.yinhai.ta404.core.restservice.requestbean.PageParam;
import com.yinhai.ta404.core.restservice.resultbean.Page;


/**
* 微信文章表(WechatArticle)表服务接口
*
* @author default
* @since 2023-07-19 13:46:39
*/
public interface WeChatArticleReadService {

    /**
    * 通过ID查询单条数据
    *
    * @param id 主键
    * @return 实例对象
    */
    WechatArticle queryWechatArticleInfoById(String id);

    /**
    * 根据查询条件查询数据
    *
    * @param wechatArticleQueryVo
    */
    List<WechatArticle> queryWechatArticleInfoList(WechatArticle wechatArticle);

    /**
    * 根据查询条件分页查询数据
    *
    * @param wechatArticleQueryVo
    * @param pageParam
    */
    Page<WechatArticle> queryWechatArticleInfoPage(WechatArticle wechatArticle, PageParam pageParam);

    List<WechatArticle> queryWechatArticleInfoListForSort(WechatArticle wechatArticle);
}
