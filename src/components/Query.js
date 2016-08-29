import React from 'react';

var Query = React.createClass({
	_onClick:function(){
		var searchData = {};
	},
	render:function() {
		return (
			<div className="panel">
				<div className="panel-heading">
					<h2 className="panel-title">
						查询条件
					</h2>
				</div>
				<div className="panel-content">
					{this.props.children}
				</div>
			</div>)
	}
});
export default Query;