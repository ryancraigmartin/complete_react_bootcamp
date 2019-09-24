import React, { Component } from 'react'
import axios from 'axios'
import './ZenQuote.css'

class ZenQuote extends Component {
  state = () => {
    this.state({
      quote: '',
      isLoaded: false
    })
  }
  componentDidMount = async () => {
    const quote = await axios.get('https://api.github.com/zen')
    setTimeout(() => {
      this.setState({ quote: quote.data, isLoaded: true })
    }, 3000)
  }

  componentDidUpdate() {
    console.log('INSIDE componentDidUpdate')
  }

  render() {
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <h1>Always remember...</h1>
            <p>{this.state.quote}</p>
          </div>
        ) : (
          <div className="loader" />
        )}
      </div>
    )
  }
}

export default ZenQuote
