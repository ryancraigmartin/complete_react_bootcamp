import React from 'react'
import useInputState from './hooks/useInputState'
import { TextField } from '@material-ui/core'

export default function EditTodoForm({ editTodo }) {
  const [value, handleChange, reset] = useInputState('')
  return <TextField fullWidth margin="normal" value={value} a onChange={handleChange} />
}
