function datacheck(num){
	if ((isNaN(num) ? 0 : 1) && num.length !== 0 ){
		return num;
	}else{
		alert('Invalid input data');
		throw "stop";
	}
}
function descsol(){
	var a = prompt('Enter first number', 3);
	if (a === 0){
		alert('Invalid input data');
		throw "stop";
	}
	datacheck(a);
	var b = prompt('Enter second number', 18);
	datacheck(b);
	var c = prompt('Enter third number', 27);
	datacheck(c);
	var diskr = b*b - 4*a*c;
	if (diskr > 0 && (a !== 0)){
		var sqrt = Math.sqrt(b*b-4*a*c);
		var x1 = ((-b + sqrt)/2/a);
		var x2 = ((-b - sqrt)/2/a);
		alert("x1= " + x1);
		alert("x2= " + x2);
	}else if (diskr === 0){
			var x = (-b/2*a);
			alert("x= " + x);
	}else{
		alert('no solution ');
	}
}
descsol();
