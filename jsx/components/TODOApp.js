var React        = require('react'),
	TodoItemList = require('./TodoItemList'),
	TodoInput	 = require('./TodoInput'),
	StatusBar	 = require('./StatusBar'),
	TodoStore	 = require('../stores/TodoStore');

var TODOApp = React.createClass({
	
	getInitialState: function() {
		return {
			todosList: TodoStore.getAll()
		};
	},

	componentDidMount: function() {
		TodoStore.addChangeListener(this._update);
	},

	render: function(){
		return (
			<div>
				<StatusBar />
				<TodoInput />
				<TodoItemList todoItemList={this.state.todosList} />
			</div>
		);
	},

	_update: function() {
		this.setState({
			todosList: TodoStore.getAll()
		});
	},


});

module.exports = TODOApp;