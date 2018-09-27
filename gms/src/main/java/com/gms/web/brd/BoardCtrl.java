package com.gms.web.brd;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.cmm.Temp;
import com.gms.web.cmm.Util;
import com.gms.web.mbr.Member;
import com.gms.web.mbr.MemberMapper;
import com.gms.web.page.Pagination;

@RestController
public class BoardCtrl {
	static final Logger logger = LoggerFactory.getLogger(BoardCtrl.class);
	@Autowired Member mbr;
	@Autowired MemberMapper mbrMap;
	@Autowired Temp temp;
	@Autowired BoardMapper brdMap;
	@Autowired Pagination page;
	@RequestMapping("/boards/{pageNo}")//RESTful 방식
	public @ResponseBody List<Board> list(@PathVariable Integer pageNo) {
		logger.info("---list() :: {}---","ENTER");
		logger.info("---pageNo는  :: {}---",pageNo);
		page.carryOut(pageNo);
		
		List<Board> ls = brdMap.listAll(page);
		Util.Log.accept("게시글 리스트 :"+ls);
		return ls;
	}
	
	
}
