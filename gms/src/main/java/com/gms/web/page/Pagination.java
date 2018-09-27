package com.gms.web.page;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.gms.web.brd.BoardMapper;
import com.gms.web.mbr.MemberMapper;

import lombok.Data;
@Data
@Component @Lazy
public class Pagination implements Proxy{
	int memberCount, rowCount, blockSize, blockNum, pageNum, pageCount, preBlock, nextBlock, beginPage, endPage,
	beginRow, endRow, brdCount;
boolean existPrev, existNext;
@Autowired MemberMapper mbrMap;
@Autowired BoardMapper brdMap;

@Override
public void carryOut(Object o) {
this.pageNum = (int) o;
//this.brdCount = brdMap.countPaging();
//this.rowCount = brdMap.countPaging(); // 게시물수
//this.memberCount = mbrMap.count();
//this.rowCount = mbrMap.count(); // 게시물수
this.blockSize = 5; // 1~5, 6~10
//this.pageCount = (int) Math.ceil(rowCount / blockSize); // 총페이지수
//this.beginPage = (int) (Math.floor((pageNum - 1) / blockSize) * blockSize + 1);
//this.blockNum=(int) Math.floor(beginPage / blockSize + 1) ;  //1~5->blockNum:1
//this.endPage = (pageCount > blockNum * blockSize) ? blockNum * blockSize : pageCount;

//this.preBlock = endPage - blockSize;
//this.nextBlock = beginPage + blockSize;		
this.beginRow = (pageNum - 1) * blockSize + 1;
this.endRow = pageNum * blockSize;
//this.existPrev = false;
//this.existNext = false;
   /* if(beginPage>1) {
        existPrev=true;
        if(endPage!=pageCount) {
            existNext=true;
        }
    }else {
        if(endPage!=pageCount) {
            existNext=true;
        }
    }*/
		
	}
}
