import React from 'react';

export default class Footer extends React.Component {
  render () {
    return <div>
      <footer className="footer">
				<span className="todo-count"><strong>{ this.props.left }</strong> item left</span>
        <ul className="filters">
					<li>
						<a className="selected" href="#/" className={ this.props.flag === 'All'?"selected":''}  onClick ={ 
							()=>{
								this.props.changeFlag('All')
							}
						}>All</a>
					</li>
					<li>
						<a href="#/active" className={ this.props.flag === 'Active'?"selected":''}  onClick ={ 
							()=>{
								this.props.changeFlag('Active')
							}
						}>Active</a>
					</li>
					<li>
						<a href="#/completed" className={ this.props.flag === 'Completed'?"selected":''}  onClick ={ 
							()=>{
								this.props.changeFlag('Completed')
							}
						}>Completed</a>
					</li>
				</ul>
				<button className={this.props.all != this.props.left ? "clear-completed" : ''} onClick = { () => {
					this.props.clearCompletedTask()
				}}>Clear completed</button>
			</footer>
    </div>
 }
}
