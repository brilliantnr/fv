package com.gms.web.cmm;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.function.Function;
import org.springframework.stereotype.Component;
import com.gms.web.mbr.Member;

@Component
public class Temp {
    public Function <Member, Member> ageAndGender=(Member m)->{
        String ssn = m.getSsn();


        //나이 구하기
		int brithyy = Integer.parseInt(ssn.substring(0, 2));
		m.setAge(String.valueOf(Integer.parseInt(new SimpleDateFormat("yyyy").format(new Date()))
				- Integer.parseInt(((brithyy > 18 && brithyy <= 99) ? "19" : "20") + "" + brithyy)
				+ ((Integer.parseInt(ssn.substring(2, 6)) > Integer
						.parseInt(new SimpleDateFormat("MMdd").format(new Date()))) ? 1 : 0)));
        
        
        //성별 구하기
        char genderNum = ssn.charAt(7);
        String gender="";

        if(genderNum=='1'||genderNum=='3'){
            gender="남자";
        }else if(genderNum=='2'||genderNum=='4'){
            gender="여자";
        }else if(genderNum=='5'||genderNum=='6'){
            gender="외국인";
        }        
        m.setGender(gender);
        
        
        return m;
    };
}
/*@Component
public class Temp {
public Function<Member,Member> ageAndGender = (Member mbr)->{
		
		String age = "";
		int birthyy = Integer.parseInt(ssn.substring(0, 2));
		String thisYear = new SimpleDateFormat("yyyy").format(new Date());
		int iThisYear = Integer.parseInt(thisYear.substring(2));
//		int nextYear = Integer.parseInt(thisYear)+1;
		int century = (birthyy > iThisYear)? 19:20; 
		String birthYear = century+""+birthyy;
		int age1 = nextYear - Integer.parseInt(birthYear);
		age=String.valueOf(age1);
return age;		
}
}
	*/
		
	
		
		
	

/*	
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
	}*/
	

