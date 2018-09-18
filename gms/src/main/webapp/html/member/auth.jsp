<%@ page language="java" contentType="text/html; charset=UTF-8" 	pageEncoding="UTF-8"%>

<header id="header">
	<div class="container main-menu">
		<div class="row align-items-center justify-content-between d-flex">
			<div id="logo">
				<a href="index.html"><img src="${context}/resources/img/logo.png" alt="" title="" /></a>
			</div>
			<nav id="nav-menu-container">
				<ul class="nav-menu">
					<li><a id="home_btn">Home</a></li>
					<li><a id="mypage_btn">마이페이지</a></li>
					<li><a id="logout_btn">${user.name}님 로그아웃</a></li>
					<li><a id="">뿅</a></li>
					<li><a href="portfolio.html">Portfolio</a></li>
					<li><a href="price.html">Pricing</a></li>
					<li class="menu-has-children"><a href="">Blog</a>
						<ul>
							<li><a href="blog-home.html">Blog Home</a></li>
							<li><a href="blog-single.html">Blog Single</a></li>
						</ul></li>
					<li class="menu-has-children"><a >게시판</a>
						<ul>
							<li><a id="board_write">게시글 쓰기</a></li>
							<li><a id="board_list">게시글 목록보기</a></li>
							
							<li class="menu-has-children"><a href="">Level 2 </a>
								<ul>
									<li><a href="#">Item One</a></li>
									<li><a href="#">Item Two</a></li>
								</ul></li>
						</ul></li>
					<li><a href="contact.html">Contact</a></li>
				</ul>
			</nav>
			<!-- #nav-menu-container -->
		</div>
	</div>
</header>
<!-- #header -->

<script>
$('#home_btn').click(function(){
	alert('Home버튼 클릭');
	location.href = '${context}/move/public';
});
$('#mypage_btn').click(function() {
	alert('마이페이지 이동하자');
	location.href = '${context}/move/auth/member/modify';
});

$('#logout_btn').click(function() {
	location.href = '${context}/member/logout';
});

//게시판
$('board_write').click(function() {
	alert('board_write 클릭!');
});
$('board_list').click(function() {
	alert('board_list 클릭!');
});

	/* user.session({
		userid : '${user.userid}',
		name : '${user.name}',
		gender : '${user.gender}',
		age : '${user.age}',
		roll : '${user.roll}',
		teamId : '${user.teamId}'
	}); */
</script>


