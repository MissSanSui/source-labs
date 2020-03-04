package com.frame.web.controller;


import javax.jws.WebService;
//定义服务
@WebService
public class HelloService {
	public void sayHello(String name){
		System.out.println(name + "hello !");
	}
}