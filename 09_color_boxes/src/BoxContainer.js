import React, { Component } from "react";
import Box from "./Box";
import "./BoxContainer.css";

export class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 20,
    allColors: [
      "rebeccapurple",
      "green",
      "yellow",
      "red",
      "pink",
      "orange",
      "coral",
      "salmon",
      "snow"
    ]
  };
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box colors={this.props.allColors} />
    ));
    return <div className="BoxContainer">{boxes}</div>;
  }
}

export default BoxContainer;
