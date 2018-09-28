package com.gms.web.brd;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
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
	@Autowired Map<String, Object> map;
	@Autowired Pagination page;
	@RequestMapping("/boards/{pageNo}")//RESTful 방식
	public @ResponseBody Map<String, Object> list(@PathVariable Integer pageNo) {
		logger.info("---list() :: {}---","ENTER");
		logger.info("---pageNo는  :: {}---",pageNo);
		map.clear();
		map.put("pageNo", pageNo);
		map.put("countRow", brdMap.countAll());
		//rowCount, blockSize, blockNum, pageNum, pageCount, preBlock, nextBlock, beginPage, endPage,
		//beginRow, endRow, brdCount; 
		page.carryOut(map);
		Util.Log.accept("countAll() :"+brdMap.countAll());
		Util.Log.accept("rowCount :"+page.getRowCount());
		Util.Log.accept("blockNum :"+page.getBlockNum());
		Util.Log.accept("현재 페이지 pageNum :"+page.getPageNum());
		Util.Log.accept("pageCount :"+page.getPageCount());
		Util.Log.accept("preBlock :"+page.getPreBlock());
		Util.Log.accept("nextBlock :"+page.getNextBlock());
		Util.Log.accept("beginPage :"+page.getBeginPage());
		Util.Log.accept("endPage :"+page.getEndPage());
		Util.Log.accept("beginRow :"+page.getBeginRow());
		Util.Log.accept("endRow :"+page.getEndRow());
		Util.Log.accept("brdCount :"+page.getBrdCount());
		
		List<Board> list = brdMap.listAll(page);
		Util.Log.accept("게시글 리스트 :"+list);
		Util.Log.accept(" pageNum :"+page.getPageNum());
		map.clear();
		map.put("list", list);
		map.put("page", page);
		//"page"로 Pagination.java 담김
		return map;
	}
	//=============myList========================
	@RequestMapping("/boards/{id}/{pageNo}")
	public @ResponseBody Map<String, Object> myList(@PathVariable Integer pageNo) {
		logger.info("---list() :: {}---","ENTER");
		logger.info("---pageNo는  :: {}---",pageNo);
		map.clear();
		map.put("pageNo", pageNo);
		map.put("countRow", brdMap.countByUser());
		
		page.carryOut(map);
		Util.Log.accept("countByUser() :"+brdMap.countByUser());
		Util.Log.accept("rowCount :"+page.getRowCount());
		Util.Log.accept("blockNum :"+page.getBlockNum());
		Util.Log.accept("현재 페이지 pageNum :"+page.getPageNum());
		Util.Log.accept("pageCount :"+page.getPageCount());
		Util.Log.accept("preBlock :"+page.getPreBlock());
		Util.Log.accept("nextBlock :"+page.getNextBlock());
		Util.Log.accept("beginPage :"+page.getBeginPage());
		Util.Log.accept("endPage :"+page.getEndPage());
		Util.Log.accept("beginRow :"+page.getBeginRow());
		Util.Log.accept("endRow :"+page.getEndRow());
		Util.Log.accept("brdCount :"+page.getBrdCount());
		
		
		List<Board> list = brdMap.listByUser(page);
		Util.Log.accept("게시글 리스트 :"+list);
		Util.Log.accept(" pageNum :"+page.getPageNum());
		map.clear();
		map.put("list", list);
		map.put("page", page);
		//"page"로 Pagination.java 담김
		return map;
	}
	
}
