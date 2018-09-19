package com.gms.web.mbr;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface MemberMapper {
	
		public void post(Member p);
		public List<?> list(Map<?, ?> p);
		public Member get(Member p);
		public Integer count(Member p);
		public void put(Member p);
		public void delete(Member p);
		
	
	/*
	//스프링3버전
	public void insert(Member p);
	public List<?> selectList(Map<?, ?> p);
	public List<?> selectSome(Map<?, ?> p);
	public Member selectOne(Member p);
	public int count(Map<?, ?> p);
	public void update(Member p);
	public void delete(Member p);
	public String login(Member p);
	public String exist(String p);
	*/
}
