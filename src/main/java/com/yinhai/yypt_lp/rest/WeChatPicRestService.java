package com.yinhai.yypt_lp.rest;

import com.alibaba.fastjson.JSON;
import com.yinhai.ta404.core.exception.AppException;
import com.yinhai.ta404.core.utils.ValidateUtil;
import com.yinhai.yypt_lp.entity.WechatArticle;
import com.yinhai.yypt_lp.entity.WechatPic;
import com.yinhai.yypt_lp.service.read.WeChatPicReadService;
import com.yinhai.yypt_lp.service.write.WeChatPicWriteService;
import org.springframework.web.bind.annotation.*;
import com.yinhai.ta404.core.restservice.annotation.RestService;
import com.yinhai.ta404.core.restservice.BaseRestService;
import com.yinhai.ta404.core.restservice.requestbean.PageParam;
import com.yinhai.ta404.core.validate.annotation.V;
import org.springframework.validation.annotation.Validated;
import javax.annotation.Resource;
import javax.validation.Valid;
import java.util.List;

/**
* 微信图片表(WechatPic)表控制层
*
* @author default
* @since 2023-07-19 13:57:30
*/
@Validated
@RestService("weChatPic")
public class WeChatPicRestService extends BaseRestService{
    /**
    * 服务对象
    */
    @Resource
    private WeChatPicReadService weChatPicReadService;
    @Resource
    private WeChatPicWriteService weChatPicWriteService;
    /**
    * 新增数据
    *
    * @param wechatPic
    */
    @PostMapping("addWechatPicInfo")
    public void addWechatPicInfo(@Valid WechatPic wechatPic) {
        wechatPic.setAae011(getCurUserId());
        weChatPicWriteService.addWechatPicInfo(wechatPic);
    }

    /**
    * 通过主键物理删除数据
    *
    * @param wechatPic
    */
    @PostMapping("removeWechatPicById")
    public void removeWechatPicById(@Valid WechatPic wechatPic) {
        if(ValidateUtil.isEmpty(wechatPic)){
            throw new AppException("删除失败，请联系管理员");
        }
        if(ValidateUtil.isEmpty(wechatPic.getId())){
            throw new AppException("删除失败，请联系管理员");
        }
        weChatPicWriteService.removeWechatPicById(wechatPic.getId());
    }

    /**
    * 编辑数据
    *
    * @param wechatPic
    */
    @PostMapping("editWechatPicInfo")
    public void editWechatPicInfo(@Valid WechatPic wechatPic)  {
        weChatPicWriteService.editWechatPicInfo(wechatPic);
    }

    /**
    * 根据主键查询数据
    *
    * @param id 主键
    */
    @PostMapping("queryWechatPicInfoById")
        public void queryWechatPicInfoById(@V({"notnull"})String id){
        setData("wechatPicInfo",weChatPicReadService.queryWechatPicInfoById(id));
    }

    /**
    * 根据查询条件查询数据
    *
    * @param wechatPic
    */
    @PostMapping("queryWechatPicInfoList")
    public void queryWechatPicInfoList(WechatPic wechatPic){
        setData("wechatPicList",weChatPicReadService.queryWechatPicInfoList(wechatPic));
    }

    /**
    * 根据查询条件分页查询数据
    *
    * @param wechatPic
    * @param pageParam
    */
    @PostMapping("queryWechatPicInfoPage")
        public void queryWechatPicInfoPage(WechatPic wechatPic, PageParam pageParam){
        setPageBean(weChatPicReadService.queryWechatPicInfoPage(wechatPic, pageParam));
    }

    /**
     * 列表排序
     * @param jsonString
     */
    @PostMapping("sortList")
    public void sortList(String jsonString){
        List<WechatPic> wechatPics = JSON.parseArray(jsonString, WechatPic.class);
        if(ValidateUtil.isEmpty(wechatPics)){
            throw new AppException("未传入需排序列表");
        }
        weChatPicWriteService.sortList(wechatPics);
    }

    @PostMapping("queryWechatPicInfoListForSort")
    public void queryWechatPicInfoListForSort(WechatPic wechatPic){
        setData("wechatPicList",weChatPicReadService.queryWechatPicInfoListForSort(wechatPic));
    }

    @PostMapping("queryPicList")
    public void queryPicList(WechatPic wechatPic){
        setData("abc","abc");
    }
}
