/* eslint-disable react/no-did-mount-set-state */
import React, { Component } from 'react'
import axios from 'axios'
import './GithubUserInfo.css'

class GithubUserInfo extends Component {
  state = () => {
    this.state({
      imgUrl: '',
      name: ''
    })
  }
  componentDidMount = async () => {
    const url = `http://api.github.com/users/${this.props.username}`
    const response = await axios.get(url)
    const { data } = response
    this.setState({
      imgUrl: data.avatar_url,
      name: data.name
    })
  }
  render() {
    return (
      <div className="GithubUserInfo">
        <h1>Github User: {this.state.name}</h1>
        <img src={this.state.imgUrl} alt="" />
      </div>
    )
  }
}

export default GithubUserInfo
