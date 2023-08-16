package com.yinhai.yypt_lp.mapper.write;

import com.yinhai.yypt_lp.entity.WechatPic;
import com.yinhai.yypt_lp.entity.WechatPicC;

/**
* 微信图片表(WechatPic)表数据库访问层
*
* @author default
* @since 2023-07-19 13:57:30
*/
public interface WeChatPicCWriteMapper {
    /**
    * 新增数据
    *
    * @param wechatPic 实例对象
    * @return 影响行数
    */
    int insertC(WechatPicC wechatPicC);


}
