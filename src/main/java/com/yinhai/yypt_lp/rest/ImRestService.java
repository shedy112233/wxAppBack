package com.yinhai.yypt_lp.rest;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.yinhai.ta404.core.restservice.annotation.RestService;
import com.yinhai.yypt_lp.common.WxCommonFunction;
import com.yinhai.yypt_lp.constant.TencentCloudImApiConstant;
import com.yinhai.yypt_lp.constant.TengXunImContstant;
import com.yinhai.yypt_lp.entity.ToolsImUserEntity;
import com.yinhai.yypt_lp.enummeration.UserRoleEnum;
import com.yinhai.yypt_lp.enummeration.UserStatusEnum;
import com.yinhai.yypt_lp.service.read.ToolsImInviteReadService;
import com.yinhai.yypt_lp.service.read.ToolsImUserReadService;
import com.yinhai.yypt_lp.service.write.*;
import com.yinhai.yypt_lp.utils.*;
import com.yinhai.yypt_lp.vo.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.*;

@RestService("im/")
@Slf4j
public class ImRestService{

    private static SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    @Autowired
    private RedisUtil redisUtil;

    @Autowired
    private ToolsImUserReadService toolsImUserService;

    @Autowired
    private ToolsImUserWriteService toolsImUserWriteService;

    @Autowired
    private ToolsImConversationWriteService conversationService;

    @Autowired
    private ToolsImGroupWriteService groupWriteService;

    @Autowired
    private ToolsImBindInfoWriteService toolsImBindInfoService;

    @Autowired
    private ToolsImInviteWriteService toolsImInviteService;

    @Autowired
    private ToolsImInviteReadService toolsImInviteReadService;

    @Autowired
    private ToolsImInviteByCodeWriteService toolsImInviteByCodeWriteService;



