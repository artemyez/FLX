function addOne(x){
  return x+1;
}

function pipe(){
	var x = arguments[0];
	for(var i = 1; i < arguments.length; i++){
		var func = arguments[i];
		x = func(x)
	}
	return x;
}

pipe(1, addOne);
pipe(1, addOne, addOne);