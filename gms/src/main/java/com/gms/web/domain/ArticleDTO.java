package com.gms.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
@Lazy
public class ArticleDTO {
	//@Lazy : 필요할때만 bean 만든다. 초기 로딩속도빨라짐
	private String bno, title, content, writer, regdate, viewcnt;
}
