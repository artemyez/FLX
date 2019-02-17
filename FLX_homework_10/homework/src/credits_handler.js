function userCard(index){
	let balance = 100;
	let transactionLimit = 100; 
	let historyLogs = []; 
	let key = index; 
	
	return{
		getCardOptions(){
			return {key, balance, transactionLimit, historyLogs}
		},
		
		putCredits(amount){
			balance += amount;
			this.func_log_hist('Received credits', amount)
		},
		
		takeCredits(amount){
			if (amount <= balance && amount <= transactionLimit){
				balance -=amount;
				this.func_log_hist('Withdrawal of credits', amount);
			}else{
				console.error('Please check your withdraw balance and limit');
			}
		},
		
		setTransactionLimit(amount){
			transactionLimit = amount;
			this.func_log_hist('Transaction limit change', amount);
		},
		
		transferCredits(amount, card_num){
			const tax_persent = 0.005;
			let tax = amount*tax_persent;
			let transfer_amount = amount + tax 
			if (transfer_amount <= balance && amount <= transactionLimit){
				this.takeCredits(transfer_amount);
				card_num.putCredits(amount);
			}else{
				console.error('Please check your withdraw balance and limit');
			}
		},
		
		func_log_hist(oper_type, value, time = new Date().toLocaleString('en-GB')){
			historyLogs.push({
				operationType: oper_type,
				credits: value,
				operationTime: time
			});
		}
			
		
	}
}

function UserAccount(name){
	this.name = name;
	this.cards = [];
	this.max_card_quantity = 3;
	
	this.addCard = function(){
		if(this.cards.length < this.max_card_quantity){
			this.cards.push(userCard(this.cards.length+1))
		}else{
			console.error('You exceed max card quantity')
		}
	}
	this.getCardByKey = function(key){
		return this.cards[key-1];
	}
}

