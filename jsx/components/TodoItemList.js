var React    = require('react'),
	TodoItem = require('./TodoItem')

var TodoItemList = React.createClass({

	render: function(){
			
		var items = this.props.todoItemList.map(function(item, index){
			return (
				<TodoItem todoBody={item.body} key={index} id={item.id}/>
			)
		})

		return (
			<ul className="todo-list">	
				{items}
			</ul>
		)
	}

});

module.exports = TodoItemList;