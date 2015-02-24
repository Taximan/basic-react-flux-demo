var React 		= require('react'),
	TodoActions = require('../actions/TodoActions');

var TodoInput = React.createClass({

	render: function(){
		return (
			<div className="todo-inputs">
				<input type="text" ref="todoInput" onKeyDown={this._keydownHandler}/>
				<button ref="submitButton" onClick={this._addTodo}>Add</button>
			</div>
		);
	},

	_keydownHandler: function(event) {
		//add todo if user pressed 'enter'
		if(event.keyCode === 13) {
			this._addTodo();
		}

	},

	_addTodo: function() {

		//get the value of the input
		var todoBody = this.refs.todoInput.getDOMNode().value;

		//disable adding empty todos.
		if(todoBody === "") {
			return false;
		}

		//add todo to the store
		TodoActions.add(todoBody);

		//clear the input
		this.refs.todoInput.getDOMNode().value = "";

	}

});

module.exports = TodoInput;