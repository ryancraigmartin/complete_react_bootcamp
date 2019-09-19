import React, { Component } from "react";
import "./WiseSquare.css";

class WiseSquare extends Component {
  static defaultProps = {
    quotes: [
      "If you fulfill your obligations everyday you don't need to worry about the future.",
      "If you are not willing to be a fool, you can't become a master.",
      "Perhaps you are overvaluing what you don’t have and undervaluing what you do.",
      "The purpose of life is finding the largest burden that you can bear and bearing it.",
      "The successful among us delay gratification. The successful among us bargain with the future.",
      "Compare yourself to who you were yesterday, not to who someone else is today."
    ]
  };
  dispenseWisdom = () => {
    console.log(this);
    let { quotes } = this.props;
    let i = Math.floor(Math.random() * quotes.length);
    console.log(quotes[i]);
  };
  render() {
    return (
      <div className="WiseSquare" onMouseEnter={this.dispenseWisdom}>
        <h1>Wise Emoji</h1>
        📚
      </div>
    );
  }
}

export default WiseSquare;
