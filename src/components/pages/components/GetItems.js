import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchItems } from '../../../actions/itemActions';
import Item from './Item';

class GetItems extends Component {
  state = {
    items: this.props.items
  }

  componentDidMount() {
    this.props.fetchItems();
  }

  static getDerivedStateFromProps(props, state) {
    /*if (props.deletedItem.hasOwnProperty('deletedItemID')) {
      const updatedItemsArr = props.items.filter(item => item.id !== props.deletedItem.deletedItemID);
      return { items: updatedItemsArr }
    }*/
    if (props.newItem.hasOwnProperty('id')) {
      props.items.unshift(props.newItem);
      return { items: props.items };
    }
    return null;
  }

  postItems = () => this.props.items.map(item => (
    <Item key={item.id} itemID={item.id} itemTitle={item.title} itemBody={item.body} />
  ));

  render() {
    return (
      <div>
        <h1>Items</h1>
        {this.postItems()}
      </div>
    );
  }
}

GetItems.propTypes = {
  fetchItems: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  newItem: PropTypes.object,
  itemTitle: PropTypes.string,
  itemBody: PropTypes.string,
  itemID: PropTypes.number,
  deletedItem: PropTypes.object
}

const mapStateToProps = state => ({
  items: state.items.items,
  newItem: state.items.item,
  deletedItem: state.items.deletedItem
})

export default connect(mapStateToProps, { fetchItems })(GetItems);
