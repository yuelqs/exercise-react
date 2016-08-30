import React from 'react';

var Panel = React.createClass({
	_onClick:function(){
		var searchData = {};
	},
	render:function() {
		var {title,children} = this.props;
		return (
			<div className="panel">
				<div className="panel-heading">
					<h2 className="panel-title">
						{title}
					</h2>
				</div>
				<div className="panel-content">
					{children}
				</div>
			</div>)
	}
});
export default Panel;