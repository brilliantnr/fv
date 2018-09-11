<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="login-box">
	<a id="move_login_form" >LOGIN </a>
	&nbsp;&nbsp;&nbsp;&nbsp; 
	<a id="move_join_form">JOIN </a>
</div>

<script>

	document.getElementById('move_login_form').addEventListener('click', function() {
				router.move({
					context : '${context}',
					domain : 'member',
					action : 'move',
					page : 'login'
				});
			});
	document.getElementById('move_join_form').addEventListener('click', function() {
				router.move({
					context : '${context}',
					domain : 'member',
					action : 'move',
					page : 'add'
				});
			});
</script>





























<script>
//=============================================================================================================
/* 
 ## loginBox.jsp
//a태그에 이벤트(onclick)를 걸어서 이동하는 것은 객체지향에 어긋난다.

 로그인 폼에서 이동하기
 
 변경전)
	var move_login_form = document.getElementById('move_login_form');
	move_login_form.addEventListener('click',function());
	
1단계) new Common() 함수 이용
	document.getElementById('move_login_form').addEventListener('click',function(){
		new Common().move('${context}','member','move','user_login_form');
	});	

2단계)IIFE 패턴 중 배열(Array) 이용
	document.getElementById('move_login_form').addEventListener('click',function(){
		var x = ['${context}','member','move','user_login_form'];
		new Common().move(x); 
	});	

2-2)
	document.getElementById('move_login_form').addEventListener('click',function(){
		new Common().move(['${context}','member','move','user_login_form']);
	});	
	
## app.js
3) app.js (Java Script Source File) 에서 싱글 스레드 모델 이용(single thread model)

## loginBox.jsp
document.getElementById('move_login_form').addEventListener('click',function(){
	alert('로그인 클릭 이벤트 체크!!');
	router.move(['${context}','member','move','user_login_form']);
});		
	
 */
</script>



