package com.frame.web.controller;

import javax.xml.ws.Endpoint;

class Application {

	public static void main(String[] args) {
		//通过Endpoint发布服务。
		Endpoint.publish("http://localhost:9999/service/sayHello", new HelloService());
		System.out.println("发布服务成功");
	}
}