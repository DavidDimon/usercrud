package br.com.dimon.usercrud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = {"br.com.dimon.usercrud.model"})
@EnableJpaRepositories(basePackages = {"br.com.dimon.usercrud.repository"})
@ComponentScan(basePackages = {"br.com.dimon.usercrud.controller"})
public class UserCrudApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserCrudApplication.class, args);
	}
}
