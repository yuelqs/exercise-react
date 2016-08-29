import React from 'react';
require('styles/table-tools.css');

var Tools = React.createClass({
	render:function(){
		return (
				<div className="tool-bar">
					<ul className="tool-list clearfix">
						{this.props.children}
					</ul>
				</div>
			)
	}
})

var ToolItem = React.createClass({
	getDefaultProps:function(){
		return {
			text:'',
			className:'tool-add'
		}
	},
	render:function() {
		const {text,className,callback} = this.props;
		return (
				<li className="tool-list-item"><span className={className} onClick={callback}>{text}</span></li>
				)
	}
})
export {Tools,ToolItem}