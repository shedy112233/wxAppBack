package com.yinhai.yypt_lp.mapper.write;

import com.yinhai.yypt_lp.entity.ToolsImUserC;
import java.util.List;

/**
* 用户信息日志表(ToolsImUserC)表数据库访问层
*
* @author default
* @since 2023-08-01 15:50:27
*/
public interface ToolsImUserCWriteMapper {
    /**
    * 新增数据
    *
    * @param toolsImUserC 实例对象
    * @return 影响行数
    */
    int insert(ToolsImUserC toolsImUserC);


}
