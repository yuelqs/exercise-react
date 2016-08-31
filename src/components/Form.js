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
	getDefaultProps:function() {
		return {
			type:'other'
		}
	},
	getInitialState:function() {
		return {
			value:this.props.value||'',
			errorMessage:'',
			vaild:true,
			vaildateStart:false
		}
	},
	validate:{
		number:function(){
			if(this.state.value.match(/^\d*$/)){
				 this.setState({
					vaild:true,
					errorMessage:''
				})
			}else {
				this.setState({
					vaild:false,
					errorMessage:'只能输入数字'
				})
			}
		},
		other:function(){
			this.setState({
				vaild:true
			})
		}
	},
	changeValue:function(e) {
		this.setState({
			value:e.target.value
		})
		if(this.state.vaildateStart) {

		}else {
			setTimeout(function(){
				this.validate[this.props.type].bind(this)();
				this.setState({
					vaildateStart:false
				})
			}.bind(this),1000);
		}
	},
	render:function() {
		var {fieldName,name} = this.props;
		var {errorMessage,value,vaild} = this.state;
		return (
				<div className={vaild?'form-group':'has-error form-group'}>
					<label htmlFor={name}>{fieldName}</label>
					<input type="text" value={value} onChange={this.changeValue} className='form-control' ref={name} name={name}/>
					<div className={vaild?'':'alert alert-danger'}>{errorMessage}</div>
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