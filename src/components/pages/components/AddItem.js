import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createItem } from '../../../actions/itemActions';

class AddItem extends Component {
  state = {
    title: '',
    body: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();

    const item = {
      title: this.state.title,
      body: this.state.body
    }

    this.props.createItem(item);
  }

  render() {
    return (
      <div>
        <h1>Add Item</h1>
        <form onSubmit={this.onSubmit}>
            <div>
              <label htmlFor="title">Title: </label>
              <input type="text" name="title" id="title" onChange={this.onChange} value={this.state.title} />
            </div>
            <div>
              <label htmlFor="body">Body: </label>
              <textarea name="body" id="body" onChange={this.onChange} value={this.state.body} />
            </div>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

AddItem.propTypes = {
  createItem: PropTypes.func.isRequired
}

export default connect(null, { createItem })(AddItem);
