import React from 'react';
var Table = React.createClass({
	render:function(){
		return (
				<div className="panel">
					<div className="panel-heading">
						<h2 className="panel-title">学期信息</h2>
					</div>
					<div className="panel-content">
						<table className="table">
							<thead>

							</thead>
							<tbody>
							{this.props.data.map(function(data,i){
								return <TableItem data={data} key={i}/>
							})}
							</tbody>
						</table>
					</div>
				</div>

			)
	}
})

var TableItem = React.createClass({
	componentWillMount:function() {
		this.setState({check:this.props.check});
	},
	handleCheck:function(e){
		this.setState({check:e.target.checked});
	},
	handleModify:function() {

	},
	handleClick:function() {

	},
	handleDelete:function() {

	}
	render:function(){
		var data = this.props.data;
		return (
				<tr>
					<td><input type="checkbox" onClick={this.handeCheck}/></td>
					<td>{data.classNumber}</td>
					<td>{data.grade}</td>
					<td>{data.className}</td>
					<td>{data.headTeacher}</td>
					<td><span onClick={this.handleModify}>修改</span><span onClick={this.handleDelete}>删除</span></td>
				</tr>
			)
	}
})

export default Table