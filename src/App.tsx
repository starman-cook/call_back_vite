import { useState } from 'react'
import './App.css'
import Button from './components/button/Button'

function App() {
  const [count, setCount] = useState(0)

  const changeCounter = () => {
    setCount(count + 1)
  }
  return (
    <>
      <h1 onClick={changeCounter}>{count}</h1>
      <Button />
    </>
  )
}

export default App
