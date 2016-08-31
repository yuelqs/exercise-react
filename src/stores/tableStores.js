import {EventEmitter} from 'events';
import dispatcher from '../dispatcher/dispatcher.js';

class TableStores extends EventEmitter {
	constructor() {
		super();
		this.data = [];
	}
	handleAction(actions) {
		switch(actions.type){
			case 'LOAD_DATA':{
				this.data = actions.data;
				this.emit('change');
			}
			break;
			case 'ADD_ITEM':{
				this.data.push(actions.item);
				this.emit('change');
			}
			break;
			case 'DELETE_ITEM':{
				this.deleteItem(actions.id);
				this.emit('change');
			}
		}
	}
	deleteItem(id){
	this.data =  this.data.map(function(current){
			if(current.id !== id) {
				return current
			}
		})
	}
	getData(){
		return this.data;
	}
	getDataLength() {
		return this.data.length;
	}
	getDataByID(id) {
		var data = this.data.map(function(current){
				if(current.id===id) {
					return current
				}
		})
		return data[0];
	}
}


var tableStores = new TableStores;
dispatcher.register(tableStores.handleAction.bind(tableStores));

export default tableStores;