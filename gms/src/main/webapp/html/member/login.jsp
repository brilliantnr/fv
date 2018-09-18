<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="contentBox">
	<div id="login_layout">
		<h1>사용자 로그인</h1>
		<form id="login_form" > 
			아이디		<br> <input id="userid" type="text" name="userid" /> <br/>
			비밀번호 	<br> <input id="password" type="text" name="password" /> <br/> <br/>
			<input id="login_submit" type="button" value="전송" /> 
		</form>
	</div>
</div> <!-- content -->	
<script>
$('#login_submit').click(function(){
	$('#login_form')
	.attr({
		action:"${context}/member/login",
		method:"POST"
	})
	.submit();

});
</script>