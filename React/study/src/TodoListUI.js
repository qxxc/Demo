import React from 'react'
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
  return (
  <div>
    <div style={{margin: '10px'}}>
      <Input 
          placeholder="Basic usage" 
          style={{width: '300px', marginRight: '10px'}}
          value={props.inputValue}
          onChange={props.handleInputChange}
      />
      <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
    </div>
    <div>
      <List
        style={{margin: '10px', width: '300px'}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
      />
    </div>
  </div>
)}

// class TodoListUI extends Component {
//   render() {
//     return <div>
//       <div style={{margin: '10px'}}>
//         <Input 
//             placeholder="Basic usage" 
//             style={{width: '300px', marginRight: '10px'}}
//             value={this.props.inputValue}
//             onChange={this.props.handleInputChange}
//         />
//         <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//       </div>
//       <div>
//         <List
//           style={{margin: '10px', width: '300px'}}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (<List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
//         />
//       </div>
//     </div>
//   }
// }

export default TodoListUI