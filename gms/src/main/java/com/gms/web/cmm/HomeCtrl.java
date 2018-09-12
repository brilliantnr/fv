package com.gms.web.cmm;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeCtrl {
	
	static final Logger logger = LoggerFactory.getLogger(HomeCtrl.class);//HomeController.class : java에서 reflection
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Model model, HttpServletRequest request) {
		/*String context= request.getContextPath();
		logger.info("This is home() context 는 {}",context);*/
		model.addAttribute("context",Util.ctx.apply(request));
		Util.Log.accept("aaa => "+Util.ctx.apply(request));
		//session.setAttribute("context", context);
		return "main";
	}
	@RequestMapping("/move/{prefix}/{dir}/{page}")
	public String move(
			@PathVariable String prefix,
			@PathVariable String dir,
			@PathVariable String page) {
		logger.info("move() :: {}.","ENTER");
		String path = prefix+":"+dir+"/"+page+".tiles";
		logger.info("move() ::path는 {}",path);
		return path;
	}
}
