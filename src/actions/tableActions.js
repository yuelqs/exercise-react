import dispatcher from '../dispatcher/dispatcher';
import reqwest from 'reqwest';
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
    reqwest({
        url:url,
        method:'get',
        type:'json',
        success:function(resp){
            dispatcher.dispatch({
                type: 'LOAD_DATA',
                data: resp
            })
        }
    });
}
