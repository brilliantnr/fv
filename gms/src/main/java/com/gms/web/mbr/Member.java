package com.gms.web.mbr;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
@Lazy
@Data
@Component
public class Member {
	private 
	String userid,name, ssn,password,
	teamId,roll,gender,age, 
	subject
	;
}
