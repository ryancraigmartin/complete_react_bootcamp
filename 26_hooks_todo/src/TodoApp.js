import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v4'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { AppBar, Toolbar, Grid, Paper, Typography } from '@material-ui/core'

export default function TodoApp() {
  const initialTodos = [
    { id: 1, task: 'Record podcast', completed: false },
    { id: 2, task: 'Learn React', completed: true },
    { id: 3, task: 'Watch Movie', completed: false }
  ]
  const [todos, setTodos] = useState(initialTodos)
  const addTodo = newTodoText => {
    setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }])
  }
  const removeTodo = todoId => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId)
    setTodos(updatedTodos)
  }
  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    )
    setTodos(updatedTodos)
  }
  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map(todo => (todo.id === todoId ? { ...todo, task: newTask } : todo))
    setTodos(updatedTodos)
  }
  return (
    <Paper
      style={{ padding: 0, margin: 0, height: '100vh', backgroundColor: '#fafafa' }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">Todos with Hooks!</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}
