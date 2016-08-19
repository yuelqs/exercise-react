import React from 'react';
import Query from './Query';
import Table from './Table';
var tableData = require('../data/tableData.json')
var QueryTable = React.createClass({
	render:function() {
		return (
				<div className="content-inner">
					<Query />
					<Table data={tableData}/>
				</div>
			)
	}
})

export default QueryTable;