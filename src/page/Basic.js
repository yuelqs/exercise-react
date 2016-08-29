import React from 'react';
import Query from '../components/Query';
import Table from '../components/Table';
import {Tools,ToolItem} from '../components/Tools';
import {Modal,ModalHeader,ModalBody,ModalFooter} from '../components/Modal';
import TableStores from '../stores/tableStores';
import * as TableActions from '../actions/tableActions';
export default class Basic extends React.Component {
	constructor() {
		super();
		this.getTableData = this.getTableData.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.addData = this.addData.bind(this);
		this.state={
			data:TableStores.getData(),
			modal:true
		}
	}
	componentWillMount() {
		TableStores.on('change',this.getTableData);
	}
	componentDidMount() {
		TableActions.loadData();
	}
	getTableData() {
		this.setState({
			data:TableStores.getData()
		});
	}
	toggleModal() {
		this.setState({
			modal:!this.state.modal
		})
	}
	addData() {
		var item = {}
		item.classNumber = this.refs.termNum.value;
		item.grade = this.refs.grade.value;
		item.className=this.refs.className.value;
		item.headTeacher = this.refs.headerTeacher.value;
		item.classSize = this.refs.classSize.value;
		TableActions.addItem(item);
	}
	render() {
		var data = this.state.data;
		return (
			<div className="content-inner">
				//查询组件
				<Query filter={this.filterData}>
					<form className="form-inline">
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
							<button className="btn btn-primary">查询</button>
							<button className="btn btn-define">清空</button>
						</div>
					</form>
				</Query>
				//工具栏
				<Tools >
					<ToolItem className="tool-add" text="增加" callback={this.toggleModal}/>
					<ToolItem className="tool-modify" text="修改"/>
					<ToolItem className="tool-delete" text="删除"/>
				</Tools>
				//表格
				<Table data={data}/>
				//模态框
				<Modal width="600px" height="200px" title="增加" hidden={this.state.modal}>
					<ModalHeader title="增加" close={this.toggleModal}/>
					<ModalBody>
						<form action="" className="form-inline">
							<div className="form-group">
								<label htmlFor="">学期编号</label>
								<input type="text" className="form-control" ref="termNum"/>
							</div>
							<div className="form-group">
								<label htmlFor="">年级</label>
								<input type="text" className="form-control" ref="grade"/>
							</div>
							<div className="form-group">
								<label htmlFor="">班级名称</label>
								<input type="text" className="form-control" ref="className"/>
							</div>
							<div className="form-group">
								<label htmlFor="">班主任</label>
								<input type="text" className="form-control" ref="headerTeacher"/>
							</div>
							<div className="form-group">
								<label htmlFor="">班级人数</label>
								<input type="text" className="form-control" ref="classSize"/>
							</div>
						</form>
					</ModalBody>
					<ModalFooter>
						<button type="button"  className="btn btn-primary" onClick={this.addData}>保存</button>
						<button type="button"  className="btn btn-default" onClick={this.toggleModal}>取消</button>
					</ModalFooter>
				</Modal>
			</div>
			)
	}
}