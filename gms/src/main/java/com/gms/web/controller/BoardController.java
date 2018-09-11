package com.gms.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.gms.web.domain.ArticleDTO;
import com.gms.web.domain.MemberDTO;
import com.gms.web.service.MemberService;

@Controller
@RequestMapping("/board")
public class BoardController {
	static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired ArticleDTO article;
	@Autowired MemberService memberService;
	
	@RequestMapping(value="/add",method=RequestMethod.POST)
	public String add(Model model,@ModelAttribute("member") MemberDTO member) {
		logger.info("---add() :: {}---","ENTER");
		logger.info("---add() :member: {}---",member);
		memberService.add(member);
		return "join_success";
	}
	@RequestMapping("/list")
	public void list() {}
	@RequestMapping("/search")
	public void search() {
		
	}
	@RequestMapping("/retrieve")
	public void retrieve(Model model, @ModelAttribute MemberDTO member) {
		logger.info("---retrieve() :: {}---", "ENTER");
		model.addAttribute("user",memberService.retrieve(member));
	}
	@RequestMapping("/count")
	public void count() {}
	@RequestMapping("/modify")
	public void modify(Model model, @ModelAttribute MemberDTO member) {
		logger.info("---modify() :: {}---", "ENTER");
		memberService.modify(member);
	}
	@RequestMapping("/remove")
	public void remove() {}
	@RequestMapping("/login")
	public String login(Model model, @ModelAttribute MemberDTO member) {
		//@ModelAttribute MemberDTO member은 receiver.cmd 와 같다. request의 모든값 담겨있음
		//@ModelAttribute는 커맨드 패턴의 carrier
		logger.info("---login() :: {}---", "ENTER");
		if(memberService.login(member)) { //true
			member = memberService.retrieve(member);  
			model.addAttribute("user",member);
		}
		
		logger.info("---login() :model: {}---", model);
		
		//request.getSession.setAttribute() 와 같다
		//request.getSession = model
		return "session:member/retrieve.tiles";
	}
	@RequestMapping("/logout")
	public String logout() {
		logger.info("---logout() :: {}---","ENTER");
		return "redirect:/";
	}
	@RequestMapping("/fileupload")
	public void fileupload() {}
	
}
