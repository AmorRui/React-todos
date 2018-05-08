import React from 'react';

export default class Footer extends React.Component {
  render () {
    return <div>
      <footer className="footer">
				<span className="todo-count"><strong>0</strong> item left</span>
        <ul class="filters">
					<li>
						<a class="selected" href="#/">All</a>
					</li>
					<li>
						<a href="#/active">Active</a>
					</li>
					<li>
						<a href="#/completed">Completed</a>
					</li>
				</ul>
				<button className="clear-completed">Clear completed</button>
			</footer>
    </div>
 }
}
