import { useState,useCallback } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,setNumberAllowed]=usestate(false);
  const [charallowed,setcharallowed] = usestate(false)
  const [password,setpassword]=usestate("")
  const passwordgenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charallowed) str += "!@#$%^&*()[]{},.+-*"
    for(let i =1;i<=array.length;i++){
      let char = Math.floor(Math.random() * str.length+1)
      pass += str.charAt(char);

    }
    setpassword(pass)
  },[length,numberAllowed,charallowed,setpassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>test</div>
    </>
  )
}

export default App
