var React  		= require('react'),
	TodoActions = require('../actions/TodoActions'); 

var TodoItem = React.createClass({

	render: function(){
		return (
			<li>
				<div>{this.props.todoBody}</div>
				<button onClick={this.remBtnHandler}>X</button>
			</li>
		);
	},

	remBtnHandler: function() {
		TodoActions.remove(this.props.id); 
	}

});

module.exports = TodoItem;