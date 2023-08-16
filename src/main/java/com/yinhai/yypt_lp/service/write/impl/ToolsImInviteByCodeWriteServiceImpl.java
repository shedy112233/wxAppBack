package com.yinhai.yypt_lp.service.write.impl;

import com.alibaba.fastjson.JSONObject;
import com.yinhai.ta404.core.exception.AppException;
import com.yinhai.ta404.core.transaction.annotation.TaTransactional;
import com.yinhai.yypt_lp.constant.TencentCloudImApiConstant;
import com.yinhai.yypt_lp.constant.TengXunImContstant;
import com.yinhai.yypt_lp.enummeration.FriendEnum;
import com.yinhai.yypt_lp.mapper.write.ToolsImInviteByCodeWriteMapper;
import com.yinhai.yypt_lp.service.write.ToolsImInviteByCodeWriteService;
import com.yinhai.yypt_lp.utils.HttpUtil;
import com.yinhai.yypt_lp.utils.TLSSigAPIv2;
import com.yinhai.yypt_lp.vo.ToolsImInviteByCodeVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import javax.annotation.Resource;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
@TaTransactional
@Slf4j
public class ToolsImInviteByCodeWriteServiceImpl implements ToolsImInviteByCodeWriteService {

    @Resource
    private ToolsImInviteByCodeWriteMapper imInviteByCodeWriteMapper;

    @Override
    public void insertInvitedInfo(ToolsImInviteByCodeVo record) {
        int i = imInviteByCodeWriteMapper.insertInvitedInfo(record);
        if(i > 1) {
            throw new AppException("扫码记录表中插入多条数据！");
        }
    }

    @Override
    public void updateInvitedInfo(ToolsImInviteByCodeVo record) throws ParseException {
        if(ObjectUtils.isEmpty(record.getId())){
            throw new AppException("id不能为空!");
        }
        if (ObjectUtils.isEmpty(record.getYesOrNo())){
            throw new AppException("yesOrNo不能为空!");
        }
        if("yes".equals(record.getYesOrNo())) {
            record.setFriendStatus(FriendEnum.IS_FRIEND.toString());
            addFriend(record.getInvitePhone(),record.getInvitedPhone());
        } else {
            record.setFriendStatus(FriendEnum.REFUSE_FRIEND.toString());
        }
        int i = imInviteByCodeWriteMapper.updateInvitedInfo(record);
        if(i > 1) {
            throw new AppException("扫码记录表中插入多条数据！");
        }
    }

    private void addFriend(String fromAccount,String toAccount) throws ParseException {
        SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        System.out.println("====================================");
        System.out.println("====================================");
        System.out.println(fromAccount);
        System.out.println("====================================");
        System.out.println("====================================");
        System.out.println(toAccount);
        System.out.println("====================================");
        System.out.println("====================================");
        String endDate = sf.format(new Date());
        Map map = new HashMap();
        map.put("From_Account",fromAccount);
        List list = new ArrayList();
        Map param = new HashMap();
        param.put("To_Account",toAccount);
        param.put("AddSource","AddSource_Type_Doctor");
        list.add(param);
        map.put("AddFriendItem",list);
        String url = TencentCloudImApiConstant.baseUrl + TencentCloudImApiConstant.RelationManage.FRIEND_ADD;
        StringBuilder str = new StringBuilder();
        String userSign = TLSSigAPIv2.genUserSig("administrator",sf.parse(endDate).getTime()/1000);
        str.append(url).append("?sdkappid=").append(TengXunImContstant.SDKAppID)
                .append("&identifier=administrator")
                .append("&usersig=")
                .append(userSign)
                .append("&random=99999999&contenttype=json");
        String s = HttpUtil.sendPost(str.toString(), map);
        JSONObject parse = (JSONObject)JSONObject.parse(s);
        log.info("*******************添加好友返回结果*******************");
        log.info(parse.toJSONString());
        log.info("*******************添加好友返回结果*******************");
    }
}
