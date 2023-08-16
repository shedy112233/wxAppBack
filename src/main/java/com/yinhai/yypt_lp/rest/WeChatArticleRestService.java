package com.yinhai.yypt_lp.rest;

import com.alibaba.fastjson.JSON;
import com.yinhai.ta404.core.exception.AppException;
import com.yinhai.ta404.core.utils.ValidateUtil;
import com.yinhai.yypt_lp.entity.WechatArticle;
import com.yinhai.yypt_lp.service.read.WeChatArticleReadService;
import com.yinhai.yypt_lp.service.write.WeChatArticleWriteService;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.*;
import com.yinhai.ta404.core.restservice.annotation.RestService;
import com.yinhai.ta404.core.restservice.BaseRestService;
import com.yinhai.ta404.core.restservice.requestbean.PageParam;
import com.yinhai.ta404.core.validate.annotation.V;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.validation.Valid;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
* 微信文章表(WechatArticle)表控制层
*
* @author default
* @since 2023-07-19 13:46:39
*/
@Validated
@RestService("weChatArticle")
public class WeChatArticleRestService extends BaseRestService{
    /**
    * 服务对象
    */
    @Resource
    private WeChatArticleReadService weChatArticleReadService;
    @Resource
    private WeChatArticleWriteService weChatArticleWriteService;
    /**
    * 新增数据
    *
    * @param wechatArticle
    */
    @PostMapping("addWechatArticleInfo")
    public void addWechatArticleInfo(@Valid WechatArticle wechatArticle) throws IOException {
        wechatArticle.setAae011(getCurUserId());
        weChatArticleWriteService.addWechatArticleInfo(wechatArticle);
    }
    /**
    * 通过主键物理删除数据
    *
    * @param wechatArticle
    */
    @PostMapping("removeWechatArticleById")
    public void removeWechatArticleById(@Valid WechatArticle wechatArticle) {
        wechatArticle.setAae011(getCurUserId());
        weChatArticleWriteService.removeWechatArticleById(wechatArticle.getId(),getCurUserId());
    }
    /**
    * 编辑数据
    *
    * @param wechatArticle
    */
    @PostMapping("editWechatArticleInfo")
    public void editWechatArticleInfo(@Valid WechatArticle wechatArticle)  {
        wechatArticle.setAae011(getCurUserId());
        weChatArticleWriteService.editWechatArticleInfo(wechatArticle);
    }
    /**
    * 根据查询条件查询数据
    *
    * @param wechatArticle
    */
    @PostMapping("queryWechatArticleInfoList")
    public void queryWechatArticleInfoList(WechatArticle wechatArticle){
        setData("wechatArticleList",weChatArticleReadService.queryWechatArticleInfoList(wechatArticle));
    }
    /**
    * 根据查询条件分页查询数据
    *
    * @param wechatArticle
    * @param pageParam
    */
    @PostMapping("queryWechatArticleInfoPage")
        public void queryWechatArticleInfoPage(WechatArticle wechatArticle, PageParam pageParam){
        setPageBean(weChatArticleReadService.queryWechatArticleInfoPage(wechatArticle, pageParam));
    }

    @PostMapping("sortList")
    public void sortList(String jsonString){
        List<WechatArticle> wechatArticles = JSON.parseArray(jsonString, WechatArticle.class);
        if(ValidateUtil.isEmpty(wechatArticles)){
            throw new AppException("未传入需排序列表");
        }
        weChatArticleWriteService.sortList(wechatArticles);
    }

    @PostMapping("queryWechatArticleInfoListForSort")
    public void queryWechatArticleInfoListForSort(WechatArticle wechatArticle){
        setData("wechatArticleList",weChatArticleReadService.queryWechatArticleInfoListForSort(wechatArticle));
    }
}
