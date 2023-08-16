package com.yinhai.yypt_lp.rest;


import com.yinhai.ta404.core.restservice.BaseRestService;
import com.yinhai.ta404.core.restservice.annotation.RestService;
import com.yinhai.yypt_lp.enummeration.CommonEnum;
import com.yinhai.yypt_lp.service.read.FriendGroupTagReadService;
import com.yinhai.yypt_lp.service.read.GroupTagUserReadService;
import com.yinhai.yypt_lp.service.write.FriendGroupTagWriteService;
import com.yinhai.yypt_lp.service.write.GroupTagUserWriteService;
import com.yinhai.yypt_lp.utils.JSONResult;
import com.yinhai.yypt_lp.vo.ToolsImFriendGroupTagVo;
import com.yinhai.yypt_lp.vo.ToolsImGroupTagUserVo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@RestService("tag")
@Slf4j
public class GroupTagRestService extends BaseRestService {

    @Autowired
    private GroupTagUserReadService groupTagUserService;

    @Autowired
    private GroupTagUserWriteService groupTagUserWriteService;

    @Autowired
    private FriendGroupTagReadService friendGroupTagService;

    @Autowired
    private FriendGroupTagWriteService friendGroupTagWriteService;

    /**
     * 查询用户创建的分组数据
     * @param phone
     * @return
     */
    @PostMapping("getGroupTags")
    public JSONResult getGroupTags(String phone){
        ToolsImFriendGroupTagVo toolsImFriendGroupTagVo = new ToolsImFriendGroupTagVo();
        toolsImFriendGroupTagVo.setOperateUser(phone);
        List<ToolsImFriendGroupTagVo> tags = friendGroupTagService.getTags(toolsImFriendGroupTagVo);
        for (ToolsImFriendGroupTagVo vo:tags) {
            ToolsImGroupTagUserVo tagUserVo = new ToolsImGroupTagUserVo();
            tagUserVo.setTagId(vo.getTagId());
            List<ToolsImGroupTagUserVo> toolsImGroupTagUserVos = groupTagUserService.queryInfo(tagUserVo);
            vo.setToolsImGroupTagUserVos(toolsImGroupTagUserVos);
        }
        return JSONResult.ok(tags);
    }

    /**
     * 新增分组数据
     * @param vo
     * @return
     */
    @PostMapping("insertGroupTags")
    public JSONResult insertGroupTags(@RequestBody ToolsImFriendGroupTagVo vo) throws Exception {
        if(ObjectUtils.isEmpty(vo.getTagName())){
            return JSONResult.errorMsg("标签不能为空！");
        }
        if(ObjectUtils.isEmpty(vo.getOperateUser())){
            return JSONResult.errorMsg("操作人不能为空！");
        }
        if(vo.getToolsImGroupTagUserVos().size() == 0){
            return JSONResult.errorMsg("分组用户不能为空！");
        }
        SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        List<ToolsImFriendGroupTagVo> tags = friendGroupTagService.getTags(vo);
        if(tags.size() == 0) {
            vo.setTagId(UUID.randomUUID().toString());
            vo.setCreateTime(sf.format(new Date()));
            vo.setTagStatus(CommonEnum.EFFECTIVE.toString());
            friendGroupTagWriteService.insertGroupTag(vo);
        }
        List<ToolsImGroupTagUserVo> groupTagUserVos = vo.getToolsImGroupTagUserVos();
        for (ToolsImGroupTagUserVo groupTagUserVo:groupTagUserVos) {
            List<ToolsImGroupTagUserVo> toolsImGroupTagUserVos = groupTagUserService.queryInfo(groupTagUserVo);
            if(toolsImGroupTagUserVos.size() == 0 && !ObjectUtils.isEmpty(vo.getTagId())) {
                groupTagUserVo.setTagId(vo.getTagId());
                groupTagUserVo.setId(UUID.randomUUID().toString());
                groupTagUserVo.setCreateTime(sf.format(new Date()));
                groupTagUserWriteService.insertInfo(groupTagUserVo);
            }
        }
        return JSONResult.ok();
    }

    @PostMapping("deleteInfo")
    public JSONResult deleteInfo(String selectedInfo){
        String[] split = selectedInfo.split("\\,");
        for (String tagId:split) {
            ToolsImFriendGroupTagVo vo = new ToolsImFriendGroupTagVo();
            ToolsImGroupTagUserVo userVo = new ToolsImGroupTagUserVo();
            vo.setTagId(tagId);
            userVo.setTagId(tagId);
            friendGroupTagWriteService.delGroupTag(vo);
            groupTagUserWriteService.delInfo(userVo);
        }
        return new JSONResult();
    }
}
