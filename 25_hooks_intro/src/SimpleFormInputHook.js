import React, { useState } from 'react'
import useInputState from './hooks/useInputState'

export default function SimpleFormInputHook() {
  const [email, handleEmailChange, resetEmail] = useInputState('')
  return (
    <div>
      <h1>The value is: {email}</h1>
      <input type="text" onChange={handleEmailChange} />
      <button onClick={resetEmail}>Submit</button>
    </div>
  )
}