    /**
     * 注册
     * @param imageUrl
     * @param nickName
     * @param phone
     * @param inviteCode
     * @param fromAccount
     * @param isScanCodeRegist
     * @param applyReason
     * @return
     * @throws Exception
     */
    @PostMapping("register")
    public JSONResult register(String imageUrl, String nickName, String phone, String inviteCode, String fromAccount, boolean isScanCodeRegist,String applyReason) throws Exception {
        String endDate = sf.format(new Date());
        String openid = String.valueOf(redisUtil.get("WX_OPENID"));
        ToolsImUserEntity toolsImUser = toolsImUserService.queryUserInfoByPhone(phone, null);
        if(!ObjectUtils.isEmpty(toolsImUser)){
            return new JSONResult(560,"您已经注册过，请直接登陆",null);
        }
        Map param = new HashMap();
        param.put("UserID",phone);
        param.put("Nick",nickName);
        param.put("FaceUrl",imageUrl);
        String url = TencentCloudImApiConstant.baseUrl + TencentCloudImApiConstant.AccountManage.ACCOUNT_IMPORT;
        StringBuilder str = new StringBuilder();
        String userSign = TLSSigAPIv2.genUserSig("administrator",sf.parse(endDate).getTime()/1000);
        String stringKey = (String) redisUtil.get("STRING_KEY");
        str.append(url).append("?sdkappid=").append(FileDESUtil.decryptString(String.valueOf(redisUtil.get("SDKAppID")),stringKey))
                .append("&identifier=administrator")
                .append("&usersig=")
                .append(userSign)
                .append("&random=99999999&contenttype=json");
        String inviteValidCode = (String) redisUtil.get(WxCommonFunction.INVITE_CODE_PRE + inviteCode);
        if(!isScanCodeRegist && ObjectUtils.isEmpty(inviteValidCode)){
            return new JSONResult(559,"邀请码码已失效！",null);
        }
        if(!isScanCodeRegist){
            if(inviteValidCode.equals(inviteCode)){
                /**---------------------对邀请码进行校验--------------------**/
                List<ToolsImUserEntity> toolsImUserEntities = toolsImUserService.queryInfoByOther(inviteCode);
                if(toolsImUserEntities.size() > 0) {
                    return new JSONResult(559,"邀请码已存在，请更换最新邀请码！",null);
                } else {
                    String s = HttpUtil.sendPost(str.toString(), param);
                    JSONObject parse = (JSONObject)JSONObject.parse(s);
                    // 将数据存入数据库中
                    if("OK".equals(parse.get("ActionStatus"))){
                        ToolsImUserEntity toolsImUserEntity = new ToolsImUserEntity();
                        toolsImUserEntity.setPhone(phone);
                        toolsImUserEntity.setUserImage(imageUrl);
                        toolsImUserEntity.setNickName(nickName);
                        toolsImUserEntity.setOpenId(openid);
                        if(!ObjectUtils.isEmpty(inviteCode) && inviteCode != ""){
                            toolsImUserEntity.setUserRole(UserRoleEnum.PHYSICIAN.toString());
                            toolsImUserEntity.setInviteCode(inviteCode);
                        } else {
                            toolsImUserEntity.setUserRole(UserRoleEnum.ORDINARY_USER.toString());
                        }
                        toolsImUserEntity.setUserStatus(UserStatusEnum.EFFECTIVE.toString());
                        toolsImUserWriteService.insertUserInfo(toolsImUserEntity);
                        /**-------------------更新邀请表数据----------------**/
                        ToolsImInviteVo toolsImInviteVo1 = toolsImInviteReadService.queryInfoByInviteCode(inviteCode);
                        ToolsImInviteVo toolsImInviteVo = new ToolsImInviteVo();
                        toolsImInviteVo.setInviteCode(inviteCode);
                        toolsImInviteVo.setAcceptPerson(phone);
                        toolsImInviteVo.setAcceptTime(LocalDateTime.now().toString());
                        toolsImInviteService.updateInviteInfo(toolsImInviteVo);
                        /*---------------医师之间发起好友添加-----------------*/
                        log.info("==================" + toolsImInviteVo1.getPhone());
                        log.info("==================" + phone);
                        addFriend(toolsImInviteVo1.getPhone(),phone);
                    }
                    return new JSONResult(parse);
                }
            } else {
                return new JSONResult(558,"邀请码输入有误！",null);
            }
        } else {
            /**--------------将账号注册到im上面-----------**/
            String s = HttpUtil.sendPost(str.toString(), param);
            JSONObject parse = (JSONObject)JSONObject.parse(s);
            // 将数据存入数据库中
            if("OK".equals(parse.get("ActionStatus"))){
                /**--------------在数据库表中记录用户数据------------**/
                ToolsImUserEntity toolsImUserEntity = new ToolsImUserEntity();
                toolsImUserEntity.setPhone(phone);
                toolsImUserEntity.setUserImage(imageUrl);
                toolsImUserEntity.setNickName(nickName);
                toolsImUserEntity.setOpenId(openid);
                if(!ObjectUtils.isEmpty(inviteCode) && inviteCode != ""){
                    toolsImUserEntity.setUserRole(UserRoleEnum.PHYSICIAN.toString());
                    toolsImUserEntity.setInviteCode(inviteCode);
                } else {
                    toolsImUserEntity.setUserRole(UserRoleEnum.ORDINARY_USER.toString());
                    /**------------------当用户为普通用户时需要在绑定表记录医师和普通用户的关系---------------**/
                    ToolsImBindInfoVo toolsImBindInfoVo = new ToolsImBindInfoVo();
                    toolsImBindInfoVo.setId(UUID.randomUUID().toString());
                    toolsImBindInfoVo.setInviteId(fromAccount);
                    toolsImBindInfoVo.setAcceptId(phone);
                    toolsImBindInfoVo.setBindTime(LocalDateTime.now());
                    toolsImBindInfoVo.setBindStatus(UserStatusEnum.EFFECTIVE.toString());
                    toolsImBindInfoService.insert(toolsImBindInfoVo);
                    log.info("***************添加绑定关系成功**************************");
                }
                toolsImUserEntity.setUserStatus(UserStatusEnum.EFFECTIVE.toString());
                toolsImUserWriteService.insertUserInfo(toolsImUserEntity);
                /*---------------新增扫码邀请记录表数据----------------*/
                ToolsImInviteByCodeVo toolsImInviteByCodeVo = new ToolsImInviteByCodeVo();
                toolsImInviteByCodeVo.setId(UUID.randomUUID().toString());
                toolsImInviteByCodeVo.setInvitePhone(fromAccount);
                toolsImInviteByCodeVo.setInvitedPhone(phone);
                toolsImInviteByCodeVo.setCreateTime(sf.format(new Date()));
                toolsImInviteByCodeVo.setInvitedAvatar(imageUrl);
                toolsImInviteByCodeVo.setInvitedNickName(nickName);
                toolsImInviteByCodeVo.setApplyReason(applyReason);
                toolsImInviteByCodeWriteService.insertInvitedInfo(toolsImInviteByCodeVo);
                /*---------------医师和普通用户之间自动发起好友添加-----------------*/
            }
            return new JSONResult(parse);
        }
    }

