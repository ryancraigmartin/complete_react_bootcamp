import React from 'react'
import Toggler from './Toggler'
import SimpleFormClass from './SimpleFormClass'
import SimpleFormHooks from './SimpleFormHooks'
import SimpleFormInputHook from './SimpleFormInputHook'
import './App.css'

function App() {
  return (
    <div className="App">
      <Toggler />
      <SimpleFormClass />
      <SimpleFormHooks />
      <SimpleFormInputHook />
    </div>
  )
}

export default App
