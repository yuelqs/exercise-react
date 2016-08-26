import React from 'react';
import Query from './Query';
import Table from './Table';
import TableTools from './TableTools';
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
					<TableTools />
					<Table data={data}/>
				</div>
			)
	}
})

export default QueryTable;