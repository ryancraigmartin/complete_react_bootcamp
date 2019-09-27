import React, { Component } from 'react'

export default class Food extends Component {
  render() {
    const name = this.props.match.params.name
    const url = `https://source.unsplash.com/1600x900/?${this.props.name}`
    return (
      <div className="Food">
        <h1>I love to eat {name}</h1>
        <img src={url} alt={name} />
      </div>
    )
  }
}
