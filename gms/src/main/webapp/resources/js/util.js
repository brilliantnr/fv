"user strict";

$.prototype.nullChecker = x => {
//원형에 기능부여하고, 그걸 가져다 쓴다.
	let flag = false;
	let i = 0;
	for (i in x) {
		if (x[i] === '') {
			flag = true;
		}
	}
	return flag;
}

$.prototype.zeroChecker = x => {
	//원형에 기능부여하고, 그걸 가져다 쓴다.
		let flag = false;
		let i = 0;
		for (i in x) {
			if (x[i] == 0) {
				flag = true;
			}
		}
		return flag;
	}

$.prototype.anchor= x=>{
	return $('<a/>')
	.attr({href :'#'})
	.html(x.txt);
	
//	할당을 안쓰려고 하는게 람다
}



