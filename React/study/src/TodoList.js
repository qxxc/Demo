import React ,{Component} from 'react'
import 'antd/dist/antd.css';
import store from './store'
import { getInitList, inputChangeAction, deleteItemAction, addItemAction, getTodoList } from './store/actionCreators'
import TodoListUI from './TodoListUI.js'
import axios from 'axios'

// const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
//   ];

class TodoList extends Component {
    
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
        store.subscribe(this.handleStoreChange);
    }

    componentDidMount() {
        const action = getInitList();
        store.dispatch(action);
        console.log(action)
        //const action = getTodoList();
        //store.dispatch(action);
        // axios.get('http://localhost:3001/api/mark/a').then(res => {
        //     const data = initListAction(res.data);
        //     store.dispatch(data)
        // })
        //const data = initListAction(['hello', 'dear', 'lee'])
    }

    render() {
        return (
            <TodoListUI 
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                list={this.state.list}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }

    handleInputChange(e) {
        const action = inputChangeAction(e.target.value)
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleBtnClick() {
        const action = addItemAction()
        store.dispatch(action)
    }

    handleItemDelete(index) {
        const action = deleteItemAction(index);
        store.dispatch(action);
    }
}

export default TodoList
// 生存法则