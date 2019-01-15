import { DELETE_ITEM, ADD_TODO_ITEM, CHANGE_INPUT_VALUE } from './actionTypes'

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