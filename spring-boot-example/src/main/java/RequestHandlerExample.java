import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;

@RestController
@EnableAutoConfiguration
public class RequestHandlerExample {
	@RequestMapping("/")
	String indexPage(){
		return "Welcome, this is Request Handler";
	}
	
	public static void main(String args[]){
		SpringApplication.run(RequestHandlerExample.class, args);
	}
}
