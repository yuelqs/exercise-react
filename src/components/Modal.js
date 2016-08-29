import React from 'react';

var Modal = React.createClass({
	getDefaultProps:function(){
		return {
			hidden:true
		}
	},
	componentWillUnmount:function(){

	},
	render:function(){
		var {width,height,hidden}= this.props;
		return (
				<div className="modal" style={{display:hidden?'none':'block'}}>
					<div className="modal-dialog" style={{width:width,height:height}}>
						<div className="modal-content">
							{this.props.children}
						</div>
					</div>
				</div>
			)
	}
})

var ModalHeader = React.createClass({
	render:function() {
		var {title,close} = this.props;
		return(
				<div className="modal-header">
				<button type="button" className="close" aria-label="Close" onClick={close}><span aria-hidden="true">&times;</span></button>
				<h4 className="modal-title">{title}</h4>
				</div>
			)
	}
})

var ModalBody = React.createClass({
	render:function() {
		return(
				<div className="modal-body">
					{this.props.children}
				</div>
			)
	}
})

var ModalFooter = React.createClass({
	render:function(){
		return (
			<div className="modal-footer">
				{this.props.children}
			</div>
			)
	}
})

export  {Modal,ModalHeader,ModalBody,ModalFooter};