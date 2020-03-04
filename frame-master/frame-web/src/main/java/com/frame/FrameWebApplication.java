package com.frame;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.frame.*")
public class FrameWebApplication {

	public static void main(String[] args) {
		SpringApplication.run(FrameWebApplication.class, args);
	}
}
