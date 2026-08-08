import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")

  return (
    
      <div className="w-full h-screen duration-200"
        style ={{backgroundColor:color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={()=>setColor("red")} className="outline-none px-4  py-1" style={{backgroundColor:"red"}}>red</button>
            <button onClick={()=>setColor("green")} className="outline-none px-4  py-1 "style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=>setColor("yellow")} className="outline-none px-4  py-1" style={{backgroundColor:"yellow"}}>yellow</button>
            <button  onClick={()=>setColor("pink")} className="outline-none px-4  py-1" style={{backgroundColor:"pink"}}>pink</button>
            <button  onClick={()=>setColor("lightblue")} className="outline-none px-4  py-1" style={{backgroundColor:"lightblue"}}>blue</button>
            <button  onClick={()=>setColor("grey")}className="outline-none px-4  py-1" style={{backgroundColor:"grey"}}>grey</button>
            <button onClick={()=>setColor("lightpink")} className="outline-none px-4  py-1" style={{backgroundColor:"lightpink"}}>lightpink</button>
          </div>
          
        </div>
      </div>

      
    
  )
}

export default App
