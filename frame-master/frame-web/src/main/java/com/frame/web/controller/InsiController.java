package com.frame.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping("/wode")
public class InsiController {

	@RequestMapping("/hello")
	@ResponseBody
	public String hello(@RequestParam("code") String code) {
		System.out.print(code);
		return code;
	}
}
