import React from 'react';

import Add from './Add';
import List from './List';
import Footer from './Footer';

export default class Comtent extends React.Component {
  constructor () {
    super();
    this.state = {
      list:[]
    }
  }
  // 添加事件
  addTask = (task) => {
    // 传递数据， 执行render方法进行调用
    this.state.list.push(task);
    this.setState({
    })
  }
  render () {
    return <div>
      <section className="todoapp">
        <Add addTask =  {this.addTask }/>
        <List />
        <Footer />
      </section>
    </div>
 }
}
