import React from 'react';

export default class Add extends React.Component {
  constructor () {
    super();
    this.state = {
      taskname : ''
    }
  }
  // 2. 避免this指向的问题， 使用箭头函数
  tasknameChange = (e) => {
    this.setState({
      taskname: e.target.value
    })
  }

  render () {
    return <div>
      <header className="header">
				<h1>todos</h1>
        {/* 
        1. this.state.taskname   给定value 不能进行输入 
        3. this.tasknameChange   input 可以进行输入
        4. form 会进行提交  
        */}
        <form action="" onSubmit = {(e) => {
          // 回车  触发提交事件
          // 阻止默认事件
          e.preventDefault();
          // 将数据传递父级   Content中属性传入   子组件进行调用
          var task = {
            name : this.state.taskname,
            id: Math.random(),
            isCompleted: false
          };
          this.props.addTask( task );
          // 清空数据
          this.setState({
            taskname: ''
          })
        }
        
        }>
          <input className="new-todo" value = { this.state.taskname } onChange = { this.tasknameChange }  placeholder="What needs to be done?" autoFocus />
        </form>
			</header>
    </div>
 }
}
