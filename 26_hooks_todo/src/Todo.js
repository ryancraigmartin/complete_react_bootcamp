import React from 'react'
import useToggle from './hooks/useToggle'
import EditTodoForm from './EditTodoForm'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import {
  Checkbox,
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction
} from '@material-ui/core'

export default function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
  const [isEditing, toggle] = useToggle(false)
  return (
    <ListItem>
      {isEditing ? (
        <EditTodoForm editTodo={editTodo} />
      ) : (
        <>
          <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
          <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Edit" onClick={toggle}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  )
}