    /**
     * 发送短信验证码
     * @return
     */
    @PostMapping("getSmsCode")
    public JSONResult sendSmsCode(String phone){
        Boolean exists = redisUtil.exists(phone);
        if(exists){
            return new JSONResult().errorMsg(phone + "的验证码存在并未过期，请查看手机短信！");
        }
        String code = SmsUtil.getSmsCode();
        boolean isSend = SmsUtil.sendSms(phone, code);
        // 因为有短信轰炸的情况，短信服务对每次发送限制次数，所以有发送不成功的情况，要考虑
        if(isSend){//如果发送成功将验证码存储到redis中
            redisUtil.setex(phone, code, 120);
            return new JSONResult(200,"发送成功",null);
        }else{
            return new JSONResult(406,"发送失败！",null);
        }
    }

    /**
     * 验证账号
     * @param phone
     * @return
     */
    @PostMapping("verifyPhone")
    public JSONResult verifyPhone(String phone){
        if(ObjectUtils.isEmpty(phone)){
            return JSONResult.errorMsg("手机号不能为空！");
        } else {
            String openid = String.valueOf(redisUtil.get("WX_OPENID"));
            ToolsImUserEntity toolsImUserEntity = toolsImUserService.queryUserInfoByPhone(phone,null);
            if(!ObjectUtils.isEmpty(toolsImUserEntity)){
                return JSONResult.ok();
            } else {
                return JSONResult.errorMsg("该手机号未注册！");
            }
        }
    }

    /**
     * 登录
     * @param phone
     * @param code
     * @return
     */
    @PostMapping("login")
    public JSONResult login(String phone,String code){
        String verifyCode = String.valueOf(redisUtil.get(phone));
        String openid = String.valueOf(redisUtil.get("WX_OPENID"));
        if(ObjectUtils.isEmpty(verifyCode)){
            return new JSONResult().errorMsg("您的验证码已经过期，请重新获取验证码!");
        }
        if(verifyCode.equals(code)){
            ToolsImUserEntity toolsImUserEntity = toolsImUserService.queryUserInfoByPhone(phone,null);
            if(ObjectUtils.isEmpty(toolsImUserEntity)){
                return new JSONResult().errorMsg("手机号输入有误！");
            } else {
                return new JSONResult(toolsImUserEntity);
            }
        } else {
            return new JSONResult().errorMsg("验证码输入有误！");
        }
    }

    /**
     * 获取好友信息
     * @return
     */
    @PostMapping("getFriendInfo")
    public JSONResult getFriendInfo(String userId) throws ParseException {
        String endDate = sf.format(new Date());
        Map map = new HashMap();
        map.put("From_Account",userId);
        map.put("StartIndex",0);
        map.put("StandardSequence",0);
        String url = TencentCloudImApiConstant.baseUrl + TencentCloudImApiConstant.RelationManage.FRIEND_GET;
        StringBuilder str = new StringBuilder();
        String userSign = TLSSigAPIv2.genUserSig("administrator",sf.parse(endDate).getTime()/1000);
        str.append(url).append("?sdkappid=").append(TengXunImContstant.SDKAppID)
                .append("&identifier=administrator")
                .append("&usersig=")
                .append(userSign)
                .append("&random=99999999&contenttype=json");
        String s = HttpUtil.sendPost(str.toString(), map);
        JSONObject parse = (JSONObject)JSONObject.parse(s);
        if("FAIL".equals(parse.get("ActionStatus"))){
            return new JSONResult(578,"获取好友列表失败！",null);
        }
        return new JSONResult(parse);
    }

