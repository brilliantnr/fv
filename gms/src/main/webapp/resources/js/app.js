 "use strict";
var app = app || {};

app =(()=>{
	var initEntrance =x=>{
		console.log('step1 : app.init 진입');
		app.router.init(x);
	};
	return {init : initEntrance};
})();

app.main =(()=>{
	var w, header, footer, content, ctx, script, style, img;
	var init =()=>{
		console.log('step5 : app.main.init ::  진입');
		ctx = $.ctx();  
		script = $.script();
		style = $.style();
		img = $.img();
		w=$('#wrapper');
		onCreate();
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
		app.router.home({header:'header'});
	};
	return {init : init};
})();

//회원가입,로그인
//.html 쓰면 .empty할 필요없다
app.permission = (()=>{
	var login =()=>{
		//alert('로그인 진입');
		$('#footer').remove();
		$('#content').empty();
		$.getScript($.script()+'/login.js',()=>{
			$('#content').html(loginUI());
			$('#login_submit').click(e=>{
				$.ajax({
					method: 'POST',
					url: $.ctx()+'/member/login',
					contentType: 'application/json',
					data: JSON.stringify({userid:$('#userid').val(), password:$('#password').val()}),
					success: d=>{
						alert('ID :: '+d.ID);
						alert('PW :: '+d.PW);
						alert('MBR :: '+d.MBR);
						if(d.ID==="WRONG"){
							alert('ID 확인해주세요');
						}else if(d.PW==="WRONG"){
							alert('비밀번호 확인해주세요');
						}else{
							//통과
							app.router.home({header:'auth'});
						}
						
					},
					error: (m1,m2,m3)=>{
						alert('에러발생 : '+'m1 : '+m1+'m2 : '+m2+'m3 : '+m3);
					}
				});
			});
			
		});
	};
	var add =()=>{
		alert('회원가입 진입');
		$('#footer').remove();
		$('#content').empty();
		$.getScript($.ctx()+'/member/add',()=>{
			$('#content').html(addUI());
			$('#join_submit').click(e=>{
				$.ajax({
					method:'POST',
					url: $.ctx()+'/member/add',
					contentType:'application/json',
					data:JSON.Stringify({
						userid:$('#userid').val(),
						name:$('#name').val(),
						ssn:$('#ssn').val(),
						password:$('#password').val(),
						teamid:$('input[name=teamid]:selected').val(),
						roll:$('#roll').val(),
						//subject:$('#subject').val()
					}),
					success:d=>{
						alert('회원가입 성공');
						console.log();
					},
					error: (m1,m2,m3)=>{
						alert('에러발생 : '+'m1 : '+m1+'m2 : '+m2+'m3 : '+m3);
					}
				});
			});
		});
	};
	var logout =()=>{
		$()
	};
	
	
	return{login: login,
		add: add,
		logout: logout};
	//스칼라로 해야됨. return안에 login과 add를 json형태로 같이 두어야 함.
})();

app.board =(()=>{
	var w, header, footer, content, ctx, script, style, img;
	var init =()=>{
		console.log('step5 : app.board.init ::  진입');
		ctx = $.ctx();
		script = $.script();
		style = $.style();
		img = $.img();
		w=$('#wrapper');
		onCreate();
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
		alert('게시판');
		$('#footer').remove();
		$('#content').empty();
	};
	return{init:init}; 
})();

app.router = {
	init : x=>{
		console.log('step2 : app.router.init 진입');
		$.getScript(x+'/resources/js/router.js', ()=>{
				console.log('step3 : app.router.init ::  getScript');
				$.extend(new Session(x));
				console.log('step3 : app.router.init ::  extend 완료');
				$.getScript(x+'/resources/js/util.js')
				.done(()=>{console.log('step4 : app.router.init :: 성공');})
				.fail(()=>{console.log('step4 : app.router.init :: 실패');});
					app.main.init();
				}
			);
	},
	home : x=>{
		$.when(
				$.getScript($.script()+'/'+x.header+'.js'),
				$.getScript($.script()+'/content.js'),
				$.getScript($.script()+'/footer.js'),
				$.Deferred(y=>{
					$(y.resolve);
				})
			).done(x=>{
				$('#wrapper').html(headerUI()
							+contentUI()
							+footerUI()
					);
					$('#login_btn').click(e=>{
						e.preventDefault();
						app.permission.login();
					});
					$('#logout_btn').click(e=>{
						app.router.home({header:'header'});
					});
					$('#board').click(e=>{
						app.board.init();
					});
					console.log(' when done 로드성공');
			})
			.fail(x=>{console.log(' when fail 로드실패');})
		console.log('app.main.setContentView 진입');
	}
};












//==================================================================================	

/*
//안드로이드, 노드의 핵심 코딩  
app = (x=>{
		var init = x =>{
			console.log('step1');
			app.session.context(x);  //세션에 제일 먼저 경로 저장
			app.onCreate();//init에서 onCreate기능 생성
		},
		var onCreate = ()=>{
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
				//DOM 객체 이용
				 var form = document.getElementById('join_form');
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
})();
*/
