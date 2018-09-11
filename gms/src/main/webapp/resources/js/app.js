/*"use strict";

//Ecma6버전 (객체리터럴)   (이전버전: IIFE패턴)
var app = app || {}; //만약 app이 있으면 app쓰고 없으면 새로 만들어라, var는  전역
var user = user || {};

app = {//안드로이드, 노드의 핵심 코딩  
		init : x =>{
			console.log('step1');
			app.session.context(x);  //세션에 제일 먼저 경로 저장
			app.onCreate();//init에서 onCreate기능 생성
		},
		onCreate : ()=>{
			console.log('step 3 : ');
			app.setContentView();
			$('#home_btn').click(()=>{
				location.href = app.x()+'/move/auth/member/main';
			});
			//---login page---
			$('#login_btn').click(()=>{
				location.href = app.x()+'/move/auth/member/login';
			});
			$('#login_submit').click(()=>{
				$('#login_form')
				.attr({
					action:app.x()+"/member/login",
					method:"POST"
				})
				.submit();
				$('mypage_btn').click(()=>{
					alert('마이페이지 이동하자');
					location.href = app.x()+'/move/auth/member/modify';
				});
				
			});
			
			//---join page---
			$('#join_btn').click(()=>{
				location.href = app.x()+'/move/auth/member/add';
			});
			$('#join_submit').click(()=>{
				alert('join_submit click !');
				DOM 객체 이용
				 * var form = document.getElementById('join_form');
					form.action = app.x()+"/member/add";  
					form.method = "post";
					form.submit();
				$('#join_form')
				.attr({
					action:app.x()+"/member/add",
					method:"POST"
				})
				.submit();
			});
			
			//---retrieve page---
			$('#mypage_update').click(()=>{
				alert('mypage_update click !');
				location.href = app.x()+'/move/auth/member/modify';
				$('#update_form').attr({
					action:app.x()+"/member/retrieve",
					method:"POST"
				}).submit();
			});
			$('#mypage_delete').click(()=>{
				alert('mypage_delete click !');
				location.href = app.x()+'/move/auth/member/remove';
			});
			
			$('#logout_btn').click(()=>{
				location.href = app.x()+'/member/logout';
			});

			
		},
		setContentView : ()=>{
			console.log('step 4 : '+app.j());
		}
};
app.session = {
		context : x=>{
			console.log('step 2 : '+x);
			sessionStorage.setItem('context',x);
			sessionStorage.setItem('js',x+'resources/js');
			sessionStorage.setItem('css',x+'resources/css');
			sessionStorage.setItem('img',x+'resources/img');
		},
		path : x=>{
			return sessionStorage.getItem(x);
			// 클로저 리턴 아니고, 클로저 내부에서 한번 더 리턴 하는 것.
		} 
};

//attaching property
app.x= ()=>{
	return app.session.path('context');
};
app.j= ()=>{
	return app.session.path('js');
};
app.c= ()=>{
	return app.session.path('css');
};
app.i= ()=>{
	return app.session.path('img');
};


user.session = x=>{
	$.each(x, function(k,v){
		alert('key:'+k+' ,value:'+v);
		sessionStorage.setItem(k,v);
	});
	alert(sessionStorage.getItem('userid'));
}





*/