package com.app.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class FileUploadController {

    @PostMapping("/upload")
    public String uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            // Save the file to the "uploads" folder within the project's root directory
            String fileName = file.getOriginalFilename();
            String uploadDir = System.getProperty("user.dir") + File.separator + "uploads";
            String filePath = uploadDir + File.separator + fileName;
            File destFile = new File(filePath);

            // Create the directory if it doesn't exist
            if (!destFile.getParentFile().exists()) {
                destFile.getParentFile().mkdirs();
            }

            // Transfer the file to the destination
            file.transferTo(destFile);

            return "File uploaded successfully: " + fileName;
        } catch (IOException e) {
            return "Failed to upload file: " + e.getMessage();
        }
    }
}
