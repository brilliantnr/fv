package com.gms.web.cmm;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class Calc {
	static final Logger logger = LoggerFactory.getLogger(Calc.class);
	public String age(String ssn){
		String res = "";
		int birthyy = Integer.parseInt(ssn.substring(0, 2));
		String thisYear = new SimpleDateFormat("yyyy").format(new Date());
		int iThisYear = Integer.parseInt(thisYear.substring(2));
		int nextYear = Integer.parseInt(thisYear)+1;
		int century = (birthyy > iThisYear)? 19:20; 
		String birthYear = century+""+birthyy;
		int age = nextYear - Integer.parseInt(birthYear);
		logger.info("\n CALC  STEP 1 :: SSN BEGIN is {} ",birthyy);
		logger.info("\n CALC  STEP 2 :: THIS YEAR is {} ",thisYear);
		logger.info("\n CALC  STEP 3 :: THIS YEAR is {} ",iThisYear);
		logger.info("\n CALC  STEP 4 :: NEXT YEAR is {} ",nextYear);
		logger.info("\n CALC  STEP 5 :: BIRTH YEAR is {} ",birthYear);
		logger.info("\n CALC  STEP 6 :: AGE is {} ",age);
		res=String.valueOf(age);
		return res;
	}
	
	public String gender(String ssn){
		String res = "";
		String genderNum = ssn.substring(ssn.length()-1);
		logger.info("---add() :genderNum: {}---", genderNum);
		res = (Integer.parseInt(genderNum)%2==0)?"여자":"남자";
		logger.info("---add() :res: {}---", res);
		return res;
	}
	
}
