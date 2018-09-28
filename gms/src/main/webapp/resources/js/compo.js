"use strict";
//컴포넌트 - 이벤트없음


var ui={
//콜백내부(async)에서 쓸거라 var 사용
	div : x=>{return $('<div/>').attr(x);},
	anchor : x =>{return $('<a/>').attr({href :'#'}).html(x.txt);},
	ul : x=>{
		console.log('=== ui.ul === ');
		let ul = $('<ul/>').addClass('list-group');
		for(var i=0;i<x.len;i++){
			$('<li/>').addClass('list-group-item').attr({id:x.id+'-'+i}).appendTo(ul);
		}
		return ul;
	},
	input : x=>{
		let p = ui.div({}).addClass("input-group mb-3");
		(ui.div({id:'input-group-prepend'})
				.addClass("input-group-prepend"))
				.html('<span class="input-group-text" id="basic-addon1">'+ x.txt+'</span>').appendTo(p);
		/*ui.span({
			id: "basic-addon1",
			value: x.div__val
		}).appendTo($('#input-group-prepend'));*/
		$("<input/>").attr({
			id : x.id,
			type: 'text',
			placeholder:"입금액" ,
			"aria-label":"Username", 
			"aria-describedby":"basic-addon1"
		}).addClass("form-control").appendTo(p);
		return p;
	},
	label: x=>{
		return $('<label/>').attr('for',x.id).text(x.txt);
	},
	btn: x=>{
		return $('<button/>')
		.attr({'type':'button',
			'id':x.id})
		.addClass('btn btn-'+x.clazz)
		.html(x.txt)
	},
	tbl : x=>{
		/*<div class="panel panel-default">
		  <div class="panel-heading">Panel heading</div>
		  <div class="panel-body">
		    <p>...</p>
		  </div>
		  <!-- Table -->
		  <table class="table">
		    ...
		  </table>
		</div>*/
		let d =  $('<div/>').addClass('panel panel-'+x.type);
		let ph = $('<div/>').addClass('panel-heading').html(x.head);
		let pb = $('<div/>').addClass('panel-body');
		let p = $('<p/>');
		d.appendTo($('#listContent'));
		ph.appendTo($('#listContent'));
		pb.appendTo($('#listContent'));
		p.text(x.body).appendTo(pb);
		
		let t= $('<table/>');
		let tr = $('<tr/>');
		let thead = $('<thead/>');
		let tbody = $('<tbody/>');
		$.each(x.list,(i,j)=>{
			$('<th/>').html(j).appendTo(tr);
		});
		tr.appendTo(thead);
		
		thead.appendTo(t);
		tbody.appendTo(t);
		
		return t;
	},
	page : x=>{
		/*<nav aria-label="...">
		  <ul class="pagination">
		    <li class="page-item disabled">
		      <a class="page-link" href="#" tabindex="-1">Previous</a>
		    </li>
		    <li class="page-item"><a class="page-link" href="#">1</a></li>
		    <li class="page-item active">
		      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
		    </li>
		    <li class="page-item"><a class="page-link" href="#">3</a></li>
		    <li class="page-item">
		      <a class="page-link" href="#">Next</a>
		    </li>
		  </ul>
		</nav>*/
		
		let nav = $('<nav/>');
		let ul = $('<ul/>').addClass('pagination').appendTo(nav);
		/*
		let existPrev = x.existPrev;
		let existNext = x.existNext;
		let prev = '', next ='';
			prev = (!existPrev)? 'disabled': '';
			next = (!existNext)? 'disabled': '';

		//Previous
		$('<li/>').addClass('page-item '+prev).append(
				$('<a/>').addClass('page-link').attr({href:"#",  tabindex:"-1"}).html('◀ Pre')
		).appendTo(ul);
		//page
		for(let i=x.beginPage; i<= x.endPage; i++){
			let act = "";
			if(i==x.blockNum){
				console.log('현재 페이지 :: '+x.blockNum);
				act = "active";
			}
			$('<li/>').addClass('page-item '+act).attr({id:""+i}).append(
					$('<a/>').addClass('page-link').attr({href:"#"}).html(i)
					.click(e=>{
						alert('페이지: '+i);
					})
			).appendTo(ul);
		}
		//Next
		$('<li/>').addClass('page-item '+next).append(
				$('<a/>').addClass('page-link').attr({href:"#"}).html('Next ▶')
		).appendTo(ul);
		*/
		return nav; 
	}
	
}










/*
Primary (blue)
Secondary (gray)
Success (green)
Danger (red)
Warning (yellow)
Info (light blue)
Light (white)
Dark (black)
Link
*/

/*
input2 : x=>{
	let p = ui.div({}).addClass("input-group mb-3");
	ui.div({}).addClass("input-group-prepend").appendTo(p);
	$('#test').html('<span class="input-group-text" id="basic-addon1">@</span>');
	return p;
},
inputGroupPrepend : x=>{
	//리턴타입 스트링이면 .html로 해야한다. append 쓰면 안돼
	return
	'<div class="input-group mb-3">'
	+'<div class="input-group-prepend">'
	+'<span class="input-group-text" id="basic-addon1">@</span>'
	+' </div>'
	+'<input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">'
	+'</div>'
}*/

