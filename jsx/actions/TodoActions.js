var Dispatcher = require('../dispatcher'),
	Constants  = require('../constants/TodoConstants');

var TodoActions = {
	
	add: function(todoBody) {
		Dispatcher.dispatch({
			actionType: Constants.TODO_ADD,
			todoBody: todoBody
		});
	},

	remove: function(id) {
		Dispatcher.dispatch({
			actionType: Constants.TODO_REM,
			id: id
		});
	},

};

module.exports = TodoActions;