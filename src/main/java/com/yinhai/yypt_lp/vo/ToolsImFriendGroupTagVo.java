package com.yinhai.yypt_lp.vo;

import lombok.Data;

import java.util.List;

@Data
public class ToolsImFriendGroupTagVo {
    /**
     * 分组id
     */
    private String tagId;

    /**
     * 分组名称
     */
    private String tagName;

    /**
     * 分组状态
     */
    private String tagStatus;

    /**
     * 操作人
     */
    private String operateUser;

    /**
     * 创建时间
     */
    private String createTime;

    List<ToolsImGroupTagUserVo> toolsImGroupTagUserVos;
}
