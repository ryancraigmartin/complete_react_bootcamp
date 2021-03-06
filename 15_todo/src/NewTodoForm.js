import React, { Component } from 'react'
import uuid from 'uuid/v4'
import './NewTodoForm.css'

class NewTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.createTodo({ ...this.state, id: uuid(), completed: false })
    this.setState({
      task: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="NewTodoForm">
        <input
          name="task"
          id="task"
          type="text"
          placeholder="New Task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add ToDo</button>
      </form>
    )
  }
}

export default NewTodoForm
