const rootNode = document.getElementById('root');
create_skeleton()

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

function sort_by_tf(a,b) {
	if (a.isDone < b.isDone)
		return -1;
	if (a.isDone > b.isDone)
 		return 1;
return 0;
}

function render_list(){
	while (listitems.firstChild) {
    listitems.removeChild(listitems.firstChild);
	}
	todoItems.forEach(function(val){
		create_li(val)
		todoItems.sort(sort_by_tf)
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
 
function create_skeleton(){
	const main_page = document.createElement('div');
	main_page.className = 'main_page';
	const h1 = document.createElement('h1');
	let texth1 = document.createTextNode('Simple TODO application');
	const todolist = document.createElement('div');
	todolist.className = 'todolist';
	const btn_main = document.createElement('button');
	btn_main.className = 'add_task';
	let btn_t_main = document.createTextNode('Add new task');
	const empty_list = document.createElement('p');
	empty_list.className = 'empty_list';
	let empty_list_text = document.createTextNode('TODO is empty');
	const listitems = document.createElement('ul');
	listitems.id = 'listitems';

	rootNode.appendChild(main_page);
	main_page.appendChild(h1);
	h1.appendChild(texth1);
	main_page.appendChild(todolist);
	todolist.appendChild(btn_main);
	btn_main.appendChild(btn_t_main);
	todolist.appendChild(empty_list);
	empty_list.appendChild(empty_list_text);
	todolist.appendChild(listitems);

	const add_item = document.createElement('div');
	add_item.className = 'add_item';
	add_item.hidden = true;
	const h2_ai = document.createElement('h2');
	let texth2_ai = document.createTextNode('Add task');
	const input_1 = document.createElement('input');
	input_1.type = 'text';
	input_1.name = 'addnewline';
	const btns = document.createElement('div');
	btns.className = 'btns';
	const btn_canc = document.createElement('button');
	btn_canc.className = 'btn_canc';
	let btn_canc_text = document.createTextNode('Cancel');
	const btn_save = document.createElement('button');
	btn_save.className = 'btn_save';
	let btn_save_text = document.createTextNode('Save changes');

	rootNode.appendChild(add_item);
	add_item.appendChild(h2_ai);
	h2_ai.appendChild(texth2_ai);
	add_item.appendChild(input_1);
	add_item.appendChild(btns);
	btns.appendChild(btn_canc);
	btn_canc.appendChild(btn_canc_text);
	btns.appendChild(btn_save);
	btn_save.appendChild(btn_save_text);

	const modify = document.createElement('div');
	modify.className = 'modify';
	modify.hidden = true;
	const h2_m = document.createElement('h2');
	let texth2_m = document.createTextNode('Modify item');
	const input_2 = document.createElement('input');
	input_2.type = 'text';
	input_2.name = 'change_line';
	const input_hid = document.createElement('input');
	input_hid.type = 'hidden';
	input_hid.name = 'hidden_id';
	input_hid.id = 'hidden_id_field';
	const btns_2 = document.createElement('div');
	btns_2.className = 'btns';
	const btn_canc_2 = document.createElement('button');
	btn_canc_2.className = 'btn_canc_m';
	let btn_canc2_text = document.createTextNode('Cancel');
	const btn_save_2 = document.createElement('button');
	btn_save_2.className = 'btn_save_changes';
	let btn_save2_text = document.createTextNode('Save changes');


	rootNode.appendChild(modify);
	modify.appendChild(h2_m);
	h2_m.appendChild(texth2_m);
	modify.appendChild(input_2);
	modify.appendChild(input_hid);
	modify.appendChild(btns_2);
	btns_2.appendChild(btn_canc_2);
	btn_canc_2.appendChild(btn_canc2_text);
	btns_2.appendChild(btn_save_2);
	btn_save_2.appendChild(btn_save2_text);
}
