import dispatcher from '../dispatcher/dispatcher';

export function addItem(item) {
    dispatcher.dispatch({
        type: 'ADD_ITEM',
        item: item
    });
}

export function deleteItem(id) {
    dispatcher.dispatch({
        type: 'DELETE_ITEM',
        id: id
    })
}

export function modifyItem(item) {
	
    dispatcher.dispatch({
        type: 'MODIFY_ITEM',
        item: item
    })
}

export function query(search) {
    dispatcher.dispatch({
        type: 'QUERY',
        search
    })
}

export function loadData(url) {
    var data = require('../data/tableData.json');
    setTimeout(()=>{
    	dispatcher.dispatch({
    	    type: 'LOAD_DATA',
    	    data: data
    	})
    },2000)

}
