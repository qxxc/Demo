import React,{ Component,Fragment } from "react";
import './style.css'

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state={
            inputValue:'',
            list:[]
        }
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
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                            <li 
                                key={index} 
                                onClick={this.handleBtnClickItemDelete.bind(this,index)}
                                dangerouslySetInnerHTML={{__html: item}}
                            >
                            </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        );
    }

    handleInputChange(e){
        // console.log(e);
        // console.log(this)
        this.setState({
            inputValue:e.target.value
        })
        //  this.state.inputValue=e.target.value  失败，不能直接改变
    }

    handleBtnClick(){
        this.setState({
            list:[...this.state.list, this.state.inputValue],
            inputValue:''
        })
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