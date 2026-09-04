import { useState } from 'react'
import './App.css'
import  Addtodo from './Components/Addtodo'
import Todos from './Components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>made this by redux toolkit</h1>
    <Addtodo/><br></br>
    <Todos/>
      
            
    </>
  )
}

export default App
