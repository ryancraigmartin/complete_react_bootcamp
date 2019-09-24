import React, { Component } from 'react'

class Timer extends Component {
  constructor(props) {
    super(props)
    console.log('CONSTRUCTOR')
    this.state = { time: new Date() }
  }
  // state = () => {
  //   this.state({
  //     time: new Date()
  //   })
  // }
  componentDidMount = () => {
    console.log('IN COMPONENTDIDMOUNT')
    this.timerID = setInterval(() => {
      this.setState({ time: new Date() })
    }, 1000)
  }
  render() {
    console.log('IN RENDER')
    return (
      <div>
        <h1>
          {this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}
        </h1>
      </div>
    )
  }
}

export default Timer
