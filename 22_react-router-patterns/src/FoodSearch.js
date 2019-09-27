import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class FoodSearch extends Component {
  constructor(props) {
    super(props)
    this.state = { query: '' }
  }
  handleChange = e => {
    this.setState({
      query: e.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>Search for a food</h1>
        <input type="text" value={this.state.query} onChange={this.handleChange} />
        <Link to={`/food/${this.state.query}`}>GO</Link>
      </div>
    )
  }
}
