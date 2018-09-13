"use strict";
var algo = algo || {};
//algo 는 클래스 개념
algo = {
		//init 은 메소드
		init : x =>{
			//alert('step1 '+x);
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
			//alert('step4 :'+$.ctx());
			algo.main.setContentView();
			//클래스.변수.메소드 호출
		},
		setContentView : ()=>{
			//alert('step5 :'+$.ctx());
			 $('#wrapper').html('<h1>알고리즘</h1><h3>수  열</h3><div id="content">'
	                    +'<table id="tbl" style="width:800px; height:300px;'
	                    +'border-collapse:collapse; border:1px solid black; margin:0 auto">'
	                    +'<tr style="border:1px solid balck;">'
	                    +'<td id="t__l" style="width:50%; border:1px solid black;"></td>'
	                    +'<td id="t__r" style="width:50%; border:1px solid black;"></td>'
	                    +'</tr>'
	                    +'</table>'
	                    +'</div>');
			 
			let $t__l = $('#t__l');
			let $t__r = $('#t__r');
			$("<ul/>").attr({id :'side__menu'}).addClass('list-group').appendTo($t__l);
			$('<li/>').attr({id:'arith'}).addClass('list-group-item').appendTo($('#side__menu'));
			$('<a/>').attr({href :'#'}).html('등차수열의 합').appendTo($('#arith')).click(e=>{
				//익명객체
				$t__r.empty();
					$('<div/>').attr({id:'ques'}).appendTo($t__r);
					$('<h4>').html('시작값 x, 마지막값 y, 공차 d 인 수열의 합을 구하시오.').appendTo($('#ques'));
					$('<label>').html('시작값').appendTo($('#ques'));
						$('<input>').attr({id:'sta',type:'text'}).appendTo($('#ques'));
						$('<br>').appendTo($('#ques'));
					$('<label>').html('마지막값').appendTo($('#ques'));
						$('<input>').attr({id:'end',type:'text'}).appendTo($('#ques'));
						$('<br>').appendTo($('#ques'));
					$('<label>').html('공차').appendTo($('#ques'));z
						$('<input>').attr({id:'diff',type:'text'}).appendTo($('#ques'));
						$('<br>').appendTo($('#ques'));
						
					$('<button/>').addClass('btn btn-primary').attr({type:'button'})
					.html('결과보기').appendTo($('#ques')).click(e=>{
						let arr = [$('#sta').val()*1, $('#end').val()*1, $('#diff').val()*1];
						let rs = ($.fn.zeroChecker(arr)) ? '빈칸을 채우세요' : '완성하세요' ;
						console.log(rs);
						$('<h6/>').empty().text(rs);
						let i = arr[0];
						let sum = 0;
						while(i<=arr[1]){
							sum += i;
							i+=arr[2];
						}
						$('#t__r').append('<br><h2> 답 : '+sum+'</h2>');
					});
						
						
				/*		
				$('#t__r').html(ques);
				
				$('#bt').click(()=>{
					let arr = [$('#s').val()*1, $('#e').val()*1, $('#d').val()*1];
					let rs = ($.fn.zeroChecker(arr)) ? '빈칸을 채우세요' : '완성하세요' ;
					console.log(rs);
					$('#rs').empty().text(rs);
					let i = arr[0];
					let sum = 0;
					while(i<=arr[1]){
						sum += i;
						i+=arr[2];
					}
					$('#t__r').append('<br><h2> 답 : '+sum+'</h2>');
				});*/
			})
			
			
			
			/*
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
			*/
			/*
			$('#arith_seq').click(e=>{
				//지역변수는 let, 전역변수는 var
				let ques ='<h3>시작값 x, 마지막값 y, 공차 d 인 수열의 합을 구하시오.</h3>'
					+'<label for="시작값">시작값<input id="s" type="text" value=""></label></br>'
					+'<label for="마지막값">마지막값<input id="e" type="text" value=""></label></br>'
					+'<label for="공차">공차<input id="d" type="text" value=""></label></br>'
					+'<button id="bt">결과보기</button>';
					+'<h6 id="rs">결과보기</h6>';
				$('#t__r').html(ques);	
				//let ques = '1 + 2+ 3 + ... + 100 의 답을 구하시오.';
				$('#bt').click(()=>{
					let arr = [$('#s').val()*1, $('#e').val()*1, $('#d').val()*1];
					let rs = ($.fn.zeroChecker(arr)) ? '빈칸을 채우세요' : '완성하세요' ;
					console.log(rs);
					$('#rs').empty().text(rs);
					let i = arr[0];
					let sum = 0;
					while(i<=arr[1]){
						sum += i;
						i+=arr[2];
					}
					let arr = [$('#s').val()*1, $('#e').val()*1, $('#d').val()*1];
					let rs = ($.fn.nullChecker(arr)) ? '빈칸을 채우세요' : '완성하세요' ;
					console.log(rs);
					$('#rs').empty().text(rs);
					
					let sta = $('#s').val()*1;
					let end = $('#e').val()*1;
					let d = $('#d').val()*1;
					let i = sta;
					let sum = 0;
					while(i<=end){
						sum += i;
						i+=d;
					}
					$('#t__r').append('<br><h2> 답 : '+sum+'</h2>');
				});
				
			});
			*/
			$('#swit_seq').click(e=>{
				let ques = '<h3>1-2+3-4+5-6+ ... 합계를 구하시오(스위치 수열)</h3>'
					+'<label for="시작값">시작값<input id="s" type="text" value=""></label></br>'
					+'<label for="마지막값">마지막값<input id="e" type="text" value=""></label></br>'
					+'<button id="bt">결과보기</button>';
				$('#t__r').html(ques);
				$('#bt').click(()=>{
					
					
					
					
					let sta = $('#s').val()*1;
					let end = $('#e').val()*1;
					let i = sta;
					let sum = 0;
					while(i<=end){
						if(i%2==0){
							//짝수
							sum -=i;
						}else{
							sum +=i;
						}
						i++;
					}
					$('#t__r').append('<br><h2> 답 : '+sum+'</h2>');
				});
				
			});
			$('#fibo_seq').click(e=>{
				let ques = '<h3>1+1+2+3+5+8+13+.... n번째 항까지의 합계를 구하시오(피보나치 수열)</h3>'
					+'<label for="마지막항">마지막 항<input id="n" type="text" value=""></label></br>'
					+'<button id="bt">결과보기</button>';
				$('#t__r').html(ques);
				$('#bt').click(()=>{
					let sum, cnt, c;
					let a=1, b=1;
					sum = 2;
					cnt = 2;
					while(true){
						c = a+b;
						sum +=c;
						cnt++;
						if(cnt<20){
							a=b;
							b=c;
						}else{
							break;
						}
					}
					$('#t__r').append('<br><h2> 답 : '+sum+'</h2>');
				});
				
			});
			$('#fact_seq').click(e=>{
				let ques = '<h3>1! + 2! + 3! +4! + .... n번째 항까지의 합계를 구하시오(팩토리얼 수열)</h3>'
					+'<label for="마지막항">마지막 항<input id="n" type="text" value=""></label></br>'
					+'<button id="bt">결과보기</button>';
				$('#t__r').html(ques);
				$('#bt').click(()=>{
					let i=1;
					let j=1;
					let n=0;
					let sum = 0;
					while(i<=n){
						i++;
						j *= i;
						sum +=k;
					}
					$('#t__r').append('<br><h2> 답 : '+sum+'</h2>');
				});
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
			//alert('step2 '+x);
			$.getScript(x+'/resources/js/router.js',
			// 외부의 Js파일을 호출한다 , 자바의 import의미
				()=>{
					//alert('step3 '+x);	
					$.extend(new Session(x));
					// 제이쿼리 기능을 확장한다.
					$.getScript($.ctx()+'/resources/js/util.js')
					.done(x=>{console.log('실행');})
					.fail(x=>{console.log('실패');});
					algo.main.onCreate();
				}
			);
		}
};
