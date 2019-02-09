var login = prompt("Enter you name:", "");
var daygreeting = "";
var currenttime = new Date().getHours();
if (currenttime < 20){
	daygreeting = "Good day";
}else{
	daygreeting = "Good evening"
}

if (login === null || login.length === 0){
	alert("Canceled");
} else if (login.length < 4){
	alert("I don't know any users having name length less than 4 symbols");
} else if (login === "User" || login === "Admin"){
	var pass = prompt("Enter you pass:", "");
	if(login === "User" && pass === "UserPass"){
		alert(daygreeting + ", dear User!")
	}else if (login === "Admin" && pass === "RootPass"){
		alert(daygreeting + ", dear Admin!")
	}else if (pass === null || pass.length === 0){
	alert("Canceled");
	}else{
		alert("Wrong password");
	}
} else {
	alert("I don’t know you");
}


