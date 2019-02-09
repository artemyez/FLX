function formatTime(num){
	var day = num/(60*24)
	day = day ^ 0; 
	num -= (60*24)*day 
	var hour = num/60
	hour = hour ^ 0; 
	num -= 60*hour
	var min = num
	return day + " day(s) " + hour + " hour(s) " + min + " minute(s) ";
}

formatTime(120);
formatTime(59);
formatTime(3601);