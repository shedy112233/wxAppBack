package com.yinhai.yypt_lp.rest;

import com.alibaba.fastjson.JSONObject;
import com.yinhai.ta404.core.restservice.annotation.RestService;
import com.yinhai.ta404.core.service.BaseService;
import com.yinhai.yypt_lp.common.WxCommonFunction;
import com.yinhai.yypt_lp.constant.WxConstant;
import com.yinhai.yypt_lp.entity.ToolsImUserEntity;
import com.yinhai.yypt_lp.mapper.read.ToolsImConstantReadMapper;
import com.yinhai.yypt_lp.mapper.write.ToolsImConstantWriteMapper;
import com.yinhai.yypt_lp.service.read.*;
import com.yinhai.yypt_lp.service.write.ToolsImInviteByCodeWriteService;
import com.yinhai.yypt_lp.service.write.ToolsImInviteWriteService;
import com.yinhai.yypt_lp.service.write.ToolsImUserBzWriteService;
import com.yinhai.yypt_lp.service.write.ToolsImUserWriteService;
import com.yinhai.yypt_lp.utils.FileDESUtil;
import com.yinhai.yypt_lp.utils.HttpUtil;
import com.yinhai.yypt_lp.utils.JSONResult;
import com.yinhai.yypt_lp.utils.RedisUtil;
import com.yinhai.yypt_lp.vo.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.PostMapping;

import javax.annotation.Resource;
import java.io.IOException;
import java.text.ParseException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@RestService("wx")
@Slf4j
public class WxRestService extends BaseService {

    @Resource
    private RedisUtil redisUtil;
    @Resource
    private MessageService messageService;
    @Resource
    private ToolsImInviteReadService toolsImInviteService;
    @Resource
    private ToolsImInviteWriteService imInviteWriteService;
    @Resource
    private ToolsImUserWriteService userWriteService;
    @Resource
    private FriendGroupTagReadService friendGroupTagReadService;
    @Resource
    private ToolsImUserBzWriteService toolsImUserBzWriteService;
    @Resource
    private ToolsImUserBzReadService toolsImUserBzReadService;
    @Resource
    private ToolsImInviteByCodeReadService toolsImInviteByCodeReadService;
    @Resource
    private ToolsImInviteByCodeWriteService toolsImInviteByCodeWriteService;

    @Resource
    private ToolsImConstantReadMapper toolsImConstantReadMapper;
    @Resource
    private ToolsImConstantWriteMapper toolsImConstantWriteMapper;

    @PostMapping("getOpenid")
    public JSONResult getOpenid(String code) throws Exception {
        WxCommonFunction.getOpenid(redisUtil,code);
        return new JSONResult();
    }

    @PostMapping("getPhoneNumber")
    public JSONResult  getPhoneNumber(String code) throws Exception {
        String access_token = WxCommonFunction.getToken(redisUtil);
        String getPhoneNumberUrl = WxConstant.getPhoneUrl.replace("ACCESS_TOKEN",access_token);
        JSONObject body = new JSONObject();
        body.put("code",code);
        String resultString = HttpUtil.doPost2(getPhoneNumberUrl, body);
        JSONObject result = (JSONObject)JSONObject.parse(resultString);
        return new JSONResult(result);
    }

    /**
     * 获取邀请码
     * @return
     */
    @PostMapping("getInviteCode")
    public JSONResult getInviteCode(String userId) throws Exception {
        /**
         * 验证是否有未使用过的邀请码
         */
        ToolsImInviteVo inviteVo = toolsImInviteService.queryInfoByCondition(userId);
        if(ObjectUtils.isEmpty(inviteVo)){
            String inviteCode = WxCommonFunction.getInviteCode(redisUtil);
            ToolsImInviteVo toolsImInviteVo = new ToolsImInviteVo();
            toolsImInviteVo.setId(UUID.randomUUID().toString());
            toolsImInviteVo.setPhone(userId);
            toolsImInviteVo.setInviteCode(inviteCode);
            toolsImInviteVo.setCreateTime(LocalDateTime.now().toString());
            imInviteWriteService.insertInviteInfo(toolsImInviteVo);
            return new JSONResult(inviteCode);
        } else {
            redisUtil.setex("INVITE_CODE_" + inviteVo.getInviteCode(),inviteVo.getInviteCode(),14400);
            return new JSONResult(inviteVo.getInviteCode());
        }

    }

