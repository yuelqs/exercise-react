import React from 'React';

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
		return(
				<div className="modal-header">
				{this.porps.close}
				</div>
			)
	}
})

var ModalBody = React.createClass({
	render:function() {
		return(
				<div className="modal-body">
				</div>
			)
	}
})

var ModalFooter = React.createClass({
	getDefaultProps:function(){
		return {
			footer:''
		}
	},
	render:function(){
		return (
			<div className="modal-footer">

			</div>
			)
	}
})

export default Modal;