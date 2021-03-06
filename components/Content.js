import React from 'react';

import Add from './Add';
import List from './List';
import Footer from './Footer';

export default class Comtent extends React.Component {
  constructor () {
    super();
    this.state = {
      list:[],
      flag:'All'
    }
  }
  // 持久化保存数据。 页面刷新数据仍然存在
  componentWillMount () {
    //  this.state.list  = JSON.parse(localStorage.getItem('task'));
    //  如果list 是空的。 map 会为空。 需要进行判断
    this.state.list  = JSON.parse(localStorage.getItem('tasks')||('[]'));
  }
  // 添加事件
  addTask = (task) => {
    // 传递数据， 执行render方法进行调用
    this.state.list.push(task);
    this.setState({
    })
    // 1》数据持久化 localStorage
    //  Application（local Stronge） 会进行显示数据
    localStorage.setItem('tasks',JSON.stringify(this.state.list))
  }
  // 删除 
  delTask = (id) => {
    // filter 过滤器 返回一个新的数组
    this.state.list = this.state.list.filter( (item) => {
      return item.id != id
    })
    this.setState({
    })
  }
  // 让父组件刷新
  upData = () => {
    this.setState({

    }) 
  } 
  
  // 切换列表显示内容
changeFlag = (flag)=> {
  this.setState({
    flag : flag
  })
}

  // 清除所有已经完成的任务
  clearCompletedTask = () => {
    this.state.list = this.state.list.filter ((item) => {
      return !item.isCompleted
    })
    this.setState({

    })
  }
  
  // 让localstroge  进行删除
  componentWillUpdate () {
    localStorage.setItem('tasks', JSON.stringify(this.state.list));
  }
  render () {
    return <div>
      <section className="todoapp">

        <Add addTask =  {this.addTask }/>

        <List tasklist = { this.state.list } flag = {this.state.flag } delTask = { this.delTask } upData = { this.upData }/>

        <Footer left ={ 
          this.state.list.filter((item)=>{
            return !item.isCompleted
          }).length
         } 
         flag = { this.state.flag }
         all = { this.state.list.length }
         clearCompletedTask = { this.clearCompletedTask }
         changeFlag = { this.changeFlag }/>
      </section>
    </div>
 }
}
