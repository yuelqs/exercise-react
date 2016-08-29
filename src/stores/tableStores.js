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
				break;
			}
			case 'ADD_ITEM':{
				this.data.push(actions.item);
				this.emit('change');
				break;
			}
			case 'MODIFY_ITEM':{

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
}


var tableStores = new TableStores;
dispatcher.register(tableStores.handleAction.bind(tableStores));

export default tableStores;