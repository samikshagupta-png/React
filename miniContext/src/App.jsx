import { useState } from 'react'
import Login from './Login'
import Profile from './Profile'
import './App.css'
import Usercontext from './context/Usercontext'
import UsercontextProvider from './context/Usercontextprovider'
function App() {
  
  return (
    <UsercontextProvider>
      
      <Login/>
      <Profile/>
    </UsercontextProvider>
  )
}

export default App
