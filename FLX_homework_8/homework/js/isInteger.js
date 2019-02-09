function isInteger(num){
	return (num ^ 0) === num;
}

isInteger(5);
isInteger(5.1);
