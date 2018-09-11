<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<div id="contentBox">
	<table id="mypage">
		<tr>
			<th>${user.name}의회원정보</th>
		</tr>
		<tr>
			<td>이름</td>
			<td>${user.name}</td>
			<td id="mypageImg" rowspan="3">
			<%-- <img src="${img}/${imgPath}" alt="이미지"></td> --%>
		</tr>
		<tr>
			<td>비밀번호</td>
			<td>*****</td>
		</tr>
		<tr>
			<td>생년월일</td>
			<td>${user.ssn}</td>
		</tr>
		<tr>
			<td>나이</td>
			<td>${user.age}</td>
			<td></td>
		</tr>
		<tr>
			<td>성별</td>
			<td>${user.gender}</td>
			<td></td>
		</tr>
		<tr>
			<td>팀명</td>
			<td>${user.teamId}</td>
			<td></td>
		</tr>
		<tr>
			<td>역할</td>
			<td>${user.roll}</td>
			<td></td>
		</tr>
	</table>
	<button id="mypage_update">수정하기</button>
	<button id="mypage_delete">회원탈퇴</button>
<!-- <input id="mypage_update" value="수정하기" >
		<a id="mypage_update"> 수정하기 </a>
		<a id="mypage_delete"> 회원탈퇴하기 </a> -->
</div>
<!-- content -->

<script>
$('#mypage_update').click(function() {
	alert('회원정보수정 이동하자');
	location.href = '${context}/move/auth/member/modify';
});
$('#mypage_delete').click(function() {
	alert('회원탈퇴 이동하자');
	location.href = '${context}/move/auth/member/remove';
});

</script>

