package com.gms.web.brd;

import java.util.List;
import org.springframework.stereotype.Repository;
import com.gms.web.brd.Board;
import com.gms.web.cmm.Criteria;
import com.gms.web.cmm.SearchCriteria;
import com.gms.web.page.Pagination;

@Repository
public interface BoardMapper {

  public void create(Board vo) throws Exception;
  public Board read(Integer bno) throws Exception;
  public void update(Board vo) throws Exception;
  public void delete(Integer bno) throws Exception;
  public List<Board> listAll(Pagination p);
  public List<Board> listPage(int page) throws Exception;
  public List<Board> listCriteria(Criteria cri) throws Exception;
  public int countPaging(Criteria cri) throws Exception;
  public List<Board> listSearch(SearchCriteria cri)throws Exception;    //use for dynamic sql
  public int listSearchCount(SearchCriteria cri)throws Exception;
  public void updateReplyCnt(Integer bno, int amount)throws Exception;
  public void updateViewCnt(Integer bno)throws Exception;
  public void addAttach(String fullName)throws Exception;
  public List<String> getAttach(Integer bno)throws Exception;  
  public void deleteAttach(Integer bno)throws Exception;
  public void replaceAttach(String fullName, Integer bno)throws Exception;
  
}