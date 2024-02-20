import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "upload")
public class FileUploadConfiguration {
    private String directory;
    private String maxFileSize;

    // Getters and setters
}
