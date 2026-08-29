import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Contexts/Theme'
import ThemeBtn from './component/Themebtn';
import Card from './component/Card';
function App() {
  const [themeMode,setthemeMode] = useState('light');
  const lightTheme =()=>{
    setthemeMode("light");
  }
  const darkTheme =() =>{
    setthemeMode('dark');
  }
  //theme change
  useEffect (() =>{
    document.querySelector('html').classList.remove("light",'dark');
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])

  return (
    
    <>
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    <div className ="main">
      <div className='firstsection'>
        <div className='themebtn'>
            <ThemeBtn/>
        </div><br></br>
        <div className='cards'>
            <Card/>
        </div>

      </div>

    </div>
    </ThemeProvider>
    </>
  )
}

export default App
