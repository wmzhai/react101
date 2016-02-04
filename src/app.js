import React from 'react';
import ContactsList from './ContactsList';

let contacts = {
  name: 'Weiming',
  phone: '13110000000'
};

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