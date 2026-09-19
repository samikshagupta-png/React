import { useState } from 'react'
import navimg from './assets/nav.png'
import './App.css'
import QuoteBox from './assets/components/quotebox'
function App() {
 




  

  return (
    <>
    <nav>
      <img src={navimg} alt='nav-img'></img>
    </nav><br></br>
    <main>
      <div id='firstsection'>
        <div id='habitsection'>
          <h1>Today's habits</h1><hr></hr>
        </div>
        <div id='quotesection'>
            <QuoteBox/>
        </div>

      </div><br></br>
      <div className='habitprogress'>

      </div>
    </main>
      
    </>
  )
}

export default App