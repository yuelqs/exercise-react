import React from 'React';
import ReactDOM from 'react-dom';

var Modal = React.createClass({
	propTypes:{
		width:React.propTypes.number,
		height:React.propTypes.number,
		hasFooter:React.propTypes.bool,
		hasCloseBtn:React.propTypes.bool,
		type:React.propTypes.string,
		content:React.propTypes.string,
		title:React.propTypes.string,

	},
	handleClose:function(){
		var modal = ReactDOM.findDOMNode(this);
		ReactDOM.unmountComponentAtNode(modal);
	},
	componentWillUnmount:function(){
		var closeButton = this.refs.closeButton,
			cancelButton = this.refs.cancelButton;
		closeButton.removeEventListener('click',this.handleClose);
		cancelButton.removeEventListener('click',this.handleClose);
	},
	render:function(){
		return (
				<div className="modal">
					<div className="modal-dialog">
						<div className="modal-content">
							<ModalHeader />
							<ModalBody />
							<ModalFooter />
						</div>
					</div>
				</div>
			)
	}
})

var ModalHeader = React.createClass({
	render:function() {
		var {title,handleClose} = this.props;
		var closeHtml = '<button type="button" className="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
		return(
				<div className="modal-header">
				<button type="button" className="close" ref='closeButton' onClick={handleClose} aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 className="modal-title">{title}</h4>
				</div>
			)
	}
})

var ModalBody = React.createClass({
	render:function() {
		var content = this.props.contents;
		return(
				<div className="modal-body">
					{content}
				</div>
			)
	}
})

var ModalFooter = React.createClass({
	render:function(){
		var handleClose = this.props.handleClose;
		return (
			<div className="modal-footer">
				<button type="button" ref="defineButton" className="btn btn-primary">Save changes</button>
				<button type="button" ref='cancelButton' onClick={handleClose} className="btn btn-default">Close</button>
			</div>
			)
	}
})

export default Modal;