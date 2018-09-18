"use strict"
var algo = algo || {};
algo = {
		init : x => {
			//alert('step 1 :: ' + x);
			algo.onCreate(x);
			algo.setContentView();
		},
		onCreate : x=>{
			algo.router.onCreate(x);
		},
		setContentView : ()=>{
			$('#wrapper').empty();
		}
}

algo.main = (()=>{
	var $wrapper, ctx, img, script, style, compo, json, $td1, $td2;
	var onCreate = ()=>{
		ctx = $.ctx();
		img = $.img();
		script = $.script();
		style = $.style();
		compo = script+'/compo.js'
		setContentView();
	};
	var setContentView = ()=>{
		$('#wrapper').html(
				'<h1> ALGORITHM </h1>'
				+ '<a href="#"><span id="seq"> 【수  열】 </span></a>'
				+ '<a href="#"><span id="appl"> 【응  용】 </span></a>'
				+ '<div id="ctn"></div>'); // 오버라이딩
		$('#ctn').html(
				'<table id="tbl" style="width:800px;height:300px;'
				+ 'border-collapse:collapse;border: 1px solid black; margin:0 auto">'
				+ '<tr style="border:1px solid black;">'
				+ '<td id="td1" style="width:50%; border:1px solid black;"></td>'
				+ '<td id="td2" style="width:50%; border:1px solid black;"></td>'
				+ '</tr></table>');
		$td1 = $('#td1');
		$td2 = $('#td2');
		
		//seq '수열'a 클릭
		$('#seq').click(e=>{
			$td1.empty();
			$td2.empty();
			
			$('<ul />')
			.attr({id : 'side_menu'})
			.addClass('list-group')
			.appendTo($td1);
			$('<li/>')
			.attr({id : 'arith'})
			.addClass('list-group-item')
			.appendTo($('#side_menu'));
			$('<a/>')
			.attr({href : '#'})
			.html('등차수열의 합')
			.appendTo($('#arith'))
			.click(e=>{
				$('#ques').remove();
				$('<div/>')
				.attr({id : "ques"}).appendTo($td2);
				$('<h3/>')
				.html('시작값 x, 마지막값 y, 공차 d 인 수열의 합을 구하시오.').appendTo($('#ques'));
				
				let arr = [{id:'start',label:'시작값'},
					{id:'end',label:'마지막값'},
					{id:'d',label:'공차'}];
				
				/*  for(let i in arr){
				$('<div/>')
				.attr({id : "temp_"+i}).appendTo($('#ques'));
				
				$('<label/>')
				.html(arr[i].label).appendTo($('#temp_'+i));
				$('<input/>')
				.attr({id : arr[i].id, type : 'text'}).appendTo($('#temp_'+i));
				$('<br/>').appendTo($('#temp_'+i));
			}
			
			$(arr).each(function(){
				$('<div/>')
					.attr({id : "temp_"+i}).appendTo($('#ques'));
					$('<label/>')
					.html(v.label).appendTo($('#temp_'+i));
					$('<input/>')
					.attr({id : v.id, type : 'text'}).appendTo($('#temp_'+i));
					$('<br/>').appendTo($('#temp_'+i));
			});
			
			 $.each(arr,(i, v)=>{
				$('<div/>')
				.attr({id : "temp_"+i}).appendTo($('#ques'));
				$('<label/>')
				.html(v.label).appendTo($('#temp_'+i));
				$('<input/>')
				.attr({id : v.id, type : 'text'}).appendTo($('#temp_'+i));
				$('<br/>').appendTo($('#temp_'+i));
			});	*/
				
				$.each(arr,function(){
					$('<div/>')
					.attr({id : "lab_"+this.id}).appendTo($('#ques'));
					$('<label/>')
					.html(this.label).appendTo($('#lab_'+this.id));
					$('<input/>')
					.attr({id : this.id, type : 'text'}).appendTo($('#lab_'+this.id));
					$('<br/>').appendTo($('#lab_'+this.id));
				});
				
				$('<button/>')
				.addClass('btn btn-primary')
				.html('결과보기')
				.appendTo($('#ques'))
				.click(e=>{
					$('#r').remove();
					$('<h3/>')
					.attr({id : 'r'})
					.appendTo($('#ques'));
					let start = $('#start').val()*1;
					let end = $('#end').val()*1;
					let d = $('#d').val()*1;
					$('#r').text(
							($.fn.zeroChecker([start,end,d]))?
									'빈칸을 채우세요'
									:'실행'		
					);
					if($('#r').text() === '실행'){
						console.log(start+"/"+end+"/"+d);
						let sum = 0;
						let i = 0;
						let a = start;
						while(i<end){
							sum = sum + a;
							a = a + d;
							i = i + 1;
						}
						$('#r').text("답 : "+sum);
					}
				});//결과보기 버튼 클릭
			});  //a 클릭
			
			
			$('<li/>')
			.attr({id:'fibonacci'})
			.addClass('list-group-item')
			.appendTo($('#side_menu'));
			$('<a/>')
			.attr({href:'#'})
			.html('피보나치수열')
			.appendTo($('#fibonacci'))
			.click(e=>{
				$('#ques').remove();
				$('<div/>')
				.attr({id : 'ques'})
				.appendTo($td2);
				$('<h3/>')
				.html('1 + 1 + 2 + 3 + 5 + 8 + ...  와 같은 피보나치 수열의 N항까지의 합을 구하시오.').appendTo($('#ques'));
				let arr = [{id : 's', label : '시작값'},{id : 'seq' , label : 'N항' }];
				$.each(arr, function(){
					$('<div/>').attr({id : 'lab_'+this.id}).appendTo($('#ques'));
					$('<label/>').html(this.label).appendTo($('#lab_'+this.id));
					$('<input/>').attr({id : this.id, type : 'text'}).appendTo($('#lab_'+this.id));
					$('<br/>').appendTo($('#lab_'+this.id));
				});
				$('<button/>')
				.addClass('btn btn-primary')
				.html('결과보기')
				.appendTo($('#ques'))
				.click(e=>{
					$('#r').remove();
					$('<h3/>').attr({id : 'r'}).appendTo($('#ques'));
					let start = $('#s').val()*1;
					let end = $('#seq').val()*1;
					$('#r').text(
							($.fn.zeroChecker([start, end]))?
									'빈칸을 채우세요':"실행"
					);
					if($('#r').text() === '실행'){
						let i = start;
						let j = i;
						let k = 0;
						let sum = i + j;
						let cnt = 3;
						while(cnt <= end){
							k = i + j;
							sum = sum + k;
							i = j;
							j = k;
							cnt = cnt + 1;
						}
						$('#r').text("답 : "+sum);
					}
				});
			});
			$('<li/>')
			.attr({id : 'swit'})
			.addClass('list-group-item')
			.appendTo($('#side_menu'));
			$('<a/>')
			.attr({href : '#'})
			.html('스위치수열')
			.appendTo($('#swit'))
			.click(e=>{
				$('#ques').remove();
				$('<div/>').attr({id : 'ques'}).appendTo($td2);
				$('<h3/>').html('시작값 x, 마지막값 y로 홀수는 더하고 짝수는 빼는 수열의 합을 구하시오.').appendTo($('#ques'));
				let arr = [{id : 's', label : '시작값'},{id : 'e', label : '마지막값'}];
				$.each(arr,function(){
					$('<div/>').attr({id : 'lab_'+this.id}).appendTo($('#ques'));
					$('<label/>').html(this.label).appendTo($('#lab_'+this.id));
					$('<input/>').attr({id : this.id, type : 'text'}).appendTo($('#lab_'+this.id));
					$('<br/>').appendTo($('#lab_'+this.id));
				});
				$('<button/>')
				.html('결과보기')
				.addClass('btn btn-primary')
				.appendTo($('#ques'))
				.click(e=>{
					$('#r').remove();
					$('<h3/>').attr({id:'r'}).appendTo($('#ques'));
					let start = $('#s').val()*1;
					let end = $('#e').val()*1;
					$('#r').text(
							($.fn.zeroChecker([start, end]))?
									'빈칸을 채우세요.':'실행'
					);
					if($('#r').text() === '실행'){
						let a = start;
						let swit = 1;
						let i = 0;
						let sum = 0;
						while(i<end){
							if(swit == 1){
								sum = sum + a;
							}else if(swit == -1){
								sum = sum - a;
							}
							a = a + 1;
							swit = swit * -1 ;
							i = i + 1;
						}
						$('#r').text("답 :"+sum);
					}
				});
			});
			$('<li/>')
			.attr({id:'factorial'})
			.addClass('list-group-item').appendTo($('#side_menu'));
			$('<a/>')
			.attr({href:'#'})
			.html('팩토리얼수열')
			.appendTo($('#factorial'))
			.click(e=>{
				$('#ques').remove();
				$('<div/>')
				.attr({id:'ques'}).appendTo($td2);
				$('<h3/>')
				.html('시작값 x, 마지막값 y로  x! + ... + y! 팩토리얼 수열의 합을 구하시오.').appendTo($('#ques'));
				let arr = [{id:'s', label:'시작값'},{id:'e', label:'마지막값'}];
				$.each(arr,function(){
					$('<div/>').attr({id:'lab_'+this.id}).appendTo($('ques'));
					$('<label/>').html(this.label).appendTo($('#lab_'+this.id));
					$('<input/>').attr({id:this.id, type:'text'}).appendTo($('#lab_'+this.id));
					$('<br/>').appendTo($('#lab_'+this.id));
				});
				$('<button/>')
				.html('결과보기')
				.appendTo($('#ques'))
				.click(e=>{
					$('#r').remove();
					$('<h3/>').attr({id : 'r'}).appendTo($('#ques'));
					let start = $('#s').val()*1;
					let end = $('#e').val()*1;
				});
			});//팩토리얼수열 a 클릭
		}); //seq클릭

//appl============================================================================		
		$('#appl').click(e=>{
			alert('appl 클릭');
			$td1.empty();
			$td2.empty();
			alert('compo: '+compo);
			$.getScript(compo,()=>{
				alert('====getScript 클릭=====');
				ui.ul({len : 3, id:'menu'}).appendTo($td1);
				ui.anchor({txt:'화폐문제'}).appendTo($('#menu-0'))
				.click(x=>{
					//$td2.empty();
					alert('화폐문제');
					$('<h6>화폐문제</h6>').appendTo($td2);
						ui.input({id:'money',txt:'입금액'}).appendTo($td2);
						ui.btn({clazz:'primary', txt:'전송'}).appendTo($td2)
						.click(x=>{
							alert('화폐금액 : '+$('#money').val());
							$.ajax({
								/*
								 * @GetMapping("/money/{money}")일 경우 url 뒤에 데이터 붙여서 자바로 보낸다.
								url: ctx+'/algo/money/'+$('#money').val(),
								method:'get',
								contentType:'application/json',
								//data: {money: $('#money').val()},
								success: d=>{
									alert('AJAX  성공 !!');
								},*/
								
								//@PostMapping("/money/")일 경우 데이터를 data에서 JSON으로 보낸다.
								url: ctx+'/algo/money/',
								method:'POST',
								contentType:'application/json',
								data: JSON.stringify({money: $('#money').val()}) ,
								success: d=>{
									alert('AJAX  성공 !!'+d.test);
								},
								error: (m1,m2,m3)=>{
									alert('에러발생 1: '+m1);
									alert('에러발생 2: '+m2);
									alert('에러발생 3: '+m3);
								}
							});
						})
						;
					
				});
				});
			
				/*
			
			$('<li/>')
			.attr({id : 'pay'})
			.addClass('list-group-item')
			.appendTo($('#side_menu'));
			
			$('<a/>')
			.attr({href : '#'})
			.html('화폐')
			.appendTo($('#pay'))
			.click(e=>{
				$('#ques').remove();
				$('<div/>')
				.attr({id:"ques"})
				.appendTo($td2);
				$('<h3/>')
				.html('화폐 오른쪽 화면 ')
				.appendTo($('#ques'));
			});
			*/
			
			
			
			
			
		});		
		
	} //setContentView
	return{
		onCreate : onCreate
	}
})();  //algo.main

algo.series = {
		arith : x=>{},
		fibonacci : x=>{},
		swit : x=>{},
		factorial : x=>{}
};
algo.array = {
		bubble : x=>{},
		insert : x=>{},
		select : x=>{},
		ranking : x=>{}
};
algo.matrix = {
		fByf : x=>{},
		sandGlass : x=>{},
		snail : x=>{},
		diamond : x=>{},
		zigzag : x=>{}
};
algo.math = {
		
};
algo.appl = {
		
};

algo.router = {
	onCreate : x=>{
		//alert('step 2 :: ' + x);
		$.getScript(x+'/resources/js/router.js',
			()=>{
					//alert('step 3 :: ' + x);
					$.extend(new Session(x)); // 확장
					$.getScript(x+'/resources/js/util.js')
					.done(()=>{console.log('성공');})
					.fail(()=>{console.log('실패');});
					algo.main.onCreate();
				}
			); // 외부의 js파일 호출, import 느낌
	}
};
	