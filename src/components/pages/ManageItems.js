import React, { Component } from 'react';
import GetItems from './components/GetItems';
import AddItem from './components/AddItem';

class ManageItems extends Component {
  render() {
    return (
        <React.Fragment>
          <h3>Manage Items</h3>
          <AddItem />
          <GetItems />
        </React.Fragment>
    );
  }
}

export default ManageItems;
