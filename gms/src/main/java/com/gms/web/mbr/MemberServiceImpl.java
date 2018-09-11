package com.gms.web.mbr;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gms.web.adm.Calc;

@Service
public class MemberServiceImpl implements MemberService{
	static final Logger logger = LoggerFactory.getLogger(MemberServiceImpl.class);
	@Autowired MemberMapper memberDAO;
	@Autowired Calc calc;
	@Override 
	public void add(Member p) {
		logger.info("---add() :p: {}---", p);
		String ssn = p.getSsn();
		logger.info("---add() :ssn: {}---", ssn);
		p.setAge(calc.age(ssn));
		logger.info("---add() :p.getAge: {}---", p.getAge());
		p.setGender(calc.gender(ssn));
		logger.info("---add() :p.getGender: {}---", p.getGender());
		memberDAO.insert(p);
	}

	@Override
	public List<?> list(Map<?, ?> p) {
		logger.info("---list() :p: {}---", p);
		return memberDAO.selectList(p);
	}

	@Override
	public List<?> search(Map<?, ?> p) {
		logger.info("---search() :p: {}---", p);
		return memberDAO.selectSome(p);
	}

	@Override
	public Member retrieve(Member p) {
		logger.info("---retrieve() :p: {}---", p);
		return memberDAO.selectOne(p);
	}

	@Override
	public int count(Map<?, ?> p) {
		logger.info("---count() :p: {}---", p);
		return memberDAO.count(p);
	}

	@Override
	public void modify(Member p) {
		logger.info("---modify() :p: {}---", p);
		memberDAO.update(p);
	}

	@Override
	public void remove(Member p) {
		logger.info("---remove() :p: {}---", p);
		memberDAO.delete(p);
	}

	@Override
	public boolean login(Member p) {
		logger.info("---login() :p: {}---", p);
		return memberDAO.login(p).equals("1");
	}
	

}
