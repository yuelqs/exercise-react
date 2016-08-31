import React from 'react';
import ReactDOM from 'react-dom';
var Dialog = React.createClass({
	getDefaultProps:function(){
		return {
			active:false
		}
	},
	componentWillReceiveProps:function(newProps) {
		if(newProps.active&&!this.props.active) {
			this.node = document.createElement('div');
			this.node.className = "modal";
			this.node.style.display="block";
			document.getElementsByTagName('body')[0].appendChild(this.node);
			var {width,height,active,title,close}= this.props;
			let modal = (
						<div className="modal-dialog" style={{width:width,height:height}}>
							<div className="modal-content">
								<div className="modal-header">
									<button type="button" className="close" aria-label="Close" onClick={close}><span aria-hidden="true">&times;</span></button>
									<h4 className="modal-title">{title}</h4>
								</div>
								<div className="modal-body">
									{this.props.children}
								</div>
							</div>
						</div>
				)
			let allModal = document.querySelectorAll('.modal');
			ReactDOM.render(modal,allModal[allModal.length-1])
		}
		if(this.props.active&&!newProps.active) {
			this.node.querySelector('.modal-header button').removeEventListener('click',close);
			ReactDOM.unmountComponentAtNode(this.node)
		}
	},
	componentWillUnmount:function(){

	},
	render:function(){
		return React.DOM.noscript()
	}
})
var DialogFooter = React.createClass({
	render:function(){
		return (
			<div className="modal-footer">
				{this.props.children}
			</div>
			)
	}
})

export  {Dialog,DialogFooter};