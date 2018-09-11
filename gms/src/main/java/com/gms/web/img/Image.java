package com.gms.web.img;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
@Lazy
@Component  //<-스프링에서 bean으로 만든다
@Data	//getter,setter로 쓴다
public class Image {
	private String imgseq;
	private String imgname;
	private String extension;
	private String userid;  //프로필 이미지
}
