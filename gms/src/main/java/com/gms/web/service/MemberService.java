package com.gms.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.gms.web.domain.MemberDTO;

@Component
public interface MemberService {
	//인터페이스는 객체 아니니까 @ 이거 안함
	// 싱글톤 원래 안걸었음
	
	
	//pagination 도 DTO로 만들어서 함께 전달되기때문에 map으로 만듦
	//페이지 필요없으면 MemberDTO로 바꿔서 쓰자
	public void add(MemberDTO p);
	public List<?> list(Map<?, ?> p);
	public List<?> search(Map<?, ?> p);
	public MemberDTO retrieve(MemberDTO p);
	public int count(Map<?, ?> p);
	public void modify(MemberDTO p);
	public void remove(MemberDTO p);
	public boolean login(MemberDTO p);
	
}
