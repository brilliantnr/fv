package com.gms.web.cmm;

import org.springframework.stereotype.Repository;

@Repository
public interface PointMapper {

	public void updatePoint(String uid,int point)throws Exception;
	
}