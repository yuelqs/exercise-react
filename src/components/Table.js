import React from 'react';
import TableStores from '../stores/tableStores';
import * as TableActions from '../actions/tableActions';
var Table = React.createClass({
	getInitialState:function() {
		return {
			data:TableStores.getData()
		}
	},
	componentWillMount:function() {
		TableStores.on('change',this.getTableData);
	},
	componentDidMount:function() {
		TableActions.loadData(this.props.url);
	},
	componentWillUnmount:function() {
		TableStores.removeListener('change',this.getTableData);
	},
	getTableData() {
		this.setState({
			data:TableStores.getData()
		});
	},
	handleSelect:function(e) {
		var el = e.target.parentNode;
		var oldel = this.state.select;
		var className = '';
		if(el.nodeType===1&&el.nodeName.toLowerCase()==='tr') {
			if(typeof oldel === 'undefined') {
				el.className='select';
				this.setState({
					select:el
				})
				this.props.getSelect(el.dataset.id);
			}else {
				if(el === oldel&&el.nodeName.toLowerCase()==='tr') {
					return;
				}else {
					className = oldel.className;
					oldel.className = className.replace(/\s*select/,'');
					el.className = 'select';
					this.setState({
						select:el
					})
					this.props.getSelect(el.dataset.id);
				}
			}
		}
	},
	render:function() {
		var data = this.state.data;
		return (
				<table className="table">
					<thead>
						<tr>
							<th>选择</th>
							<th>学期编号</th>
							<th>年级</th>
							<th>班级名称</th>
							<th>班主任</th>
							<th>班级人数</th>
						</tr>
					</thead>
					<tbody onClick={this.handleSelect}>
					{data.map(function(data){
						return <TableItem data={data} key={data.id}/>
					})}
					</tbody>
				</table>
			)
	}
})

var TableItem = React.createClass({
	render:function() {
		var data = this.props.data;
		return (
				<tr data-id={data.id}>
					<td><input type="checkbox"/></td>
					<td>{data.classNumber}</td>
					<td>{data.grade}</td>
					<td>{data.className}</td>
					<td>{data.headTeacher}</td>
					<td>{data.classSize}</td>
				</tr>
			)
	}
})

export default Table