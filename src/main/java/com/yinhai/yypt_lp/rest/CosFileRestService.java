package com.yinhai.yypt_lp.rest;

import com.yinhai.ta404.core.restservice.BaseRestService;
import com.yinhai.yypt_lp.dto.ResponseDto;
import com.yinhai.yypt_lp.service.read.CosFileReadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("file")
@Validated
public class CosFileRestService  extends BaseRestService {

    @Autowired
    private CosFileReadService cosFileService;

    @PostMapping(value="/fillLoad")
    public ResponseDto addUser(@RequestPart("file") MultipartFile file) {
        return cosFileService.upload(file);
    }

    @PostMapping("deleteFile")
    public ResponseDto deleteFile(@RequestPart("key") String fileName) {
        return cosFileService.deleteFile(fileName);
    }

    @PostMapping("downLoadFile")
    public ResponseDto downLoadFile(@RequestPart("path") String path,@RequestPart("fileName") String fileName){
        return cosFileService.downLoadFile(path,fileName);
    }
}
