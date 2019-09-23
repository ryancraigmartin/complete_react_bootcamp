import React, { Component } from "react";

class ShoppingListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      qty: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({
      name: "",
      qty: ""
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor="qty">Qty: </label>
        <input
          id="qty"
          name="qty"
          type="text"
          value={this.state.qty}
          onChange={this.handleChange}
        />
        <button type="submit">Add Item</button>
      </form>
    );
  }
}

export default ShoppingListForm;
