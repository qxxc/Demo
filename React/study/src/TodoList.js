import React,{ Component,Fragment } from "react";
import TodoItem from './TodoItem'
import axios from 'axios'
import './style.css'

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            inputValue:'',
            list:[]
        }
        this.handleItemDelete = this.handleBtnClickItemDelete.bind(this)
    }

    render(){
        return (
            <Fragment>
                {/* 下面是一个input框 */}
                {
                    //下面是一个input框
                }
                <div>
                    <label htmlFor="insert">输入</label>
                    <input
                        id='insert' 
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                        ref={ ( event ) => { this.input = event } }
                    />
                    <button 
                        onClick={this.handleBtnClick.bind(this)}
                    >提交</button>
                </div>
                <ul
                    ref = {(event) => {this.ul = event}}
                >
                    {
                        this.getTodoItem()
                    }
                </ul>
            </Fragment>
        );
    }

    componentDidMount(){
        axios.get('./api/todolist').then((res) => {
            alert('succ')
        }).catch((error) => {
            alert('error')
        })
    }

    getTodoItem() {
        return this.state.list.map(( item, index) => {
            return(
                <TodoItem
                    key = { index }
                    content = { item }
                    index = { index }
                    deleteItem = { this.handleItemDelete  }
                />
            )
        })
    }

    handleInputChange(e){
        // console.log(e);
        // console.log(this)
        this.setState({
            inputValue:this.input.value
        })
        //  this.state.inputValue=e.target.value  失败，不能直接改变
    }

    handleBtnClick(){
        this.setState({
            list:[...this.state.list, this.state.inputValue],
            inputValue:''
        }, () => {
            //console.log(this.state.list.length)
        })
        //console.log(this.ul)
        //console.log(this.state.list.length)
    }

    handleBtnClickItemDelete(index){
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list:  list
        })
    }
}

export default TodoList