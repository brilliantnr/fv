<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="contentBox">
<div>
	<form id="update_form" name="update_form">
	<table id="mypage">
		<tr>
			<th>${user.name}님의 회원정보</th>
		</tr>
		<tr>
			<td>아이디</td>
			<td>${user.userid}</td>
			<td rowspan="3"><img src="${img}/${imgPath}" alt="이미지"></td>
		</tr>
		<tr>
			<td>이름</td>
			<td>${user.name}</td>
			<td></td>
		</tr>
		<tr>
			<td>비밀번호</td>
			<td> 
			기 존  비밀번호  		:<input type="text" name="password" placeholder="${user.password}" /><br />
			<!-- 새로운 비밀번호 		:<input id="new_pw" type="text" name="password" /><br />
			새로운 비밀번호 확인 :<input id="new_pw_check" type="text" name="password"/><br /> -->
			</td>
		</tr>
		<tr>
			<td>주민번호</td>
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
					<td>팀명 (현재: ${user.teamId})</td>
					<td colspan="2">
					<select name="teamId" id="teamId">
							<option value="A">놀자</option>
							<option value="H">지은집</option>
							<option value="S">터틀킹</option>
							<option value="C">코딩짱</option>
					</select></td>
				</tr>
				<tr>
					<td>역할 (현재: ${user.roll})</td>
					<td colspan="2"><br>
					<select id="roll" name="roll">
							<option value="leader">팀장</option>
							<option value="front">프론트개발</option>
							<option value="back">백단개발</option>
							<option value="android">안드로이드개발</option>
							<option value="minfe">민폐</option>
					</select>
					</td>
				</tr>
			</table>
		<input type="hidden" name="page" value="mypage" />
		<input type="hidden" name="action" value="update"/>	
		<input id="update_submit" type="button" value="회원정보 수정완료" /> 
	</form>
</div>
</div> <!-- content -->
<form method="POST" enctype="multipart/form-data" action="${context}/member.do?action=fileupload&page=retrieve">
	파일 업로드: <input type="file" name="upfile"><br /> 
	<input type="submit" name="파일업로드"><br />
	<!-- 
			<input type="hidden" name="action" value="fileupload">
			<input type="hidden" name="page" value="retrieve"> 
			-->
</form>
<script>
	$('#update_submit').click(function(){
		alert('update_submit 클릭');
		$('#update_form').attr({
			action:"${context}/member/modify",
			method:"POST"
		}).submit();
	});
</script>
