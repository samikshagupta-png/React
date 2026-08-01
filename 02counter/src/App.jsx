import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let counter =15
  const addvalue =() =>{
    
    counter =counter+1
  }

  return (
    <>
     <h1>react_series</h1> 
     <h2>counter value:{counter}</h2>
     <button onClick={addvalue}>Add value</button>
     <br></br>
     <button>remove value</button>
    </>
  )
}

export default App
