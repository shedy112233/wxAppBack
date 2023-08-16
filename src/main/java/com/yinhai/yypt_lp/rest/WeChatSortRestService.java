package com.yinhai.yypt_lp.rest;

import com.yinhai.ta404.core.restservice.BaseRestService;
import com.yinhai.ta404.core.restservice.annotation.RestService;
import com.yinhai.yypt_lp.service.read.WeChatArticleReadService;
import com.yinhai.yypt_lp.service.write.WeChatPicWriteService;
import org.springframework.validation.annotation.Validated;

import javax.annotation.Resource;

/**
 * TODO
 *
 * @author cx
 * @explain
 * @date 2023年07月19日 14:08
 */
@Validated
@RestService("weChatSort")
public class WeChatSortRestService extends BaseRestService {
    @Resource
    private WeChatPicWriteService weChatPicWriteService;
    @Resource
    private WeChatArticleReadService weChatArticleReadService;


}
