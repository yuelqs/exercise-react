import React from 'react';
import Query from './Query';
import Table from './Table';
var tableData = require('../data/tableData.json')
var QueryTable = React.createClass({
    filterData:function(search){
        var result = [];
       tableData = tableData.map(function(current){
            if(current.year){

            }
       })
    },
	render:function() {
		return (
				<div className="content-inner">
					<Query filter={this.filterData}/>
					<Table data={tableData}/>
				</div>
			)
	}
})

export default QueryTable;