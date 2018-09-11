package com.gms.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
@Lazy
@Data
@Component
public class MemberDTO {
	private 
	String userid,name, ssn,password,
	teamId,roll,gender,age, 
	subject
	;
}
