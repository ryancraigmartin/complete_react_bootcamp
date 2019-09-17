import React, { Component } from 'react'

export class Game extends Component {
  constructor(props) {
    super(props)
    this.setState = {
      score: 99,
      gameOver: false
    }
  }
  render() {
    return (
      <div>
        <h1>Your score is: {this.props.score}</h1>
      </div>
    )
  }
}

export default Game
