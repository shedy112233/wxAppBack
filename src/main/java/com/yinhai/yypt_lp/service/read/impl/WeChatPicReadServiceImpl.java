package com.yinhai.yypt_lp.service.read.impl;

import com.yinhai.yypt_lp.entity.WechatPic;
import com.yinhai.yypt_lp.mapper.read.WeChatPicReadMapper;
import com.yinhai.yypt_lp.service.read.WeChatPicReadService;
import org.springframework.stereotype.Service;
import com.yinhai.ta404.core.transaction.annotation.NoTransactional;
import com.yinhai.ta404.core.restservice.requestbean.PageParam;
import com.yinhai.ta404.core.restservice.resultbean.Page;

import javax.annotation.Resource;
import java.util.List;

/**
* 微信图片表(WechatPic)表服务实现类
*
* @author default
* @since 2023-07-19 13:57:30
*/
@Service
@NoTransactional
public class WeChatPicReadServiceImpl implements WeChatPicReadService {
@Resource
private WeChatPicReadMapper weChatPicReadMapper;

    /**
    * 通过ID查询单条数据
    *
    * @param id 主键
    * @return 实例对象
    */
    @Override
    public WechatPic queryWechatPicInfoById(String id) {
    return this.weChatPicReadMapper.queryById(id);
    }

    /**
    * 根据查询条件查询数据
    *
    * @param wechatPicQueryVo
    */
    @Override
    public List<WechatPic> queryWechatPicInfoList(WechatPic wechatPic) {
        return weChatPicReadMapper.queryList(wechatPic);
    }

    /**
    * 根据查询条件分页查询数据
    *
    * @param wechatPicQueryVo
    * @param pageParam
    */
    @Override
    public Page<WechatPic> queryWechatPicInfoPage(WechatPic wechatPic, PageParam pageParam) {
        weChatPicReadMapper.beginPager(pageParam);
        return weChatPicReadMapper.endPager(weChatPicReadMapper.queryList(wechatPic));
    }

    @Override
    public List<WechatPic> queryWechatPicInfoListForSort(WechatPic wechatPic) {
        return weChatPicReadMapper.queryListForSort(wechatPic);
    }

}
