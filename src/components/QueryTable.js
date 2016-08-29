import React from 'react';
import Query from './Query';
import Table from './Table';
import {Tools,ToolItem} from './Tools';

import TableStores from '../stores/tableStores';
import * as TableActions from '../actions/tableActions';

var QueryTable = React.createClass({
	getInitialState:function() {
		return {
			data:TableStores.getData()
		}
	},
	componentWillMount:function() {
		TableStores.on('change',this.getTableData);
	},
	componentDidMount:function() {
		TableActions.loadData();
	},
	getTableData:function() {
		this.setState({
			data:TableStores.getData()
		});
	},
	render:function() {
		var data = this.state.data;
		return (
				<div className="content-inner">
					<Query filter={this.filterData}/>
					<Tools >
						<ToolItem className="tool-add" text="增加"/>
						<ToolItem className="tool-modify" text="修改"/>
						<ToolItem className="tool-delete" text="删除"/>
					</Tools>
					<Table data={data}/>
				</div>
			)
	}
})

export default QueryTable;