import React from 'react';  //引入react模块，因为下面用到了JSX语法  “ <app /> ” ，所以必须引入react模块，不然编译失败。
// 所有使用JSX语法的文件必须引入React模块
import ReactDOM from 'react-dom';  //引入app组件
import TodoList from './TodoList.js'

ReactDOM.render(<TodoList />, document.getElementById('root'));

