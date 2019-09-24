import React, { Component } from "react";
import uuid from "uuid/v4";
import ShoppingListForm from "./ShoppingListForm";

// From the parent shopping component, we declare a method, addItem(), that the child form component can use to add a new item to the shopping list.
class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Milk", qty: "2 gal", id: uuid() },
        { name: "Cold Brew", qty: "1 gal", id: uuid() },
        { name: "Avocados", qty: "5", id: uuid() }
      ]
    };
  }

  addItem = item => {
    let newItem = { ...item, id: uuid() };
    this.setState(state => ({
      items: [...state.items, newItem]
    }));
  };

  renderItems() {
    return (
      <ul>
        {this.state.items.map(item => (
          <li key={item.id}>
            {item.name}: x{item.qty}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div className="ShoppingList">
        <h1>Shopping List</h1>
        {this.renderItems()}
        <ShoppingListForm addItem={this.addItem} />
      </div>
    );
  }
}

export default ShoppingList;
