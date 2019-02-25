const rootNode = document.getElementById('root');

//const todoItems = [
//    {isDone: false, id: 12345, description: 'Todo 1'}
//];

// Your code goes here
let j = 0;
const todoItems = [];
function modify_isDone(id){
	let result = todoItems.filter(function(obj){
		return obj.id === +id
	})
	result[j].isDone = true
	delete_todo_item(id)
	todoItems.push(result[j])
}

function modify_description(id, description){
	let result = todoItems.filter(function(obj){
		return obj.id === +id
	})
	result[j].description = description;
}


function delete_todo_item(id){
	for (let i = 0; i < todoItems.length; i++){
		if (todoItems[i].id === +id) {
			todoItems.splice(i,1);
		}
	}
}

function add_todo_item(description){
	let i = 1;
	let new_id = todoItems.length && Math.max.apply(Math, todoItems.map(function(o) {
		return o.id; 
		}
		)) + i
	todoItems.push({
		isDone: false,
		id: new_id,
		description: description
	})
}


const add_task = document.querySelector('.add_task');
const btn_canc = document.querySelector('.btn_canc');
const btn_canc_m = document.querySelector('.btn_canc_m');
const main_page = document.querySelector('.main_page');
const add_item = document.querySelector('.add_item');
const modify = document.querySelector('.modify');
const addnewline = document.querySelector('.addnewline');
const input_field = document.querySelector('[name="addnewline"]');
const change_field = document.querySelector('[name="change_line"]');
const btn_save = document.querySelector('.btn_save');
const btn_save_changes = document.querySelector('.btn_save_changes');
let listitems = document.getElementById('listitems');
let lielement = document.getElementById('listitems').getElementsByTagName('li');
let active_items = 0;
let empty_list = document.getElementById('empty_list');
let hidden_id_field = document.getElementById('hidden_id_field');

function isempty(){
	active_items = document.getElementById('listitems').getElementsByTagName('li').length;
	if (active_items === j){
		document.querySelector('.empty_list').hidden = false;
	}else{
		document.querySelector('.empty_list').hidden = true;
	}
	
}

add_task.onclick = function (event) {
	what_to_show()
	window.location.href += '#/add';
}

function backorcanc() {
	window.history.replaceState(null, null, ' ');
}

function items_num(){
	active_items = document.getElementById('listitems').getElementsByTagName('li').length;
}

btn_canc.onclick = function(){
	backorcanc();
	what_to_show()
}

btn_canc_m.onclick = function(){
	backorcanc();
	what_to_show()
}

btn_save.onclick = function(){
	if (input_field.value.length !== j){
		add_item_fun();
		input_field.value = '';
		backorcanc()
		what_to_show()
	}
}

btn_save_changes.onclick = function(e){
	modify_description(hidden_id_field.value, change_field.value);
	let idd = hidden_id_field.value
	document.getElementById(idd).childNodes[1].data = change_field.value
	backorcanc();
	what_to_show()
}

function build_checkbox(newLi){

	const check_box = document.createElement('img');
	check_box.className = 'check_box';
	check_box.src = newLi.isDone ? 'assets/img/done-s.png' : 'assets/img/todo-s.png';

	check_box.onclick = function(e){
		modify_isDone(e.target.parentNode.id)
		render_list();
	}
	newLi.appendChild(check_box);
}

function build_deleteic(newLi){
	let deleteic = document.createElement('img');
	deleteic.className = 'material-icons delete_item';
	deleteic.src = 'assets/img/remove-s.jpg';

	deleteic.onclick = function(e){
		delete_todo_item(e.target.parentNode.id)
		newLi.remove();
		items_num();
		what_to_show();
	}
	newLi.appendChild(deleteic);
}

function build_litext(newLi){
	let text = newLi.description || input_field.value
	text = document.createTextNode(text)
	newLi.appendChild(text);
}

function create_li(item_obj = null){
	let li_id = item_obj ? item_obj.id : todoItems.length
	const newLi = document.createElement('li');
	newLi.className = 'listyle';
	newLi.id = li_id
	newLi.description = item_obj ? item_obj.description : null
	newLi.isDone = item_obj ? item_obj.isDone : null
	newLi.addEventListener('dblclick', function(e){
		window.location.href += '#/modify/' + e.target.id;
		what_to_show();
		let numOfit
		for(let i = 0; i < lielement.length; i++){
			if(lielement[i].id === e.target.id){
				numOfit = i
			}
		}
		hidden_id_field.value = e.target.id;
		change_field.value = todoItems[numOfit].description;
		modify_description(e.target.id, change_field.value);
		})

	build_checkbox(newLi);
	build_litext(newLi);
	build_deleteic(newLi);
	if(item_obj) {
		listitems.appendChild(newLi); 
	}
}

function add_item_fun(){
	create_li();
	add_todo_item(input_field.value);
}

function render_list(){
	while (listitems.firstChild) {
    listitems.removeChild(listitems.firstChild);
	}
	todoItems.forEach(function(val){
		create_li(val)
	})
}


let what_to_show = function(){
	render_list();
	isempty();
	if (location.hash === '#/add'){
		main_page.hidden = true;
		add_item.hidden = false;
		modify.hidden = true;

	}else if (location.hash.match(/#\/modify/)){
		main_page.hidden = true;
		add_item.hidden = true;
		modify.hidden = false;
	}else{
		main_page.hidden = false;
		add_item.hidden = true;
		modify.hidden = true;
	}
}

window.onhashchange = what_to_show
 



//rootNode.appendChild(/* Append your list item node*/);