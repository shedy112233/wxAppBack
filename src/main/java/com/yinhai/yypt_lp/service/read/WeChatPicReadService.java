package com.yinhai.yypt_lp.service.read;

import com.yinhai.yypt_lp.entity.WechatPic;
import java.util.List;
import com.yinhai.ta404.core.restservice.requestbean.PageParam;
import com.yinhai.ta404.core.restservice.resultbean.Page;


/**
* 微信图片表(WechatPic)表服务接口
*
* @author default
* @since 2023-07-19 13:57:30
*/
public interface WeChatPicReadService {

    /**
    * 通过ID查询单条数据
    *
    * @param id 主键
    * @return 实例对象
    */
    WechatPic queryWechatPicInfoById(String id);

    /**
    * 根据查询条件查询数据
    *
    * @param wechatPicQueryVo
    */
    List<WechatPic> queryWechatPicInfoList(WechatPic wechatPic);

    /**
    * 根据查询条件分页查询数据
    *
    * @param wechatPicQueryVo
    * @param pageParam
    */
    Page<WechatPic> queryWechatPicInfoPage(WechatPic wechatPic, PageParam pageParam);

    List<WechatPic> queryWechatPicInfoListForSort(WechatPic wechatPic);
}
