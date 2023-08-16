package com.yinhai.yypt_lp.common;

import com.alibaba.fastjson.JSONObject;
import com.yinhai.yypt_lp.constant.WxConstant;
import com.yinhai.yypt_lp.utils.FileDESUtil;
import com.yinhai.yypt_lp.utils.HttpUtil;
import com.yinhai.yypt_lp.utils.RedisUtil;
import org.springframework.util.ObjectUtils;

import java.util.Random;

public class WxCommonFunction {
    // token过期时间
    public static final long TIME = 7200;
    // redis中存储token 的key
    public static final String KEY_ACCESS_TOKEN = "TA_ACCESS_TOKEN";
    /**
     * 邀请码组合 - 数字、大写字母 - 常量
     * 不包换：0,O,1,I
     */
    private static final String RULE_INVITATION_CODE = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
    private static final int RULE_INVITATION_CODE_LENGTH = 32;
    /**
     * 邀请码长度 - 常量
     */
    private static final int CODE_LENGTH_6 = 6;
    private static final int CODE_LENGTH_8 = 8;
    /**
     * 邀请码相关常量
     */
    public static final long INVITE_CODE_TIME = 3600;

    public static final String INVITE_CODE_PRE = "INVITE_CODE_";
    /**
     * 获取openid
     */
    public static String getOpenid(RedisUtil redisUtil, String code) throws Exception {
        String url = null;
        String stringKey = (String) redisUtil.get("STRING_KEY");
        url = WxConstant.getOpenidUrl.replace("APPID", FileDESUtil.decryptString(String.valueOf(redisUtil.get("APPID")),stringKey))
                .replace("SECRET",FileDESUtil.decryptString(String.valueOf(redisUtil.get("SECRET")),stringKey))
                .replace("CODE",code);
        String s = HttpUtil.sendGet(url);
        JSONObject jsonObject = (JSONObject) JSONObject.parse(s);
        String openid = jsonObject.getString("openid");
        redisUtil.set("WX_OPENID",openid);
        return openid;
    }

    /**
     * 获取token
     * @param redisUtil
     * @return
     * @throws Exception
     */
    public static String getToken(RedisUtil redisUtil) throws Exception {
        String access_token = null;
        String stringKey = (String) redisUtil.get("STRING_KEY");
        long expireTime = 0;
        String token = null;
        Boolean isExist = redisUtil.exists(KEY_ACCESS_TOKEN);
        if(isExist) {
            expireTime = redisUtil.ttl(KEY_ACCESS_TOKEN);
            if(expireTime > 1800){
                token = String.valueOf(redisUtil.get(KEY_ACCESS_TOKEN));
            }
        }
        if(!isExist || (expireTime != 0 && expireTime < 1800)){
            String url = WxConstant.getTokenUrl.replace("APPID",FileDESUtil.decryptString(String.valueOf(redisUtil.get("APPID")),stringKey))
                    .replace("SECRET",FileDESUtil.decryptString(String.valueOf(redisUtil.get("SECRET")),stringKey));
            String s = HttpUtil.sendGet(url);
            JSONObject jsonObject = (JSONObject) JSONObject.parse(s);
            if(ObjectUtils.isEmpty(jsonObject.get("access_token"))){
                new Exception("获取token失败");
            }
            access_token = (String) jsonObject.get("access_token");
            redisUtil.setex(KEY_ACCESS_TOKEN,access_token,TIME);
        } else {
            access_token = token;
        }
        return access_token;
    }

    /**
     * 获取六位随机邀请码
     * @return
     */
    public static String getInviteCode(RedisUtil redisUtil){
        Random random = new Random();
        StringBuilder stringBuffer = new StringBuilder();
        for (int i = 0; i < CODE_LENGTH_6; i++) {
            int i1 = random.nextInt(RULE_INVITATION_CODE_LENGTH);
            char c = RULE_INVITATION_CODE.charAt(i1);
            stringBuffer.append(c);
        }
        redisUtil.setex(INVITE_CODE_PRE+stringBuffer.toString(),stringBuffer.toString(),INVITE_CODE_TIME);
        return stringBuffer.toString();
    }
}
