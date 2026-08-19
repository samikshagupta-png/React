import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,setNumberAllowed]=usestate(false);
  const [charallowed,setcharallowed]=usestate(false)
  const [password,setpassword]=usestate("")
  const passwordgenerator =() => {}

  return (
    <>
      <h1 className='text-4xl text-center text-white'>password generator</h1>
    </>
  )
}

export default App
