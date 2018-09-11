<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<script>
/* common.main('${context}'); */
/* 
document.getElementById('login_btn')
.addEvnetListener('click',function(){});
= $('#login_btn')
*/
$('#login_btn')
.on('click',function(){
	alert('로그인 버튼');
});

</script>
</body>
</html>