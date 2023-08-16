package com.yinhai.yypt_lp.service.write;

import com.yinhai.yypt_lp.vo.ToolsImGroupVo;

public interface ToolsImGroupWriteService {
    /**
     * 记录新建群组数据
     * @param toolsImGroupVo
     */
    void insertGroup(ToolsImGroupVo toolsImGroupVo);
    /**
     * 更新群组数据
     * @param toolsImGroupVo
     */
    void updateGroup(ToolsImGroupVo toolsImGroupVo);

    /**
     * 更新群组状态为失效
     * @param toolsImGroupVo
     */
    void delGroup(ToolsImGroupVo toolsImGroupVo);
}
