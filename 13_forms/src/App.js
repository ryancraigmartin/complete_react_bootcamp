import React from "react";
import Form from "./Form.js";
import MultipleForm from "./MultipleForm.js";
import ShoppingList from "./ShoppingList.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Form />
      <MultipleForm />
      <ShoppingList />
    </div>
  );
}

export default App;
