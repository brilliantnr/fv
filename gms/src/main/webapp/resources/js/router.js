"use strict";
function Session(x){
	sessionStorage.setItem('context',x);
	sessionStorage.setItem('script',x+'resources/js');
	sessionStorage.setItem('style',x+'resources/css');
	sessionStorage.setItem('img',x+'resources/img');
	return{ 
		/*node.js 용어 사용함*/
	ctx : ()=> { return sessionStorage.getItem('context');},
	script : ()=> { return sessionStorage.getItem('script');},
	style : ()=> { return sessionStorage.getItem('style');},
	img : ()=> { return sessionStorage.getItem('img');}
	}
}




