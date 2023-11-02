import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const  clickMe = ()=>{

    alert("You have just clicked!")
    
  }

  const colors=["red","green","blue"];

  return (
    <>
    
      {

   <div>
   
  <h1>Hello</h1>
  <div className='mainCircle'></div>

  <div className='wrap'>
    {colors}

  <div className="subCirle" style={{backgroundColor:Map.colors}}></div>
  <div className="subCirle"></div>
  <div className="subCirle"></div>
  <div className="subCirle"></div>
  </div>

  <button onClick={clickMe}>Click Me!</button>
   </div>
      /* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='myName'>Awais Ali & Kaleem</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
