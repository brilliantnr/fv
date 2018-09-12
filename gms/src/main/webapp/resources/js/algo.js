"use strict";
var algo = algo || {};
//algo 는 클래스 개념
algo = {
		//init 은 메소드
		init : x =>{
			alert('step1 '+x);
			algo.onCreate(x);
			algo.setContentView();
		},
		onCreate : x=>{
			algo.router.onCreate(x);
		},
		setContentView : ()=>{
			$('#wrapper').empty();
		}
};
algo.main = {
		//main은 변수 . oncreate 메소드를 호출한다
		onCreate: ()=>{
			alert('step4 :'+$.ctx());
			algo.main.setContentView();
			//클래스.변수.메소드 호출
		},
		setContentView : ()=>{
			alert('step5 :'+$.ctx());
			$('#wrapper').html('<h1>알고리즘</h1><h3>수  열</h3><div id="content">'
					+'<table id="tbl" style="width:800px; height:300px;'
					+'border-collapse:collapse; border:1px solid black; margin:0 auto">'
					+'<tr style="border:1px solid balck;">'
					+'<td id="t__l" style="width:50%; border:1px solid black;"></td>'
					+'<td id="t__r" style="width:50%; border:1px solid black;"></td>'
					+'</tr>'
					+'</table>'
					+'</div>');
			$('#t__l').html('<a id="arith_seq"><h3>등차수열</h3></a>');
			$('#t__l').append('<a id="swit_seq"><h3>스위치수열</h3></a>');
			$('#t__l').append('<a id="fibo_seq"><h3>피보나치수열</h3></a>');
			$('#t__l').append('<a id="fact_seq"><h3>팩토리얼수열</h3></a>');
			
			$('#arith_seq').click(e=>{
				alert('등차수열 선택');
			});
			$('#swit_seq').click(e=>{
				alert('스위치수열 선택');
			});
			$('#fibo_seq').click(e=>{
				alert('피보나치수열 선택');
			});
			$('#fact_seq').click(e=>{
				alert('팩토리얼수열 선택');
			});
			
		}
};
algo.series = {
		arith : x => {},
		fibonacci : x => {},
		swit : x => {},
		factorial : x=> {}
};
algo.array ={
		bubble : x=>{},
		insert : x=>{},
		select : x=>{},
		ranking : x=>{}
};
algo.matrix = {
		fiveBy5 : x=>{},
		sandGlass : x=>{},
		snail : x=>{},
		diamond : x=>{},
		zigzag : x=>{}
};
algo.math = {};
algo.appl ={};

//static 느낌
algo.router = {
		onCreate : x=>{
			alert('step2 '+x);
			$.getScript(x+'/resources/js/router.js',
			// 외부의 Js파일을 호출한다 , 자바의 import의미
				()=>{
					alert('step3 '+x);
					$.extend(new Session(x));
					// 제이쿼리 기능을 확장한다.
					algo.main.onCreate();
				}
			);
		}
};
