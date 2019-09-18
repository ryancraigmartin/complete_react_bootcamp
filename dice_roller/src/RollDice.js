import React, { Component } from 'react'
import Die from "./Die";
import "./RollDice.css";

export class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  }
  constructor(props) {
    super(props)
    this.state = {
      d1: 'one',
      d2: 'one'
    }
    this.roll = this.roll.bind(this)
  }

  roll(){
    let newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ]
    let newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ]
    this.setState({d1: newDie1, d2: newDie2})
  }

  render() {
    return (
      <div className="RollDice">
        <h1>Roll the dice!</h1>
        <div className="RollDice-container">
          <Die face={this.state.d1}/>
          <Die face={this.state.d2}/>
        </div>
        <button onClick={this.roll}>Roll</button>
      </div>
    )
  }
}

export default RollDice