    /**
     * 获取单聊消息
     * @param userId
     * @param toUserId
     * @return
     */
    @PostMapping("getPersonMsg")
    public JSONResult getPersonMsg(String userId,String toUserId,String time) throws IOException {
        JSONResult personMsg = messageService.getPersonMsg(userId,toUserId, ObjectUtils.isEmpty(time) ? 0: Integer.valueOf(time));
        return personMsg;
    }

    /**
     * 获取群聊消息
     * @param groupId
     * @return
     */
    @PostMapping("getGroupMsg")
    public JSONResult getGroupMsg(String groupId,String time) throws IOException {
        JSONResult groupMsg = messageService.getGroupMsg(groupId,ObjectUtils.isEmpty(time) ? 0: Integer.valueOf(time));
        return groupMsg;
    }

    /**
     * 更新备注信息
     * @param record
     */
    @PostMapping("updateBz")
    public void updateBz(ToolsImUserEntity record){
        userWriteService.updateBz(record);
    }

    /**
     * 查询对应用户所创建的所有标签
     * @param vo
     * @return
     */
    @PostMapping("getTags")
    public JSONResult getTags(ToolsImFriendGroupTagVo vo){
        List<ToolsImFriendGroupTagVo> tags = friendGroupTagReadService.getTags(vo);
        return new JSONResult(tags);
    }

    /**
     * 新增用户其他基本信息
     * @param record
     */
    @PostMapping("updatePersonInfo")
    public void updatePersonInfo(ToolsImUserBzVo record){
        toolsImUserBzWriteService.insertInfo(record);
    }

    /**
     * 获取用户其他基本信息
     * @param phone
     * @param operator
     */
    @PostMapping("getPersonTags")
    public JSONResult getPersonTags(String phone,String operator){
        String result = friendGroupTagReadService.queryPersonTagName(phone, operator);
        return new JSONResult(result);
    }

    /**
     * 查询单个用户备注信息
     * @param record
     */
    @PostMapping("getUserBz")
    public JSONResult getUserBz(ToolsImUserBzVo record){
        ToolsImUserBzVo bzByOperator = toolsImUserBzReadService.getBzByOperator(record);
        if(ObjectUtils.isEmpty(bzByOperator)){
            return JSONResult.errorMsg("没有该用户备注");
        } else {
            return new JSONResult(bzByOperator);
        }
    }

    /**
     * 查询被邀请用户信息
     * @param phone
     * @return
     */
    @PostMapping("getInvitedInfo")
    public JSONResult getInvitedInfo(String phone){
        ToolsImInviteByCodeVo toolsImInviteByCodeVo = new ToolsImInviteByCodeVo();
        toolsImInviteByCodeVo.setInvitePhone(phone);
        List<ToolsImInviteByCodeVo> toolsImInviteByCodeVos = toolsImInviteByCodeReadService.queryInvitedInfo(toolsImInviteByCodeVo);
        return JSONResult.ok(toolsImInviteByCodeVos);
    }

    /**
     * 更新被邀请用户信息
     * @param record
     */
    @PostMapping("updateInvitedInfo")
    public void updateInvitedInfo(ToolsImInviteByCodeVo record) throws ParseException {
        toolsImInviteByCodeWriteService.updateInvitedInfo(record);
    }

    @PostMapping("handleConstant")
    public void handleConstant(){
        String stringKey = (String) redisUtil.get("STRING_KEY");
        List<ToolsImConstantVo> allConstant = toolsImConstantReadMapper.getAllConstant();
        for (ToolsImConstantVo record:allConstant) {
            if(!"STRING_KEY".equals(record.getTKey()) && !"FILE_KEY".equals(record.getTKey())){
                record.setTValue(FileDESUtil.encryptDesToBase64(record.getTValue(),stringKey));
                toolsImConstantWriteMapper.updateByPrimaryKeySelective(record);
            }
        }
    }
    //@PostMapping("testDemo")
    //public void testDemo(){
    //    String path = ClassUtils.getDefaultClassLoader().getResource("static").getPath();
    //    String[] split = path.split("\\/");
    //    String url = "/" + split[1] + "/" + split[2] + "/" + "static/";
    //    String fileName = "abc.json";
    //    log.info("==========url========={}",url + fileName);
    //    PersonMsgVo personMsg = new PersonMsgVo();
    //    personMsg.setConversationValue("asdasda");
    //    personMsg.setActionStatus("vvvv");
    //    personMsg.setLastMsgKey("12831301");
    //    personMsg.setComplete(112233);
    //    log.info("==========personMsg========={}", JSON.toJSON(personMsg).toString());
    //    FileUtil.writeJson(url + fileName, (JSONObject) JSON.toJSON(personMsg),true);
    //    log.info("==========执行完毕=========");
    //}
}
