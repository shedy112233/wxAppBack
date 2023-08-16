package com.yinhai.yypt_lp.utils;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.binary.Base64;

import javax.crypto.*;
import javax.crypto.spec.DESKeySpec;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.security.Key;
import java.security.SecureRandom;


@Slf4j
public class FileDESUtil {

    public static Key key;

    /**
     * 根据参数生成KEY
     */
    public static void getKey(String strKey) {
        try {
            KeyGenerator _generator = KeyGenerator.getInstance("DES");
            _generator.init(new SecureRandom(strKey.getBytes()));
            key = _generator.generateKey();
        } catch (Exception e) {
            throw new RuntimeException("Error initializing SqlMap class. Cause: " + e);
        }
    }

    /**
     * 文件流加密
     * @param file
     * @return
     * @throws Exception
     */
    public static InputStream encrypt(InputStream file) throws Exception {
        Cipher cipher = Cipher.getInstance("DES");
        cipher.init(Cipher.ENCRYPT_MODE, key);
        CipherInputStream cis = new CipherInputStream(file, cipher);
        return cis;
    }

    /**
     * 文件流解密
     * @param file
     * @return
     * @throws Exception
     */
    public static InputStream decrypt(InputStream file) throws Exception {
        Cipher cipher = Cipher.getInstance("DES");
        cipher.init(Cipher.DECRYPT_MODE, key);
        CipherInputStream cis = new CipherInputStream(file, cipher);
        return cis;
    }

    /**
     * 文件加密
     * @param file
     * @param destFile
     * @throws Exception
     */
    public static void encrypt(String file, String destFile) throws Exception {
        Cipher cipher = Cipher.getInstance("DES");
        System.out.println(key);
        cipher.init(Cipher.ENCRYPT_MODE, key);
        InputStream is = new FileInputStream(file);
        OutputStream out = new FileOutputStream(destFile);
        CipherInputStream cis = new CipherInputStream(is, cipher);
        byte[] buffer = new byte[1024];
        int r;
        while ((r = cis.read(buffer)) > 0) {
            out.write(buffer, 0, r);
        }
        cis.close();
        is.close();
        out.close();
    }

    /**
     * 文件解密
     * @param file
     * @param dest
     * @throws Exception
     */
    public static void decrypt(String file, String dest) throws Exception {
        Cipher cipher = Cipher.getInstance("DES");
        cipher.init(Cipher.DECRYPT_MODE, key);
        InputStream is = new FileInputStream(file);
        OutputStream out = new FileOutputStream(dest);
        CipherOutputStream cos = new CipherOutputStream(out, cipher);
        byte[] buffer = new byte[1024];
        int r;
        while ((r = is.read(buffer)) >= 0) {
            System.out.println();
            cos.write(buffer, 0, r);
        }
        cos.close();
        out.close();
        is.close();
    }

    /**
     * 文件解密
     * @param is
     * @param dest
     * @throws Exception
     */
    public static void decrypt2(InputStream is, String dest) throws Exception {
        Cipher cipher = Cipher.getInstance("DES");
        cipher.init(Cipher.DECRYPT_MODE, key);
        OutputStream out = new FileOutputStream(dest);
        CipherOutputStream cos = new CipherOutputStream(out, cipher);
        byte[] buffer = new byte[1024];
        int r;
        while ((r = is.read(buffer)) >= 0) {
            System.out.println();
            cos.write(buffer, 0, r);
        }
        cos.close();
        out.close();
        is.close();
    }

    /**
     * @return 加密后的字符串的base64格式
     * @Description: 加密
     * @Param sourceStr 原始未加密明文 key 密钥，长度必须大于等于8位
     * @Date: 2021/4/8 13:24
     **/
    public static String encryptDesToBase64(String sourceStr, String key) {
        try {
            if (sourceStr == null || sourceStr.isEmpty()) {
                throw new Exception("原文不能为空！");
            }
            if (key == null || key.isEmpty() || key.length() < 8) {
                throw new Exception("密钥不能为空，且密钥必须大于等于8位！");
            }
            byte[] datasource = sourceStr.getBytes("utf-8");
            SecureRandom random = new SecureRandom();
            DESKeySpec desKey = new DESKeySpec(key.getBytes("utf-8"));

            //创建一个密匙工厂，然后用它把DESKeySpec转换成
            SecretKeyFactory keyFactory = SecretKeyFactory.getInstance("DES");
            SecretKey securekey = keyFactory.generateSecret(desKey);

            //Cipher对象实际完成加密操作
            Cipher cipher = Cipher.getInstance("DES");

            //用密匙初始化Cipher对象,ENCRYPT_MODE用于将 Cipher 初始化为加密模式的常量
            cipher.init(Cipher.ENCRYPT_MODE, securekey, random);

            //现在，获取数据并加密 正式执行加密操作
            //按单部分操作加密或解密数据，或者结束一个多部分操作
            return Base64.encodeBase64String(cipher.doFinal(datasource));

        } catch (Throwable e) {
            log.error("DES 加密异常，详情：" + e.toString());
            e.printStackTrace();
        }
        return null;
    }

    /**
     * @return 解密后的字符串
     * @Description: 解密
     * @Param encodedStrBase64 加密过的密文base64形式（由加密方法返回的）  key 密钥，长度必须大于等于8位
     * @Date: 2021/4/8 13:27
     **/
    public static String decryptString(String encodedStrBase64, String key) throws Exception {
        if (encodedStrBase64 == null || encodedStrBase64.isEmpty()) {
            throw new Exception("密文不能为空！");
        }

        if (key == null || key.isEmpty() || key.length() < 8) {
            throw new Exception("密钥不能为空，且密钥必须大于等于8位！");
        }

        byte[] src = Base64.decodeBase64(encodedStrBase64);

        // DES算法要求有一个可信任的随机数源
        SecureRandom random = new SecureRandom();
        // 创建一个DESKeySpec对象
        DESKeySpec desKey = new DESKeySpec(key.getBytes("utf-8"));
        // 创建一个密匙工厂
        // 返回实现指定转换的 Cipher 对象
        SecretKeyFactory keyFactory = SecretKeyFactory.getInstance("DES");
        // 将DESKeySpec对象转换成SecretKey对象
        SecretKey securekey = keyFactory.generateSecret(desKey);
        // Cipher对象实际完成解密操作
        Cipher cipher = Cipher.getInstance("DES");
        // 用密匙初始化Cipher对象
        cipher.init(Cipher.DECRYPT_MODE, securekey, random);
        // 真正开始解密操作
        return new String(cipher.doFinal(src));
    }

    public static void main(String[] args) throws Exception {
        //FileDESUtil fileDESUtil = new FileDESUtil("*****@123456");//密钥
        //fileDESUtil.encrypt("src/main/java/Application.java", "E:\\fileEncrypt.java"); //加密
        //fileDESUtil.decrypt("E:\\fileEncrypt.java", "E:\\fileDecrypt.java"); //解密
        String key = "*****@123456";
        String SecretId = "AKIDhYzPeiwyqaFsX6YiiWBfzAELDvVv95sU";
        String s = FileDESUtil.encryptDesToBase64(SecretId, key);
        System.out.println("加密后字符串：" + s);
        String decString = FileDESUtil.decryptString(s, key);
        System.out.println("解密后字符串：" + decString);

    }

}