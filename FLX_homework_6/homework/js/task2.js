function datacheck(num){
	if ((isNaN(num) ? 0 : 1) && num.length !== 0 && num <= 9999999 && num > 0){
		return num;
	}else{
		alert('Invalid input data');
		throw "stop";
	}
}
var money = prompt('Enter sum', 100);
var disc = prompt('Enter discount', 20);
datacheck(money);
datacheck(disc); 
var totaldisc = money - money*disc/100;
var savings = money - totaldisc;
alert(`Price without discount: ${money} 
Discount: ${disc}%;
Price with discount: ${Math.floor(totaldisc*100)/100}
Saved:  ${Math.floor(savings*100)/100}`);

