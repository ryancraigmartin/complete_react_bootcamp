import React, { useState, useEffect } from 'react'
export default function Clicker() {
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click Me {count}</button>
    </div>
  )
}
