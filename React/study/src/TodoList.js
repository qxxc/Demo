import React ,{Component, Fragment} from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd'
import store from './store'
import { inputChangeAction, deleteItemAction, addItemAction } from './store/actionCreators'

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

class TodoList extends Component {
    
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this)
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <Fragment>
                <div style={{margin: '10px'}}>
                    <Input 
                        placeholder="Basic usage" 
                        style={{width: '300px', marginRight: '10px'}}
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
                </div>
                <div>
                <List
                    style={{margin: '10px', width: '300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)}
                />
                </div>
             </Fragment>
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