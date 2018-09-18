"use strict";

var ui={
//콜백내부(async)에서 쓸거라 var 사용
	div : x=>{return $('<div/>').attr(x)
		},
	anchor : x =>{return $('<a/>').attr({href :'#'}).html(x.txt);
	},
	ul : x=>{
		let ul = $('<ul/>');
		for(var i=0;i<x.len;i++){
			$('<li/>').attr({id:x.id+'-'+i}).appendTo(ul);
		}
		return ul;
	},
	input : x=>{
		let p = ui.div({}).addClass("input-group mb-3");
		(ui.div({id:'input-group-prepend'})
				.addClass("input-group-prepend"))
				.html('<span class="input-group-text" id="basic-addon1">'
						+ x.txt
						+'</span>').appendTo(p);
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
		return $('<button/>').attr('type','button').addClass('btn btn-'+x.clazz).html(x.txt)
	},
	
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