    /**
     * 获取用户信息
     * @param phone 用户id
     * @return
     */
    @PostMapping("getUserInfo")
    public JSONResult  getUserInfo(String phone,String operator){
        ToolsImUserEntity toolsImUserEntity = toolsImUserService.queryUserByPhone(phone, operator);
        if(ObjectUtils.isEmpty(toolsImUserEntity)){
            return JSONResult.errorMsg("您传入的id无效");
        }
        return new JSONResult(toolsImUserEntity);
    }

    /**
     * 记录单聊会话信息
     * @param record
     */
    @PostMapping("insertConversation")
    public void insertConversation(ToolsImConversationVo record){
        conversationService.insertConversation(record);
    }

    /**
     * 更新会话状态
     * @param record
     */
    @PostMapping("updateConversation")
    public void updateConversation(ToolsImConversationVo record) {
        conversationService.updateConversation(record);
    }

    /**
     * 更新会话状态为失效
     * @param record
     */
    @PostMapping("delConversation")
    public void delConversation(ToolsImConversationVo record) {
        conversationService.delConversation(record);
    }

    /**
     * 记录群组会话数据
     * @param toolsImGroupVo
     */
    @PostMapping("insertGroup")
    public void insertGroup(ToolsImGroupVo toolsImGroupVo){
        groupWriteService.insertGroup(toolsImGroupVo);
    }

    /**
     * 更新群组会话状态
     * @param toolsImGroupVo
     */
    @PostMapping("updateGroupInfo")
    public void updateGroupInfo(ToolsImGroupVo toolsImGroupVo){
        groupWriteService.updateGroup(toolsImGroupVo);
    }

    /**
     * 更新群组会话状态为失效
     * @param toolsImGroupVo
     */
    @PostMapping("delGroupInfo")
    public void delGroupInfo(ToolsImGroupVo toolsImGroupVo){
        groupWriteService.delGroup(toolsImGroupVo);
    }


    @PostMapping("sendGroupMsg")
    public JSONResult sendGroupMsg(@RequestBody ParamVo vo) throws ParseException {
        String endDate = sf.format(new Date());
        //List<MsgBodyVo> list = new ArrayList<>();
        //MsgBodyVo msgBodyVo = new MsgBodyVo();
        //msgBodyVo.setMsgType("TIMTextElem");
        //JSONObject jsonObject = new JSONObject();
        //jsonObject.put("Text", "hi, beauty");
        //msgBodyVo.setMsgContent(JSON.parse(jsonObject.toJSONString()));
        //list.add(msgBodyVo);
        Map map = new HashMap();
        map.put("SyncOtherMachine",1);
        map.put("To_Account",vo.getToAccountList());
        map.put("MsgSeq",getSeq());
        map.put("MsgRandom",getSeq());
        map.put("MsgBody",vo.getMsgBodyVoList());
        map.put("CloudCustomData",sf.format(new Date()));
        String url = TencentCloudImApiConstant.baseUrl + TencentCloudImApiConstant.SingleChatManage.BATCH_SEND_MSG;
        StringBuilder str = new StringBuilder();
        String userSign = TLSSigAPIv2.genUserSig("administrator",sf.parse(endDate).getTime()/1000);
        str.append(url).append("?sdkappid=").append(TengXunImContstant.SDKAppID)
                .append("&identifier=administrator")
                .append("&usersig=")
                .append(userSign)
                .append("&random=99999999&contenttype=json");
        String s = HttpUtil.sendPost(str.toString(), map);
        JSONObject parse = (JSONObject)JSONObject.parse(s);
        return JSONResult.ok();
    }

    private long getSeq(){
        Random random = new Random();
        int signedNumber = random.nextInt();
        long unsignedNumber = signedNumber & 0xffffffffL;
        return unsignedNumber;
    }
    private void addFriend(String fromAccount,String toAccount) throws ParseException {
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
