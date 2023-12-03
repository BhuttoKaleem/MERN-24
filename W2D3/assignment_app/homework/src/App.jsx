import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function justClick(){
  alert("Kaleemullah");
}
function App() {

  return (
    <>
    
      {

  <div>

  <button onClick={justClick} id='btn'>
    Click Here!
    </button>
   </div>
  }
    </>
  )
}

export default App
