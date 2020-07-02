import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem } from '../../../actions/itemActions';

class Item extends Component {
  onClick = (e) => {
    e.preventDefault();
    this.props.deleteItem(this.props.itemID);
  }

  render() {
    return (
      <div key={this.props.itemID} id={this.props.itemID} onClick={this.onClick}>
        <h3>{this.props.itemTitle}</h3>
        <p>{this.props.itemBody}</p>
      </div>
    );
  }
}

Item.propTypes = {
  itemTitle: PropTypes.string,
  itemBody: PropTypes.string,
  itemID: PropTypes.number,
  deleteItem: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  deleteItem
}

export default connect(null, mapDispatchToProps)(Item);
