import React from 'react';
import Panel from '../components/Panel';
import Table from '../components/Table';
import {Tools,ToolItem} from '../components/Tools';
import {Modal,ModalHeader,ModalBody,ModalFooter} from '../components/Modal';
import TableStores from '../stores/tableStores';
import {Form, Input,Select} from '../components/Form';
import * as TableActions from '../actions/tableActions';
export default class Basic extends React.Component {
	constructor() {
		super();
		this.toggleModal = this.toggleModal.bind(this);
		this.addData = this.addData.bind(this);
		this.state={
			modal:true,
			selectId:''
		}
	}
	toggleModal() {
		this.setState({
			modal:!this.state.modal
		})
	}
	addData() {
		var item = {}
		var length = TableStores.getDataLength();
		item.classNumber = this.refs.termNum.value;
		item.grade = this.refs.grade.value;
		item.className=this.refs.className.value;
		item.headTeacher = this.refs.headerTeacher.value;
		item.classSize = this.refs.classSize.value;
		item.id = length;
		TableActions.addItem(item);
	}
	modifyItem(){
		var id = this.state.selectId
		if( id === '') {
			alert("请先选中要修改的项");
		}else {
			var data = TableStores.getDataById(this.state.selectId)
			
		}

	}
	getSelect(id) {
		this.setState({
			selectId:+id
		})
	}
	render() {
		var url = '../data/tableData.json';
		return (
			<div className="content-inner">
				{/*查询组件*/}
				<Panel title="查询条件">
					<Form inline={true}>
						<Input fieldName="学期名称：" name="termName-q"/>
						<Select fieldName="年份" name="year-q" url="" data={[{value:2010},{value:2011}]}/>
						<Select fieldName="上/下学期" name="term-q" url="" data={[{value:2010},{value:2011}]}/>
						<div className="form-group">
							<button className="btn btn-primary">查询</button>
							<button className="btn btn-define">清空</button>
						</div>

					</Form>
				</Panel>
				{/*工具栏*/}
				<Tools >
					<ToolItem className="tool-add" text="增加" callback={this.toggleModal}/>
					<ToolItem className="tool-modify" text="修改"/>
					<ToolItem className="tool-delete" text="删除"/>
				</Tools>
				{/*表格*/}
				<Panel title="学期信息">
					<Table url={url} getSelect={this.getSelect.bind(this)}/>
				</Panel>
				{/*模态框*/}
				<Modal width="600px" height="200px" title="增加" hidden={this.state.modal}>
					<ModalHeader title="增加" close={this.toggleModal}/>
					<ModalBody>
						<Form inline={true}>
							<Input type="number" name="termNum" fieldName="学期编号"/>
							<Input name="grade" fieldName="年级"/>
							<Input name="className" fieldName="班级名称"/>
							<Input name="headTeacher" fieldName="班主任"/>
							<Input type="number" name="classSize" fieldName="班级人数"/>
						</Form>
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