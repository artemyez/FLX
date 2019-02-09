function reverseNumber(num){
num = num.toString().split('')
	if (num[0] !== "-"){
		num = +num.reverse().join('')
	}else if(num[0] === "-"){
		num.shift()
		num = +num.reverse().join('')
		num = -num;
	}
	return num;
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);
