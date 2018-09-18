<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>


<div id="contentBox">
	<form id="delete_form" name="delete">
		비밀번호 확인<br>
		<input type="password" name="password" id="password" /><br /> <input
			id="delete_submit" type="button" value="회원탈퇴 요청" />
	</form>
</div>
<!-- content End-->
<script>
$('#delete_submit').click(function(){
	alert('delete_submit 클릭');
	$('#delete_form').attr({
		action:"${context}/member/remove",
		method:"POST"
	}).submit();
});
</script>
