import React from 'react';

var Form = React.createClass({
	getDefaultProps:function(){
		return {
			inline:true
		}
	},
	render:function() {
		var inline = this.props.inline;
		return (
				<form action="" className={inline?'form-inline':'form-horizontal'}>
					{this.props.children}
				</form>
			)
	}
})

var Input = React.createClass({
	getInitialState:function() {
		return {
			value:''
		}
	},
	changeValue:function(e) {
		this.setState({
			value:e.target.value
		})
	},
	render:function() {
		var fieldName = this.props.fieldName;
		return (
				<div className="form-group">
					<label htmlFor={this.props.name}>{fieldName}</label>
					<input type="text" value={this.state.value} onChange={this.changeValue} className="form-control" ref={this.props.name} name={this.props.name}/>
				</div>

		)
	}
})

var Select = React.createClass({
	render:function() {
		var {data,fieldName,name} = this.props;
		return (
			<div className="form-group">
				<label htmlFor={name}>{fieldName}</label>
				<select className="form-control" ref={name} name={name}>
					{data.map(function(item,i){
						return (<option value={item.value} key={i}>{item.value}</option>)
					})}
				</select>
			</div>
		)
	}
})

var Button = React.createClass({
	render:function() {
		return (
			<div className="form-group">
			</div>
		)
	}
})
export {Form,Input,Select}