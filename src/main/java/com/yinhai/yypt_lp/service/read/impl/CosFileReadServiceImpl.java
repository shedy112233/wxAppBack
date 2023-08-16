package com.yinhai.yypt_lp.service.read.impl;

import com.qcloud.cos.COSClient;
import com.yinhai.yypt_lp.dto.ResponseDto;
import com.yinhai.yypt_lp.service.read.CosFileReadService;
import com.yinhai.yypt_lp.utils.CosUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;

@Service
public class CosFileReadServiceImpl implements CosFileReadService {
    @Resource
    private COSClient cosClient;

    @Override
    public ResponseDto upload(MultipartFile file) {
        return CosUtil.uploadFile(file,cosClient);
    }

    @Override
    public ResponseDto deleteFile(String fileName) {
        return CosUtil.deleteFile(fileName,cosClient);
    }

    @Override
    public ResponseDto downLoadFile(String path, String fileName) {
        return CosUtil.downLoadFile(path,fileName,cosClient);
    }
}
