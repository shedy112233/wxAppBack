package com.yinhai.yypt_lp.service.read;

import com.yinhai.yypt_lp.utils.JSONResult;

import java.io.IOException;

public interface MessageService {

    /**
     * 处理单聊消息
     * @throws Exception
     */
    String handlePersonMessage(String Operator_Account,String Peer_Account,String path,String fileName) throws Exception;

    /**
     * 处理群聊消息
     * @throws Exception
     */
    void handleGroupMessage(String groupId,String path) throws Exception;

    /**
     * 获取单聊信息
     * @param userId
     * @param time
     * @return
     */
    JSONResult getPersonMsg(String userId, String toUserId, Integer time) throws IOException;

    /**
     * 获取群聊消息
     * @param groupId
     * @param time
     * @return
     */
    JSONResult getGroupMsg(String groupId,Integer time) throws IOException;
}
