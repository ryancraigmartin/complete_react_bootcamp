import React, { Component } from 'react'
import './Todo.css'
export class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      task: this.props.task
    }
  }

  toggleForm = () => {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  handleRemove = () => {
    this.props.removeTodo(this.props.id)
  }

  handleUpdate = e => {
    e.preventDefault()
    this.props.updateTodo(this.props.id, this.state.task)
    this.toggleForm()
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleToggle = e => {
    this.props.toggleTodo(this.props.id)
  }

  render() {
    let result
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form onSubmit={this.handleUpdate} className="Todo-edit-form">
            <input
              type="text"
              name="task"
              id=""
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      result = (
        <div className="Todo">
          <li
            onClick={this.handleToggle}
            className={this.props.completed ? ' Todo-task completed' : 'Todo-task'}
          >
            {this.props.task}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.toggleForm}>
              <i class="fas fa-pen"></i>
            </button>
            <button onClick={this.handleRemove}>
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      )
    }
    return result
  }
}

export default Todo
