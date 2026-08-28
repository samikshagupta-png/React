import React, { useContext, useState } from "react";
import Usercontext from "./context/Usercontext";
function Login(){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const {setUser} =useContext(Usercontext)
    const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") return; // prevent empty login
    setUser({ username ,password}); // 👈 store as object with username
    setUsername(""); // clear input after login
    setPassword("")
    
  };
    return(
        <div>
            <h2>Login</h2>
            <input type="text"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
             placeholder="username"/><br></br>
            <input type="text" 
             value={password}
             onChange={(e) =>setPassword(e.target.value)}
             placeholder="password"/><br></br>
            <button onClick={handleSubmit} >Submit</button>

        </div>
    )
}
export default Login;