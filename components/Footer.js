import React from 'react';

export default class Footer extends React.Component {
  render () {
    return <div>
      <footer className="footer">
				<span className="todo-count"><strong>{ this.props.left }</strong> item left</span>
        <ul className="filters">
					<li>
						<a className="selected" href="#/">All</a>
					</li>
					<li>
						<a href="#/active">Active</a>
					</li>
					<li>
						<a href="#/completed">Completed</a>
					</li>
				</ul>
				<button className={this.props.all != this.props.left ? "clear-completed" : ''} onClick = { () => {
					this.props.clearCompletedTask()
				}}>Clear completed</button>
			</footer>
    </div>
 }
}
