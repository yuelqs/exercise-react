import React from 'react';

var Query = React.createClass({
	_onClick:function(){
		var searchData = {};
		var index1,index2;
		searchData.termName = this.refs.termName.value;
		index1 = this.refs.year.selectedIndex
		searchData.year = this.refs.year.options[index1].text;
		index2 = this.refs.term.selectedIndex;
		searchData.term = this.refs.term.options[index2].text;
		this.props.filter(searchData);
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
					<div className="form-inline">
						<div className="form-group">
							<label>学期名称：</label>
							<input type="text" className="form-control" ref="termName"/>
						</div>
						<div className="form-group">
							<label>年份：</label>
							<select name="" id="" className="form-control" ref="year">
								<option value="">2000</option>
								<option value="">2001</option>
								<option value="">2002</option>
							</select>
						</div>
						<div className="form-group">
							<label>上/下学期</label>
							<select name="" id="" className="form-control" ref="term">
								<option value="">上学期</option>
								<option value="">下学期</option>
							</select>
						</div>
						<div className="form-group">
							<button className="btn btn-primary" onClick={this._onClick}>查询</button>
							<button className="btn btn-denfine">清空</button>
						</div>
					</div>
				</div>
			</div>)
	}
});
export default Query;