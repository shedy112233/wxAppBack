package com.yinhai.yypt_lp.config;

import com.yinhai.yypt_lp.service.read.ParamService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Slf4j
@Order(value = 10)
public class HandleInfoConfig implements CommandLineRunner {

    @Autowired
    private ParamService paramService;

    @Override
    public void run(String... args) throws Exception {
        log.info("------------------正在处理存储redis的数据-----------------------");
        paramService.handleInfo();
        log.info("------------------存储redis的数据处理完毕-----------------------");
    }
}
