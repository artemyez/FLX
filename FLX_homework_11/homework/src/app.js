let rootNode = document.getElementById('root');
// Your code goes here
const add_btn = document.querySelector('.btn');
add_btn.disabled = true;
const input_field = document.querySelector('[name="addnewline"]');
const max_item_num = 10;
let active_items = 0;
let listitems = document.getElementById('listitems')
let maxitleng = document.getElementById('maxitleng');

function items_num(){
	active_items = document.getElementById('listitems').getElementsByTagName('li').length;
}

input_field.onkeyup = function(){
	if(!input_field.value.trim()){
		add_btn.disabled = true;
	}else{
		add_btn.disabled = false;
	}
}

add_btn.onclick = function(){
	items_num();
	add_item();
	input_field.value = '';
}

 function add_item(){

	const newLi = document.createElement('li');
	newLi.className = 'listyle';
	newLi.setAttribute('draggable', true);

	const check_box = document.createElement('button');
	check_box.className = 'check_box'

	let check_box_i = document.createElement('i');
	check_box_i.className = 'material-icons';
	check_box_i.innerHTML = 'check_box_outline_blank'

	let text = input_field
	text = document.createTextNode(text.value)

	let deleteic = document.createElement('button');
	deleteic.className = 'material-icons delete_item';
	deleteic.innerHTML = 'delete';

	listitems.appendChild(newLi);
	newLi.appendChild(check_box);
	check_box.appendChild(check_box_i);
	newLi.appendChild(text);
	newLi.appendChild(deleteic);

	check_box.onclick = function(){
		check_box_i.innerHTML = 'check_box';
	}
	items_num();
	if (active_items === max_item_num){
		maxitleng.hidden = false;
		add_btn.disabled = true;
		input_field.disabled = true;
	}else{
		maxitleng.hidden = true;
		add_btn.disabled = true;
	}

	deleteic.onclick = function(){
		newLi.remove();
		items_num();
		maxitleng.hidden = true;
		add_btn.disabled = true;
		input_field.disabled = false;
	}
}

let dragged;

document.addEventListener('dragstart', function(event){
	dragged = event.target;
});

document.addEventListener('dragover', function(event){
	if(event.target.className === 'listyle'){
		event.preventDefault();
		event.target.style.background = 'lightgrey';
	}
});

document.addEventListener('dragleave', function (event){
	event.target.style.background = '';
});

document.addEventListener('drop', function(event){
	if(event.target.className === 'listyle'){
		event.preventDefault();
		event.target.style.background = '';
		listitems.insertBefore(dragged, event.target)
		event.target.style.background = '';
	}
});