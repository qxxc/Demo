import { DELETE_ITEM, ADD_TODO_ITEM, CHANGE_INPUT_VALUE, INIT_LIST_ACTION } from './actionTypes'

const defaultState = {
    inputValue: '123',
    list: [1, 2, 3]
}

export default function(state = defaultState, action){
    if(action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = ''
        return newState;
    }
    if(action.type === DELETE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value, 1);
        return newState;
    }
    if(action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState
    }
    console.log(state, action)
    return state
}