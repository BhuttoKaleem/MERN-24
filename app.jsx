import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'; 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
       <React.Fragment>
<h1>
  <Link to={"/StopWatch"} className='text-decoration:none'>
    link is live
  </Link>
</h1>
<h1>
  <Link to={"/Calculator"} className='text-decoration:none'>
    link is live
  </Link>
</h1>
    </React.Fragment>

   
  )
}

export default App
