package com.yinhai.yypt_lp.constant;

public class WxConstant {
    /**
     * 获取openid的请求地址
     */
    public static final String getOpenidUrl="https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=CODE&grant_type=authorization_code";
    /**
     * 获取phone的请求地址
     */
    public static final String getPhoneUrl="https://api.weixin.qq.com/wxa/business/getuserphonenumber?access_token=ACCESS_TOKEN";
    /**
     * 获取token的请求地址
     */
    public static final String getTokenUrl="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=SECRET";
}
