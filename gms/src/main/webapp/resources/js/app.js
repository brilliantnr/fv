 "use strict";
 /*$.getJSON('',e=>{});*/
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
		console.log('app.main.setContentView 진입');
		app.router.home({header:'header'});
	};
	return {init : init};
})();

//회원가입,로그인
app.permission = (()=>{
	var login =()=>{
		//alert('로그인 진입');
		$('#footer').remove();
		$('#content').empty();

		$.getScript($.script()+'/login.js',()=>{
			$('#content').html(loginUI());
			$.getScript($.script()+'/compo.js',()=>{
				$.getScript($.script()+'/login.js',()=>{
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
			});
		});
	};
	var join =()=>{
		alert('회원가입 진입');
		$.getScript($.script()+'/compo.js',()=>{
			$.getScript($.script()+'/join.js',()=>{
					$('#content').html(joinUI());
					/*for(var i=0; i<arr.length; i++){
						alert(arr[i]);
					}*/
					ui.btn({txt:"JOIN",calzz:'secondary'})
					.appendTo("#contentBox")
					.click(e=>{
						e.preventDefault();
						alert('click-------');
						var arr =[];
						var sub = $("[name='subject']");
						let i;
						for(i of sub){
							if(i.checked){
								alert('선택된 과목 :: '+i.value);
								arr.push(i.value);
							}
						}
						
						$.ajax({
							method:'POST',
							url: $.ctx()+'/member/join',
							contentType:'application/json',
							data:JSON.Stringify({
								userid:$('#userid').val(),
								name:$('#name').val(),
								ssn:$('#ssn').val(),
								password:$('#password').val(),
								teamid:$('input[name=teamid]:selected').val(),
								roll:$('#roll').val(),
								subject:JSON.Stringify(arr)
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
			});
		
		
	};
	return{login: login,
		join: join
		};
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
		//전체글 보기
		app.service.boards(1);
		
		
		//회원글리스트 보기		
		app.service.my_boards({id: x.id, pageNo: x.pageNo});
	};

	return{init:init}; 
})();
app.service = {
		boards : x=>{
			$.getJSON($.ctx()+'/boards/'+x,d=>{
				$('#content').empty();
				$.getScript($.script()+'/compo.js',()=>{
					let x = {
							type : 'default',
							id : 'table',
							head : '게시판',
							body : '오픈 게시판... 누구든지 사용가능',
							list : ['No.','제목','내용','글쓴이','작성일','조회수']
					};
					
					ui.div({id:'listContent', style:'margin: 160px 60px '}).appendTo($('#content'));
					(ui.tbl(x)).appendTo($('#listContent'));
					
					$.each(d.list,(i,j)=>{
						//d.list <- BoardCtrl의 map에 담긴 list
						$('<tr/>').append(
								$('<td/>').attr('width','5%').html(j.bno),
								$('<td/>').attr('width','10%').html(j.title),
								$('<td/>').attr('width','50%').html(j.content),
								$('<td/>').attr('width','10%').html(j.writer),
								$('<td/>').attr('width','10%').html(j.regdate),
								$('<td/>').attr('width','5%').html(j.viewcnt)	
						).appendTo($('tbody'));
					})
					console.log('y전 ');
					ui.page({}).appendTo($('#listContent'));
					//(ui.page(y)) 자체가 dom객체. return값이 있어야 한다.
					//(dom객체).appendTo(파라미터값);
					//d.page <-map

					// .<-class
					let ul = $('.pagination');
					let existPrev = x.existPrev;
					let existNext = x.existNext;
					let prev = '', next ='';
					
					prev = (existPrev)? '': 'disabled';
					next = (existNext)? '':'disabled';

					//Previous
					$('<li/>').addClass('page-item '+prev).append(
							$('<a/>').addClass('page-link').attr({href:"#",  tabindex:"-1"}).html('◀ Pre')
							.click(e=>{
								alert(' 이전 페이지 !!');
								e.preventDefault();
								console.log('d.page.preBlock)'+d.page.preBlock);
								app.service.boards(d.page.preBlock);
							})
					).appendTo(ul);
					//page
					console.log('d.beginPage : '+d.page.beginPage);
					console.log('d.endPage : '+d.page.endPage);
					
					for(let i=d.page.beginPage; i<= d.page.endPage; i++){
						let act = "";
						if(i==d.page.pageNum){
							console.log('현재 페이지 :: '+d.page.pageNum);
							act = "active";
							console.log('현재 active :: '+act);
						}
						$('<li/>').addClass('page-item '+act).attr({id:""+i}).append(
								$('<a/>').addClass('page-link').attr({href:"#"}).html(i)
								.click(e=>{
									e.preventDefault();
									alert('페이지: '+i);
								/*	$.getJSON('',e=>{});*/
									app.service.boards(i);
								})
						).appendTo(ul);
					}
					//Next
					$('<li/>').addClass('page-item '+next).append(
							$('<a/>').addClass('page-link').attr({href:"#"}).html('Next ▶')
							.click(e=>{
								e.preventDefault();
								alert(' 다음 페이지 !!');
								console.log('d.page.nextBlock)'+d.page.nextBlock);
								app.service.boards(d.page.nextBlock);
							})
					).appendTo(ul);
					
					
					
				});
				console.log('getJSON 성공!!');
			});
		},
		my_boards : x=>{
			$.getJSON($.ctx()+'/boards/'+x.id+'/'+x.pageNo,d=>{
				$.getScript($.script()+'/compo.js',()=>{
					let x = {
							type : 'warning',
							id : 'table',
							head : '게시판',
							body : '내가 쓴 글 리스트',
							list : ['No.','제목','내용','글쓴이','작성일','조회수']
					};
					
					ui.div({id:'listContent', style:'margin: 160px 60px '}).appendTo($('#content'));
					(ui.tbl(x)).appendTo($('#listContent'));
					
					$.each(d.list,(i,j)=>{
						//d.list <- BoardCtrl의 map에 담긴 list
						$('<tr/>').append(
								$('<td/>').attr('width','5%').html(j.bno),
								$('<td/>').attr('width','10%').html(j.title),
								$('<td/>').attr('width','50%').html(j.content),
								$('<td/>').attr('width','10%').html(j.writer),
								$('<td/>').attr('width','10%').html(j.regdate),
								$('<td/>').attr('width','5%').html(j.viewcnt)	
						).appendTo($('tbody'));
					})
					console.log('y전 ');
					ui.page({}).appendTo($('#listContent'));

					let ul = $('.pagination');
					let existPrev = x.existPrev;
					let existNext = x.existNext;
					let prev = '', next ='';
					
					prev = (existPrev)? '': 'disabled';
					next = (existNext)? '':'disabled';

					//Previous
					$('<li/>').addClass('page-item '+prev).append(
							$('<a/>').addClass('page-link').attr({href:"#",  tabindex:"-1"}).html('◀ Pre')
							.click(e=>{
								alert(' 이전 페이지 !!');
								e.preventDefault();
								console.log('d.page.preBlock)'+d.page.preBlock);
								app.service.boards(d.page.preBlock);
							})
					).appendTo(ul);
					//page
					console.log('d.beginPage : '+d.page.beginPage);
					console.log('d.endPage : '+d.page.endPage);
					
					for(let i=d.page.beginPage; i<= d.page.endPage; i++){
						let act = "";
						if(i==d.page.pageNum){
							console.log('현재 페이지 :: '+d.page.pageNum);
							act = "active";
							console.log('현재 active :: '+act);
						}
						$('<li/>').addClass('page-item '+act).attr({id:""+i}).append(
								$('<a/>').addClass('page-link').attr({href:"#"}).html(i)
								.click(e=>{
									e.preventDefault();
									alert('페이지: '+i);
								/*	$.getJSON('',e=>{});*/
									app.service.boards(i);
								})
						).appendTo(ul);
					}
					//Next
					$('<li/>').addClass('page-item '+next).append(
							$('<a/>').addClass('page-link').attr({href:"#"}).html('Next ▶')
							.click(e=>{
								e.preventDefault();
								alert(' 다음 페이지 !!');
								console.log('d.page.nextBlock)'+d.page.nextBlock);
								app.service.boards(d.page.nextBlock);
							})
					).appendTo(ul);
					
					
					
				});
				console.log('getJSON 성공!!');
			});
		}
};


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
					$('#join_btn').click(e=>{
						app.permission.join();
					});
					$('#board').click(e=>{
						app.board.init();
					});
					$('#my_board').click(e=>{
						app.board.init();
					});
					console.log(' when done 로드성공');
			})
			.fail(x=>{console.log(' when fail 로드실패');})
		console.log('app.main.setContentView 진입');
	}
};










//==================================================================================	
/* List로 
 * 	var setContentView =()=>{
alert('게시판');
$('#footer').remove();
$('#content').empty();
$.getJSON(ctx+'/boards/1',d=>{			
	$.getScript($.script()+'/compo.js',()=>{
		let x = {
				type : 'default',
				id : 'table',
				head : '게시판',
				body : '오픈 게시판... 누구든지 사용가능',
				list : ['No.','제목','내용','글쓴이','작성일','조회수']
		};
		
		ui.div({id:'listContent', style:'margin: 160px 60px '}).appendTo($('#content'));
		(ui.tbl(x)).appendTo($('#content'));
		
		$.each(d,(i,j)=>{
			$('<tr/>').append(
					$('<td/>').attr('width','5%').html(j.bno),
					$('<td/>').attr('width','10%').html(j.title),
					$('<td/>').attr('width','50%').html(j.content),
					$('<td/>').attr('width','10%').html(j.writer),
					$('<td/>').attr('width','10%').html(j.regdate),
					$('<td/>').attr('width','5%').html(j.viewcnt)	
			).appendTo($('tbody'));
		})
	});
	console.log('getJSON 성공!!');
});
};*/





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
