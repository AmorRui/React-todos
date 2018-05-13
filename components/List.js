import React from 'react';

export default class List extends React.Component {
	constructor () {
		super()
		this.state = {
			eid : -1
		}
	}
  render () {
    return <div>
      <section className="main">
			{/* 全选  反选 */}
			{
				(() => {
					var left = this.props.tasklist.filter((item) => {
					return !item.isCompleted
				})
				return	<input id="toggle-all" className="toggle-all" type="checkbox" checked = { left.length == 0 } onChange ={ () => {
					this.props.tasklist.map((item,i) => {
						item.isCompleted = !item.isCompleted;
						this.props.upData();
					})
				} }/>
				})()
			
			}
			
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
					{/* 3》》动态生成li 使用map方法*/}
					{
						// 5》》 className={ item.completed?"completed":"" }
						// 6》》 key={ item.id }
						this.props.tasklist.map( (item,i) => {
							return <li className={ (item.isCompleted?"completed":"")+(item.id === this.state.eid ? 'editing':'') } onDoubleClick = {
								() => {
									// 让内容可以进行编辑
									this.setState({
										eid:item.id
									}),() => {
										//  双击出现光标
											this.refs[item.id].focus();
									}
								}
							} key={ item.id }>
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
									<input ref ={ item.id } className="edit" onChange= { 
										// 编辑数据更新
										(e)=> {
										item.name = e.target.value;
										this.props.upData();
									} } value={item.name} onBlur = {()=> {
										// 失去焦点
										this.setState({
											eid: -1
										})
									} }/>
								</li> 
						})
					}
				</ul>
			</section>
    </div>
 }
}
