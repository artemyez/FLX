function getMin() {
var arr = [];
for(var i = 0; i < arguments.length; i++){
	arr.push(arguments[i]);
}
	arr = arr.sort(function (a, b) {
	return a - b; 
	});
	return arr[0];
}

getMin(3, 0, -3);