import React from 'react';
import {Dialog} from '../components/Dialog';
import {Form, Input,Select} from '../components/Form';
export default class Moral extends React.Component {
	constructor() {
		super();
		this.toggleDialog = this.toggleDialog.bind(this);
		this.state={
			active:false
		}
	}
	toggleDialog() {
		this.setState({
			active:!this.state.active
		})
	}
	render() {
		return (
			<div className="content-inner">
				<h1>Moral</h1>
				<button onClick={this.toggleDialog}>dialog</button>
				<Dialog width="600px" height="200px" title="增加" close={this.toggleDialog} active={this.state.active}>
					<Form inline={true}>
						<Input type="number" name="termNum" fieldName="学期编号"/>
						<Input name="grade" fieldName="年级"/>
						<Input name="className" fieldName="班级名称"/>
						<Input name="headTeacher" fieldName="班主任"/>
						<Input type="number" name="classSize" fieldName="班级人数"/>
					</Form>
				</Dialog>
			</div>
			)
	}
}