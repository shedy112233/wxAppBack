package com.yinhai.yypt_lp.service.read;

import com.yinhai.yypt_lp.dto.ResponseDto;
import org.springframework.web.multipart.MultipartFile;

public interface CosFileReadService {

    ResponseDto upload(MultipartFile file);

    ResponseDto deleteFile(String fileName);

    ResponseDto downLoadFile(String path,String fileName);
}
