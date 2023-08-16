package com.yinhai.yypt_lp.entity;

import java.util.Date;
import java.io.Serializable;

/**
* 用户信息日志表(ToolsImUserC)实体类
*
* @author default
* @since 2023-08-01 15:50:27
*/
public class ToolsImUserC implements Serializable {
    private static final long serialVersionUID = -28545943358373395L;
            //id
    private String id;
            //事件类型01新增02修改03删除
    private String evtType;
            //创建日期
    private Date aae036;
            //创建人
    private String aae011;
            //手机号
    private String phone;
            //openid
    private String openId;
            //用户名头像地址
    private String userImage;
            //昵称
    private String nickName;
            //用户状态
    private String userStatus;
            //用户角色
    private String userRole;
            //邀请码
    private String inviteCode;
            
    private String bz;
    
                
public String getId() {
return id;
}

public void setId(String id) {
this.id = id;
}
                
public String getEvtType() {
return evtType;
}

public void setEvtType(String evtType) {
this.evtType = evtType;
}
                
public Date getAae036() {
return aae036;
}

public void setAae036(Date aae036) {
this.aae036 = aae036;
}
                
public String getAae011() {
return aae011;
}

public void setAae011(String aae011) {
this.aae011 = aae011;
}
                
public String getPhone() {
return phone;
}

public void setPhone(String phone) {
this.phone = phone;
}
                
public String getOpenId() {
return openId;
}

public void setOpenId(String openId) {
this.openId = openId;
}
                
public String getUserImage() {
return userImage;
}

public void setUserImage(String userImage) {
this.userImage = userImage;
}
                
public String getNickName() {
return nickName;
}

public void setNickName(String nickName) {
this.nickName = nickName;
}
                
public String getUserStatus() {
return userStatus;
}

public void setUserStatus(String userStatus) {
this.userStatus = userStatus;
}
                
public String getUserRole() {
return userRole;
}

public void setUserRole(String userRole) {
this.userRole = userRole;
}
                
public String getInviteCode() {
return inviteCode;
}

public void setInviteCode(String inviteCode) {
this.inviteCode = inviteCode;
}
                
public String getBz() {
return bz;
}

public void setBz(String bz) {
this.bz = bz;
}
    
}