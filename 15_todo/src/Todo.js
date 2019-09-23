import React, { Component } from 'react'

export class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      task: this.props.task
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
  }
  handleRemove() {
    this.props.removeTodo(this.props.id)
  }
  handleUpdate(e) {
    e.preventDefault()
    this.props.updateTodo(this.props.id, this.state.task)
    this.toggleForm()
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }
  render() {
    let result
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
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
        <div>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
          <li>{this.props.task}</li>
        </div>
      )
    }
    return result
  }
}

export default Todo
