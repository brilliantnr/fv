package com.gms.web.cmm;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.function.Function;
import org.springframework.stereotype.Component;
import com.gms.web.mbr.Member;

@Component
public class Util2 {
	public static Function <Member, Member> ageAndGender=(Member m)->{
		String ssn = m.getSsn();
		
		//나이 구하기
		int birfront = Integer.parseInt(ssn.substring(0, 2));		
		m.setAge(String.valueOf(
				Integer.parseInt(
						new SimpleDateFormat("yyyy").format(new Date())
						)
				-
				Integer.parseInt(
						((birfront>18&&birfront<=99)?"19":"20")
						+""+birfront)
				+
				(
						(
								Integer.parseInt(ssn.substring(2, 6))>
								Integer.parseInt(new SimpleDateFormat("MMdd").format(new Date()))
						)? 1:0)
				));
		
		
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
