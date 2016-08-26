import React from 'react';
var Table = React.createClass({
	getInitialState:function(){
		return {
		}
	},
	handleSelect:function(e){
		var el = e.target.parentNode;
		var oldel = this.state.select;
		var className = '';
		if(typeof oldel === 'undefined') {
			el.className='select';
			this.setState({
				select:el
			})
		}else {
			if(el === oldel) {
				return;
			}else {
				className = oldel.className;
				oldel.className = className.replace(/\s*select/,'');
				el.className = 'select';
				this.setState({
					select:el
				})
			}
		}
	},
	render:function(){
		return (
				<div className="panel">
					<div className="panel-heading">
						<h2 className="panel-title">学期信息</h2>
					</div>
					<div className="panel-content">
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
	render:function(){
		var data = this.props.data;
		return (
				<tr>
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