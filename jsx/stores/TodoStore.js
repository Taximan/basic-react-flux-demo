var assign 		 = require('object-assign'),
	EventEmitter = require('events').EventEmitter,
	Dispatcher	 = require('../dispatcher'),
	Constants 	 = require('../constants/TodoConstants');


var CHANGE_EVENT = 'change';


//private _todos variable
//hold all of the _todos dispalyed on the screen
//Object shape should be: 
//{
//	body: String, 
//	id: Number
//}

var _todos = [
	{body:'hehe', id:0},
	{body:'lorem', id:1},
	{body:'ipsum', id:2},
	{body:'react+flux', id:3},
	{body:'fml', id:4},
];


function addTodo(todoBody) {
	_todos.push({body: todoBody, id: _todos.length});
}

function remTodo(id) {
	_todos = _todos.filter(function(todo){
		if(todo.id == id ) {
			return false;
		} else {
			return true;
		}
	});
}

var TodoStore = assign({}, EventEmitter.prototype, {
	
	getAll: function() {
		return _todos;
	},

	getAmount: function() {
		return _todos.length;
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function(){
		this.emit(CHANGE_EVENT);
	}

});


Dispatcher.register(function(action) {

	switch(action.actionType) {
		case Constants.TODO_ADD: 
			addTodo(action.todoBody);
			TodoStore.emitChange();
			break;
		case Constants.TODO_REM:
			remTodo(action.id);
			TodoStore.emitChange();
			break;

	}

});

module.exports = TodoStore;