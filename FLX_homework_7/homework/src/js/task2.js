var price = {
	pricewin: 0,
	firstselect:{
	1: 10,
	2: 5,
	3: 2
	}
}
var alerts = {	
	playgame: "Do you want to play a game?",
	not_want: "You did not become a millionaire, but can.",
	enter_num: "Please enter you number:",
	userwin: "Congratulation! Your prize is: ",
	didnotwin: "Thank you for a game. Your prize is: ",
	onemore: "Do you want to continue?"
}
var want_cont = true;
class startgame {
	static game(range, winincrease){		
		var rand = Math.round(Math.random() * range)
		//console.log(rand);
		for (var i=0; i < 3; i++){
			if(want_cont === true){
			var usernum = prompt(`Enter numbers from 0 to ${range}
				Attempts left: ${(3-i)}
				Total price: ${price.pricewin}
				Possible prize on current attempt: ${price.firstselect[i+1]*winincrease}`);
				if (+usernum === rand && usernum !== null){
				price.pricewin += price.firstselect[i+1]*winincrease;
				let winconf = confirm(alerts.userwin + price.pricewin + "$" + "\n" + alerts.onemore)
					if(winconf === true){
						startgame.game(10, 3);
					}else{
						alert(alerts.didnotwin + price.pricewin + "$"); 
						let looses = confirm(alerts.onemore);
							if (looses === true){
								startgame.game(10, 3);
							}else{
								want_cont = false;
							}
					}
				}else if (usernum !== rand && i<2 && usernum !== null){
					continue;
				}else{
				alert(alerts.didnotwin + price.pricewin + "$");
				let loose = confirm(alerts.onemore)
					if (loose === true){
						startgame.game(5, 1);
					}else{
						want_cont = false;
					}
				}
			}else if (want_cont === false){
				break;
			}
		}
	}
}

confirm(alerts.playgame) ? startgame.game(5, 1) : alert(alerts.not_want);