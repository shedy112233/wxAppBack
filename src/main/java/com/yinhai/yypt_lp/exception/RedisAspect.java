package com.yinhai.yypt_lp.exception;


import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;

@Aspect
@Slf4j
public class RedisAspect {
    @Pointcut("execution(* com.yinhai.yypt_lp.utils.*(..))")
    public void pointcut(){
    }
    @Around("pointcut()")
    public Object handleException(ProceedingJoinPoint joinPoint){
        Object result = null;
        try {
            result= joinPoint.proceed();
        } catch (Throwable throwable) {
            log.error("redis may be some wrong");
        }
        return result;
    }

}
