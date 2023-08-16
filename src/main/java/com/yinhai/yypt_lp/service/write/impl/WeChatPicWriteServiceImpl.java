package com.yinhai.yypt_lp.service.write.impl;

import com.yinhai.yypt_lp.entity.WechatPic;
import com.yinhai.yypt_lp.entity.WechatPicC;
import com.yinhai.yypt_lp.mapper.read.WeChatPicReadMapper;
import com.yinhai.yypt_lp.mapper.write.WeChatPicCWriteMapper;
import com.yinhai.yypt_lp.mapper.write.WeChatPicWriteMapper;
import com.yinhai.yypt_lp.service.write.WeChatPicWriteService;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import com.yinhai.ta404.core.transaction.annotation.TaTransactional;
import com.yinhai.ta404.core.service.BaseService;
import com.yinhai.ta404.core.utils.UUIDUtils;
import com.yinhai.ta404.core.exception.AppException;
import javax.annotation.Resource;
import java.util.List;

/**
* 微信图片表(WechatPic)表服务实现类
*
* @author default
* @since 2023-07-19 13:57:30
*/
@Service
@TaTransactional
public class WeChatPicWriteServiceImpl extends BaseService implements WeChatPicWriteService {
@Resource
private WeChatPicWriteMapper weChatPicWriteMapper;
@Resource
private WeChatPicReadMapper weChatPicReadMapper;
@Resource
private WeChatPicCWriteMapper weChatPicCWriteMapper;
    /**
    * 新增数据
    *
    * @param wechatPicAddVo 实例对象
    * @return 实例对象
    */
    @Override
    public WechatPic addWechatPicInfo(WechatPic wechatPic) {
        wechatPic.setId(UUIDUtils.getUUID());
        wechatPic.setAae036(getSysTimestamp());
        int i = weChatPicWriteMapper.insert(wechatPic);
        if (i != 1) {
        throw new AppException("未添加任何数据，请重试");
        }
        // 新增日志
        insertC(wechatPic,"1");
        return wechatPic;
    }

    /**
    * 修改数据
    *
    * @param wechatPicEditVo 实例对象
    * @return 实例对象
    */
    @Override
    public WechatPic editWechatPicInfo(WechatPic wechatPic) {
        int i = weChatPicWriteMapper.update(wechatPic);
        if (i != 1) {
        throw new AppException("未更新任何数据，请重试");
        }
        // 新增日志
        insertC(wechatPic,"2");
        return wechatPic;
    }
    /**
    * 通过主键物理删除数据
    *
    * @param id 主键
    * @return 受影响行数
    */
    @Override
    public int removeWechatPicById(String id) {
        // 新增日志
        insertC(weChatPicReadMapper.queryById(id),"3");
        // 删除数据
        int i = this.weChatPicWriteMapper.deleteById(id);
        if (i == 0) throw new AppException("未删除任何数据，请重试");
        return i;
    }

    @Override
    public void sortList(List<WechatPic> wechatPics) {
        // 按照顺序排序
        for(int i = 0;i<wechatPics.size();i++){
            weChatPicWriteMapper.updateSort(wechatPics.get(i).getId(), i);
        }
    }


    public void insertC(WechatPic wechatPic,String evtType){
        // 增加日志表
        WechatPicC wechatPicC = new WechatPicC();
        wechatPicC.setcId(UUIDUtils.getUUID());
        wechatPicC.setId(wechatPic.getId());
        wechatPicC.setEvtType(evtType);
        wechatPicC.setPic(wechatPic.getPic());
        wechatPicC.setStartTime(wechatPic.getStartTime());
        wechatPicC.setEndTime(wechatPic.getEndTime());
        wechatPicC.setRemarks(wechatPic.getRemarks());
        wechatPicC.setAae011(wechatPic.getAae011());
        wechatPicC.setAae036(wechatPic.getAae036());
        wechatPicC.setSort(wechatPic.getSort());
        int i = weChatPicCWriteMapper.insertC(wechatPicC);
        if (i != 1) {
            throw new AppException("未新增日志信息，请重试");
        }
    }

}
