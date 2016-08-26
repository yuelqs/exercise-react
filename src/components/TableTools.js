import React from 'react';
require('styles/table-tools.css');
import * as TableActions from '../actions/tableActions';

var TableTools = React.createClass({
	addItem:function(item){
		
	},
	render:function(){
		return (
				<div className="tool-bar">
					<ul className="tool-list clearfix">
					    <li className="tool-list-item"><span className="tool-add" >增加</span></li>
					    <li className="tool-list-item"><span className="tool-modify">修改</span></li>
					    <li className="tool-list-item"><span className="tool-delete"> 删除</span></li>
					</ul>
				</div>
			)
	}
})

export default TableTools;