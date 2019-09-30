import { useState } from 'react'

export default function useToggle(initVal = false) {
  const [state, setState] = useState(initVal)
  const toggle = () => {
    setState(!state)
  }
  return [state, toggle]
}
