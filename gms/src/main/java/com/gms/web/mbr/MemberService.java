package com.gms.web.mbr;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public interface MemberService {
	//인터페이스는 객체 아니니까 @ 이거 안함
	// 싱글톤 원래 안걸었음
	
	
	//pagination 도 DTO로 만들어서 함께 전달되기때문에 map으로 만듦
	//페이지 필요없으면 MemberDTO로 바꿔서 쓰자
	public void add(Member p);
	public List<?> list(Map<?, ?> p);
	public List<?> search(Map<?, ?> p);
	public Member retrieve(Member p);
	public int count(Map<?, ?> p);
	public void modify(Member p);
	public void remove(Member p);
	public boolean login(Member p);
	
}
