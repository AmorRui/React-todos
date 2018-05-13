import React from 'react';

export default class List extends React.Component {
  render () {
    return <div>
      <section className="main">
				<input id="toggle-all" className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
					{/* 3》》动态生成li 使用map方法*/}
					{
						// 5》》 className={ item.completed?"completed":"" }
						// 6》》 key={ item.id }
						this.props.tasklist.map( (item,i) => {
							return <li className={ item.isCompleted?"completed":"" } key={ item.id }>
									<div className="view">
									{/* 7 》》 checked = { item.completed }
									8 》》 刷新页面，之前的数据已经消失。 需要再次保存数据*/}
										<input className="toggle" type="checkbox" checked = { item.isCompleted } onChange = { () => {
											// 状态改变
											item.isCompleted = !item.isCompleted;
											// 调用父组件的setState方法
											this.props.upData ()
										} } />
										{/* 4》》 item.name  显示 */}
										<label>{ item.name }</label>
										<button className="destroy" onClick = { () => {
											this.props.delTask( item.id )
										} }></button>
									</div>
									<input className="edit" value="Create a TodoMVC template" />
								</li> 
						})
					}
				</ul>
			</section>
    </div>
 }
}
