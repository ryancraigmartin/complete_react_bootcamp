import React, { Component } from 'react'

export class Button extends Component {
  render() {
    return (
      <button onClick={function() {
        alert('Clicked!')
      }}>Click Me</button>
    )
  }
}

export default Button
