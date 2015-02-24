var React 	  = require('react'),
	TodoStore = require('../stores/TodoStore');


var StatusBar = React.createClass({
	
	getInitialState: function() {
		return {
			left: TodoStore.getAmount()
		};
	},

	componentDidMount: function() {
		TodoStore.addChangeListener(this._updateHandler);
	},

	render: function() {

		var amount = this.state.left;
		var pharse = "";

		if(amount == 0 ) {
			pharse = "No work to be done...!";
		} else if(amount == 1) {
			pharse = amount + " TODO left";			
		} else  {
			pharse = amount + " TODOs left";
		}

		return (
			<div className="status-bar">{pharse}</div>
		);
	},

	_updateHandler: function() {
		this.setState({
			left: TodoStore.getAmount()
		});
	}

});

module.exports = StatusBar;