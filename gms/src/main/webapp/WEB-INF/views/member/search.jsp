<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<div id="content-box">
	<div id="search_div">
		<input id="search_btn" type="button" value="검색" /> <input
			id="search_word" type="text" placeholder="검색어 입력" /> <select
			id="search_box" name="search_box">
			<option value="search_option">검색조건</option>
			<option value="userid">아이디</option>
			<option value="name">이름</option>
			<option value="teamId">팀명</option>
		</select>
	</div>
	<table id="content_box_table">
		<tr id="content_box_meta">
			<th>아이디</th>
			<th>이 름</th>
			<th>나 이</th>
			<th>성 별</th>
			<th>역 할</th>
			<th>팀 명</th>
		</tr>
		<c:forEach items="${list}" var="m">
			<tr>
				<td>${m.userid}</td>
				<td><a class="username" id="${m.userid}">${m.name}</a></td>
				<td>${m.age}</td>
				<td>${m.gender}</td>
				<td>${m.roll}</td>
				<td>${m.teamId}</td>
			</tr>
		</c:forEach>
		<tr>
			<td colspan="6">전체회원수 : ${memberCount}
				<ul class="pageBox">
					<c:if test="${page.existPrev}">
						<li><a id="${page.preBlock}" class="pageNum">◀이전</a></li>
					</c:if>
					<c:forEach begin="${page.beginPage}" end="${page.endPage}" step="1" varStatus="i">
						<li>
						<a class="pageNum" id="${i.index}">${i.index}</a>
						</li>
					</c:forEach>
					<c:if test="${page.existNext}">
						<li><a id="${page.nextBlock}" class="pageNum" >다음▶</a></li>
					</c:if>
				</ul>
			</td>
		</tr>
	</table>
</div>
<script>

//이전, 다음에서 json 쓰지 않기
// class와 id 주는 것으로 해결하기
	admin.main('${context}');
</script>
