import React from 'react';
import ContactsList from './ContactsList';

let contacts = [{
  id: 1,
  name: 'Thomas',
  phone: '13110000000'
},{
  id: 2,
  name: 'Tom',
  phone: '13210000000'
},{
  id: 3,
  name: 'Jerry',
  phone: '13310000000'
},{
  id: 4,
  name: 'Hanks',
  phone: '13410000000'
}];

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Contact List</h1>
        <ContactsList contacts={this.props.contacts} />
      </div>
    );
  }
}

React.render(<App contacts={contacts} />, document.getElementById('app'));