package com.gms.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import com.gms.web.domain.MemberDTO;
import com.gms.web.service.MemberService;

@Controller
@RequestMapping("/member")
@SessionAttributes("user")
/* session은 공유 공간!
 * jsp화면의 user도 세션을 가져다 쓴 것 
 * @을 붙여야 spring의 mvc가 객체로 인식하기 때문에 MemberDTO member 앞에 붙여야함
 * 1. 로그인하면서 addAttribute한 값이 session 공간에 저장된채로 유지된다.
*/
public class MemberController {
	static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	
	@Autowired MemberService memberService;
	
	@RequestMapping(value="/add",method=RequestMethod.POST)
	public String add(@ModelAttribute("member") MemberDTO member) {
		logger.info("---add() :: {}---","ENTER");
		logger.info("---add() :member: {}---",member);
		memberService.add(member);
		return "join_success";
	}
	
	@RequestMapping("/login")
	public String login(Model model, @ModelAttribute MemberDTO member) {
		/*//@ModelAttribute MemberDTO member은 receiver.cmd 와 같다. request의 모든값 담겨있음
		//@ModelAttribute는 커맨드 패턴의 carrier */		
		logger.info("---login() :: {}---", "ENTER");
		String path ="";
		if(memberService.login(member)) { //true
			model.addAttribute("user",memberService.retrieve(member));
			path ="session:member/retrieve.tiles";
		}else{
			path ="public:member/login.tiles";
		}
		logger.info("---login() :model: {}---", model);
		//request.getSession.setAttribute() 와 같다
		//request.getSession = model
		return path;
	}
	
	@RequestMapping("/retrieve")
	public void retrieve(Model model, @ModelAttribute MemberDTO member) {
		logger.info("---retrieve() :: {}---", "ENTER");
		model.addAttribute("user",memberService.retrieve(member));
	}
	
	@RequestMapping("/modify")
		public String modify(@ModelAttribute("user") MemberDTO user
				,@ModelAttribute("member") MemberDTO member) {
		/* @ModelAttribute("user") MemberDTO s 에는 로그인할때 받은 MemberDTO의 property들이 담겨있다
		 * @ModelAttribute("member") MemberDTO member 에는 modify메소드 부르기 바로전에 수행했던 정보수정페이지에서 입력한 값이 담겨있다
		*/
		logger.info("---modify() :: {}---", "ENTER");
		memberService.modify(user);
		return "redirect:/";
		
	}

	
	@RequestMapping("/list")
	public void list() {}
	@RequestMapping("/search")
	public void search() {
		
	}
	
	@RequestMapping("/count")
	public void count() {}
	
	@RequestMapping("/remove")
	public String remove(@ModelAttribute("user") MemberDTO user, SessionStatus sessionStatus) {
		logger.info("---remove() :: {}---", "ENTER");
		memberService.remove(user);
		sessionStatus.setComplete();
		return "redirect:/";
	}
	
	@RequestMapping("/logout")
	public String logout() {
		logger.info("---logout() :: {}---","ENTER");
		return "redirect:/";
	}
	@RequestMapping("/fileupload")
	public void fileupload() {}
	
}
