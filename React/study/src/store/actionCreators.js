import { GET_INIT_LIST, DELETE_ITEM, ADD_TODO_ITEM, CHANGE_INPUT_VALUE, INIT_LIST_ACTION } from './actionTypes'
import axios from 'axios';
//import store from ''
export const inputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const deleteItemAction = (value) => ({
    type: DELETE_ITEM,
    value
})

export const addItemAction = () => ({
    type: ADD_TODO_ITEM
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

// export const getTodoList = () => {
//     return (dispatch) => {
//         axios.get('http://localhost:3001/api/mark/a').then(res => {
//             //console.log(res.data);
//             const data = initListAction(res.data);
//             dispatch(data)
//         }) 
//     }
// }

export const getTodoList = () => {
    return (dispetch) => {
        axios.get('http://localhost:3001/api/mark/a').then(res => {
            const data = initListAction(res.data);
            dispetch(data);
        })
    }
}

export const getInitList = () => ({
    type: GET_INIT_LIST
})