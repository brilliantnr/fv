<%@page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<!DOCTYPE html>
<html lang="zxx" class="no-js">
<head>
<!-- Mobile Specific Meta -->
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!-- Favicon-->
<link rel="shortcut icon" HREF="${context}/resources/img/favicon.ico" />
<!-- Author Meta -->
<meta name="author" content="colorlib">
<!-- Meta Description -->
<meta name="description" content="">
<!-- Meta Keyword -->
<meta name="keywords" content="">
<!-- meta character set -->
<meta charset="UTF-8">
<title>Home</title>


<link
	href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700"
	rel="stylesheet">
<!-- CSS
			============================================= -->
<link rel="stylesheet" href="${context}/resources/css/linearicons.css">
<link rel="stylesheet" href="${context}/resources/css/font-awesome.min.css">
<link rel="stylesheet" href="${context}/resources/css/bootstrap.css">
<link rel="stylesheet" href="${context}/resources/css/magnific-popup.css">
<%-- <link rel="stylesheet" href="${context}/resources/css/jquery-ui.css"> --%>
<link rel="stylesheet" href="${context}/resources/css/nice-select.css">
<link rel="stylesheet" href="${context}/resources/css/animate.min.css">
<link rel="stylesheet" href="${context}/resources/css/owl.carousel.css">
<link rel="stylesheet" href="${context}/resources/css/main.css">


<!-- 게시판 관련  -->
    <!-- Bootstrap 3.3.4 -->
    <link href="${context}/resources/other_resources/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <!-- Font Awesome Icons -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <!-- Ionicons -->
    <link href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css" />
    <!-- Theme style -->
    <link href="${context}/resources/other_resources/dist/css/AdminLTE.min.css" rel="stylesheet" type="text/css" />
    <!-- AdminLTE Skins. Choose a skin from the css/skins 
         folder instead of downloading all of them to reduce the load. -->
    <link href="${context}/resources/other_resources/dist/css/skins/_all-skins.min.css" rel="stylesheet" type="text/css" />

<script src="${context}/resources/js/vendor/jquery-2.2.4.min.js"></script>
	<%-- <script src="${context}/resources/js/app.js"></script> --%>
	<script src="${context}/resources/js/popper.min.js"></script>
	<script src="${context}/resources/js/vendor/bootstrap.min.js"></script>
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA"></script>
	<script src="${context}/resources/js/easing.min.js"></script>
	<script src="${context}/resources/js/hoverIntent.js"></script>
	<script src="${context}/resources/js/superfish.min.js"></script>
	<script src="${context}/resources/js/jquery.ajaxchimp.min.js"></script>
	<script src="${context}/resources/js/jquery.magnific-popup.min.js"></script>
	<script src="${context}/resources/js/jquery.tabs.min.js"></script>
	<script src="${context}/resources/js/jquery.nice-select.min.js"></script>
	<script src="${context}/resources/js/isotope.pkgd.min.js"></script>
	<script src="${context}/resources/js/waypoints.min.js"></script>
	<script src="${context}/resources/js/jquery.counterup.min.js"></script>
	<script src="${context}/resources/js/simple-skillbar.js"></script>
	<script src="${context}/resources/js/owl.carousel.min.js"></script>
	<script src="${context}/resources/js/mail-script.js"></script>
	<script src="${context}/resources/js/main.js"></script>


</head>
<body>
	<div id="wrapper">
		<div id="header">
			<tiles:insertAttribute name="header" />
		</div>
		<!-- header end -->
		<div id="content">
			<tiles:insertAttribute name="content" />
		</div>

		<!-- content end -->
		<div id="footer">
			<tiles:insertAttribute name="footer" />
		</div>
	</div>
	
	<script>
	
	/* app.init('${context}'); */

	</script>
</body>
</html>