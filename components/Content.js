import React from 'react';

import Add from './Add';
import List from './List';
import Footer from './Footer';

export default class Comtent extends React.Component {
  render () {
    return <div>
    <section className="todoapp">
      <Add />
      <List />
      <Footer />
      </section>
    </div>
 }
}
