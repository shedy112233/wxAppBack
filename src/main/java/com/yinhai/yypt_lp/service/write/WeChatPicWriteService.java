package com.yinhai.yypt_lp.service.write;

import com.yinhai.yypt_lp.entity.WechatPic;

import java.util.List;

/**
* 微信图片表(WechatPic)表服务接口
*
* @author default
* @since 2023-07-19 13:57:30
*/
public interface WeChatPicWriteService {
    /**
    * 新增数据
    *
    * @param wechatPicAddVo 实例对象
    * @return 实例对象
    */
    WechatPic addWechatPicInfo(WechatPic wechatPic);

    /**
    * 修改数据
    *
    * @param wechatPicEditVo 实例对象
    * @return 实例对象
    */
    WechatPic editWechatPicInfo(WechatPic wechatPic);

    /**
    * 通过主键物理删除数据
    *
    * @param id 主键
    * @return 是否成功
    */
    int removeWechatPicById(String id);


    void sortList(List<WechatPic> wechatPics);
}
