// Your code goes here

//#1
function findTypes(){
	var arr = [];
	for(var i in arguments){
		arr.push(typeof arguments[i]);
	}
	return arr
}

findTypes(null, 5, "hello");

//#2

function executeforEach(arr, arrfunc){
	for(var k in arr){
		arrfunc(arr[k]);
	} 
}

executeforEach([1, 2, 3], function(el) {
 console.log(el) 
 }) // logs 1 2 3

//#3

function mapArray(arr, arrfunc){
	let modarr = [];
	executeforEach(arr, function(num){
		modarr.push(arrfunc(num))
	})
	return modarr;
}

mapArray([2, 5, 8], function(el) {
	return el + 3 
 }) // returns [5, 8, 11]

//#4

function filterArray(arr, arrfunc){
	let filarr = [];
	executeforEach(arr, function(num){
		if (arrfunc(num)){
			filarr.push(num);
		}
	});
	return filarr;
}

filterArray([2, 5, 8], function(el) {
	return el > 3 
 }) // returns [5, 8]

//#5

function getAmountOfAdultPeople(data){
	let arrel = mapArray(data, function(el) {
		return el.age
	})
	var j = 0
	filterArray(arrel, function(el) {
		if(el > 18){
			j++
		}
		return j
	})
	return j
}

getAmountOfAdultPeople();// returns 3

//#6
function getGreenAdultBananaLovers(data){
	let arrel = filterArray(data, function(el) { 
		if(el.age > 18 && el.favoriteFruit === "banana" && el.eyeColor === "green"){
		return el
		}
	})
	arrel = mapArray(arrel, function(el) {
	return el.name
	})
	return arrel
}


getGreenAdultBananaLovers(); // returns [‘George]

//#7

function keys(obj){
	var keys = []
	for (var i in obj){
		keys.push(i)
	}
	return keys
}

keys({keyOne: 1, keyTwo: 2, keyThree: 3}) // returns [“keyOne”, “keyTwo”, “keyThree”]

//#8

function values(obj){
	var value = []
	for (var i in obj){
		value.push(obj[i])
	}
	return value
}


values({keyOne: 1, keyTwo: 2, keyThree: 3}) // returns [1, 2, 3]

//#9

function showFormattedDate(date){
	let day = date.getDate();
	let month = date.toLocaleString('en-us', {
	month: 'short'
	});
	return("Date: " + day + " of " + month + " " + date.getFullYear());
}

showFormattedDate(new Date('2019-01-27T01:10:00')) // returns ‘Date: 27 of Jan, 2019’

//#10

function isEvenYear(date){
	let year = date.getFullYear();
	let result = ((year%2 === 0) === true);
	if (result === true){
		return true;
	}else{
		return false;
	}
}

isEvenYear(new Date('2019-01-27T01:10:00')) // false

//#11
function isEvenMonth(date){
	let month = date.getMonth()+1;
	let result = ((month%2 === 0) === true);
	if (result === true){
		return true;
	}else{
		return false;
	}
}

isEvenMonth(new Date('2019-02-27T01:10:00')) // true
