package com.yinhai.yypt_lp.service.write;

import com.yinhai.yypt_lp.vo.ToolsImBindInfoVo;

public interface ToolsImBindInfoWriteService {
    /**
     * 建立绑定关系（医师和用户）
     * @param record
     */
    void insert(ToolsImBindInfoVo record);
}
