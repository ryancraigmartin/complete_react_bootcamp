import React, { Component } from "react";

class AnnoyingForm extends Component {
  handleKeyUp(e) {
    if (e.keyCode === 56) {
      alert("You pressed *");
    } else {
      alert("You should have pressed *");
    }
  }
  render() {
    return (
      <div>
        <h3>Type here:</h3>
        <textarea onKeyUp={this.handleKeyUp} cols="50" rows="5"></textarea>
      </div>
    );
  }
}

export default AnnoyingForm;
