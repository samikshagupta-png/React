import { useState,useCallback } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charallowed,setcharallowed] = useState(false)
  const [password,setpassword]=useState("")
  const passwordgenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charallowed) str += "!@#$%^&*()[]{},.+-*"
    for(let i =1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char);

    }
    setpassword(pass)
  },[length,numberAllowed,charallowed,setpassword])

  return (
    <>
      <div className = "box">
        <div className="section">
            <div className='textsection'>
              <input type='text' value={password} className='input' placeholder='password' readOnly ></input>
              <button className='copybtn'>copy</button>
          </div><br></br>
          <div className='inputsection'>
            <input type='range' min={5} max={100} value={length} className='slider' onChange={(e) =>{setlength(e.target.value)}} ></input>
            <label>Length:{length}</label>
            <input type='checkbox' defaultChecked={numberAllowed} id='numberInput' onChange={() =>{setNumberAllowed((prev) => !prev);}} ></input>
            <label> Numbers</label>
            <input type='checkbox' defaultChecked={numberAllowed} id='numberInput' onChange={() =>{setNumberAllowed((prev) => !prev);}} ></input>
            <label> characters</label>
          </div>

        </div>

        
      </div>
    </>

  )
}

export default App
