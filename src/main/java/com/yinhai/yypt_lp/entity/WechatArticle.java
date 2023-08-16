package com.yinhai.yypt_lp.entity;

import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.io.Serializable;

/**
* 微信文章表(WechatArticle)实体类
*
* @author default
* @since 2023-07-19 13:46:38
*/
public class WechatArticle implements Serializable {
    private static final long serialVersionUID = -47832371628435769L;

    private String id;
    //文章标题
    private String title;
    //文章内容
    private byte[] content;
    //开始时间
    private Date startTime;
    //结束时间
    private Date endTime;
    //展示序号
    private Integer sort;
    //创建日期
    private Date aae036;
    //创建人
    private String aae011;
    //备注
    private String remarks;

    MultipartFile[] file;

    private String fileName;
    private String fileType;
    private String introduction;
    private Date sortTime;
    /**------------新加俩个字段-----------**/
    private String path;
    private String cosKey;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public byte[] getContent() {
        return content;
    }

    public void setContent(byte[] content) {
        this.content = content;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public Integer getSort() {
        return sort;
    }

    public void setSort(Integer sort) {
        this.sort = sort;
    }

    public Date getAae036() {
        return aae036;
    }

    public void setAae036(Date aae036) {
        this.aae036 = aae036;
    }

    public String getAae011() {
        return aae011;
    }

    public void setAae011(String aae011) {
        this.aae011 = aae011;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public MultipartFile[] getFile() {
        return file;
    }

    public void setFile(MultipartFile[] file) {
        this.file = file;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }
    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public Date getSortTime() {
        return sortTime;
    }

    public void setSortTime(Date sortTime) {
        this.sortTime = sortTime;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getCosKey() {
        return cosKey;
    }

    public void setCosKey(String cosKey) {
        this.cosKey = cosKey;
    }
}
