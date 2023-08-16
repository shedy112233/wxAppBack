package com.yinhai.yypt_lp.rest;

import com.yinhai.ta404.core.restservice.BaseRestService;
import com.yinhai.ta404.core.restservice.annotation.RestService;
import com.yinhai.yypt_lp.utils.FileDESUtil;
import com.yinhai.yypt_lp.utils.QRCodeUtil;
import com.yinhai.yypt_lp.utils.RedisUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

@RestService("qrcode")
@Slf4j
public class QRCodeRestService extends BaseRestService{

    @Autowired
    private RedisUtil redisUtil;

    @GetMapping("queryQRCode")
    public void queryQRCode(String userId) throws Exception {
        String stringKey = (String) redisUtil.get("STRING_KEY");
        String content = FileDESUtil.decryptString((String) redisUtil.get("BASE_URL"),stringKey) + "?userId=" + userId;
        log.info("--------content--------" + content);
        Integer width = 200;
        Integer height = 200;
        String codePath = QRCodeUtil.crateQRCode(content, width, height);
        setData("codePath",codePath);
    }
}
