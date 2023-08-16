package com.yinhai.yypt_lp.utils;

import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 文件读写工具类
 */
@Slf4j
public class FileUtil {

    /**
     * 根据文件路径读取文件
     * @param filePath 文件路径
     * @return Map<Integer, String>
     */
    public static Map<Integer, String> readTxtFile(String filePath) {
        Map<Integer, String> textMap = new HashMap<Integer, String>(10000);
        try (FileInputStream fileInputStream = new FileInputStream(filePath);
             InputStreamReader inputStreamReader = new InputStreamReader(fileInputStream, "UTF-8");
             BufferedReader bufferedReader = new BufferedReader(inputStreamReader);) {
            String line = null;
            Integer i = 0;
            while ((line = bufferedReader.readLine()) != null) {
                i = i + 1;
                textMap.put(i, line);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return textMap;
    }

    /**
     * 写入文件
     *
     * @param filePath 文件路径
     * @param textList 文件行内容
     * @throws IOException 异常信息
     */
    public static void writeTxtFile(String filePath, List<String> textList) throws IOException {
        File file = new File(filePath);
        file.createNewFile();
        try (FileWriter fileWriter = new FileWriter(file);
             BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);) {
            for (String text : textList) {
                bufferedWriter.write(text);
                bufferedWriter.newLine();
            }
            bufferedWriter.flush();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    /**
     * 读取json文件数据
     * @param jsonPath json文件路径
     * @return 字符串
     */
    public static String readJson(String jsonPath) {
        File jsonFile = new File(jsonPath);
        try {
            FileReader fileReader = new FileReader(jsonFile);
            BufferedReader reader = new BufferedReader(fileReader);
            StringBuilder sb = new StringBuilder();
            while (true) {
                int ch = reader.read();
                if (ch != -1) {
                    sb.append((char) ch);
                } else {
                    break;
                }
            }
            fileReader.close();
            reader.close();
            return sb.toString();
        } catch (IOException e) {
            return "";
        }
    }

    /**
     * 往json文件中写入数据
     * @param jsonPath json文件路径
     * @param jsonObject Map类型数据
     * @param flag 写入状态，true表示在文件中追加数据，false表示覆盖文件数据
     * @return 写入文件状态  成功或失败
     */
    public static String writeJson(String jsonPath, JSONObject jsonObject, boolean flag) {
        // Map数据转化为Json，再转换为String
        String data = jsonObject.toString() + ",";
        File jsonFile = new File(jsonPath);
        try {
            // 文件不存在就创建文件
            if (!jsonFile.exists()) {
                jsonFile.createNewFile();
            }
            FileWriter fileWriter = new FileWriter(jsonFile.getAbsoluteFile(), flag);
            BufferedWriter bw = new BufferedWriter(fileWriter);
            bw.write(data);
            bw.close();
            return "success";
        } catch (IOException e) {
            return "error";
        }
    }

    public static File getFileInByUrl(String fileUrl) {
        ByteArrayOutputStream outStream = new ByteArrayOutputStream();
        BufferedOutputStream stream = null;
        InputStream inputStream = null;
        FileOutputStream fileOutputStream = null;
        File file = null;
        HttpURLConnection conn = null;
        try {
            String imgName = fileUrl.substring(fileUrl.lastIndexOf("/") + 1);
            URL imageUrl = new URL(fileUrl);
            conn = (HttpURLConnection) imageUrl.openConnection();
//			conn.setRequestProperty("User-Agent", "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; DigExt)");
            //设置请求头
            conn.setRequestProperty("Charsert", "UTF-8");
            conn.setRequestProperty("Content-Type", "application/json; charset=UTF-8");//设置参数类型是json格式
            conn.setRequestProperty("Connection", "Keep-Alive");
            inputStream = conn.getInputStream();
            byte[] buffer = new byte[1024];
            int len = 0;
            while ((len = inputStream.read(buffer)) != -1) {
                outStream.write(buffer, 0, len);
            }
            file = new File(imgName);
            fileOutputStream = new FileOutputStream(file);
            stream = new BufferedOutputStream(fileOutputStream);
            stream.write(outStream.toByteArray());
        } catch (Exception e) {
            log.error("获取文件，Error", e);
        } finally {
            if (stream != null) {
                try {
                    stream.close();
                } catch (IOException ignored) {
                }
            }
            if (fileOutputStream != null) {
                try {
                    fileOutputStream.close();
                } catch (IOException ignored) {
                }
            }
            try {
                outStream.close();
            } catch (IOException ignored) {
            }

            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (IOException ignored) {
                }
            }
            if (conn != null) {
                conn.disconnect();
            }
        }
        return file;
    }

    public static InputStream getInputByUrl(String fileUrl) {
        InputStream inputStream = null;
        HttpURLConnection conn = null;
        try {
            URL imageUrl = new URL(fileUrl);
            conn = (HttpURLConnection) imageUrl.openConnection();
            conn.setRequestProperty("Charsert", "UTF-8");
            conn.setRequestProperty("Content-Type", "application/json; charset=UTF-8");//设置参数类型是json格式
            conn.setRequestProperty("Connection", "Keep-Alive");
            inputStream = conn.getInputStream();
        } catch (Exception e) {
            log.error("获取文件，Error", e);
        }finally {
            if (conn != null) {
                conn.disconnect();
            }
        }
        return inputStream;
    }

    public static File getFileByUrl(String fileUrl) {
        ByteArrayOutputStream outStream = new ByteArrayOutputStream();
        BufferedOutputStream stream = null;
        InputStream inputStream = null;
        FileOutputStream fileOutputStream = null;
        File file = null;
        HttpURLConnection conn = null;
        try {
            String[] split = fileUrl.split("\\/");
            String str = split[6];
            String[] strs = str.split("\\?");
            String imgName = strs[0];
            URL imageUrl = new URL(fileUrl);
            conn = (HttpURLConnection) imageUrl.openConnection();
//			conn.setRequestProperty("User-Agent", "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; DigExt)");
            //设置请求头
            conn.setRequestProperty("Charsert", "UTF-8");
            conn.setRequestProperty("Content-Type", "application/json; charset=UTF-8");//设置参数类型是json格式
            conn.setRequestProperty("Connection", "Keep-Alive");
            inputStream = conn.getInputStream();
            byte[] buffer = new byte[1024];
            int len = 0;
            while ((len = inputStream.read(buffer)) != -1) {
                outStream.write(buffer, 0, len);
            }
            file = new File(imgName);
            fileOutputStream = new FileOutputStream(file);
            stream = new BufferedOutputStream(fileOutputStream);
            stream.write(outStream.toByteArray());
        } catch (Exception e) {
            log.error("获取文件，Error", e);
        } finally {
            if (stream != null) {
                try {
                    stream.close();
                } catch (IOException ignored) {
                }
            }
            if (fileOutputStream != null) {
                try {
                    fileOutputStream.close();
                } catch (IOException ignored) {
                }
            }
            try {
                outStream.close();
            } catch (IOException ignored) {
            }

            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (IOException ignored) {
                }
            }
            if (conn != null) {
                conn.disconnect();
            }
        }
        return file;
    }

    public static String getFileType(String fileUrl) {
        String fileType = fileUrl.substring(fileUrl.lastIndexOf("."));
        // 如果从url获取的文件类型长度大于7个，说明不是正常文件类型
        if (fileType.length() > 7) {
            if (fileType.contains("jpg")) {
                fileType = ".jpg";
            } else if (fileType.contains("PNG")) {
                fileType = ".PNG";
            } else {
                fileType = ".PNG";
            }
        }
        return fileType;
    }


    public static void deleteAllFile(File rootFile) {
        if(rootFile!=null){
            if(rootFile.isFile()){
                rootFile.delete();
            }else{
                File[] files = rootFile.listFiles();// 将非空文件夹转换成File数组
                for (File file : files) {//使用foreach语句遍历文件数组
                    deleteAllFile(file);// 删除指定文件夹下的所有非空文件夹（包括file）
                }
                rootFile.delete();// 删除指定文件夹下的所有空文件夹
            }
        }
    }

    public static String getFileNameByUrl(String fileUrl) {

        return fileUrl.substring(fileUrl.lastIndexOf("/")+1);
    }
}
