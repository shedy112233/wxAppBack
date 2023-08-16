package com.yinhai.yypt_lp.service.read.impl;

import com.yinhai.yypt_lp.entity.WechatArticle;
import com.yinhai.yypt_lp.mapper.read.WeChatArticleReadMapper;
import com.yinhai.yypt_lp.service.read.WeChatArticleReadService;
import org.springframework.stereotype.Service;
import com.yinhai.ta404.core.transaction.annotation.NoTransactional;
import com.yinhai.ta404.core.restservice.requestbean.PageParam;
import com.yinhai.ta404.core.restservice.resultbean.Page;

import javax.annotation.Resource;
import java.util.List;

/**
* 微信文章表(WechatArticle)表服务实现类
*
* @author default
* @since 2023-07-19 13:46:37
*/
@Service
@NoTransactional
public class WeChatArticleReadServiceImpl implements WeChatArticleReadService {
@Resource
private WeChatArticleReadMapper weChatArticleReadMapper;

    /**
    * 通过ID查询单条数据
    *
    * @param id 主键
    * @return 实例对象
    */
    @Override
    public WechatArticle queryWechatArticleInfoById(String id) {
    return this.weChatArticleReadMapper.queryById(id);
    }

    /**
    * 根据查询条件查询数据
    *
    * @param wechatArticle
    */
    @Override
    public List<WechatArticle> queryWechatArticleInfoList(WechatArticle wechatArticle) {
        return weChatArticleReadMapper.queryList(wechatArticle);
    }

    /**
    * 根据查询条件分页查询数据
    *
    * @param wechatArticle
    * @param pageParam
    */
    @Override
    public Page<WechatArticle> queryWechatArticleInfoPage(WechatArticle wechatArticle, PageParam pageParam) {
        weChatArticleReadMapper.beginPager(pageParam);
        return weChatArticleReadMapper.endPager(weChatArticleReadMapper.queryList(wechatArticle));
    }

    @Override
    public List<WechatArticle> queryWechatArticleInfoListForSort(WechatArticle wechatArticle) {
        return weChatArticleReadMapper.queryListForSort(wechatArticle);
    }

}
