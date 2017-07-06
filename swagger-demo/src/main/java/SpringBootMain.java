import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * Created by 435694 on 7/4/2017.
        */
@SpringBootApplication(
    scanBasePackages={"com.swagger.config", "com.swagger.controller", "com.swagger.model"}
)
@EnableSwagger2
public class SpringBootMain {
    public static void main(String[] args) {
        SpringApplication.run(SpringBootMain.class);
    }
}
