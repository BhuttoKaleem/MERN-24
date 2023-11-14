import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
const [a,setA] = useState();
const [b, setB] = useState();
const [result, setResult] = useState();
const [time,setTime] = useState(0);
setInterval(()=>{
  setTime(time=>time+1);
},7000);
  return (
    <React.Fragment>
        <div className=' flex flex-col'>
      <form onSubmit={((e)=>{
      e.preventDefault();
      })} >
        <div>

        {/* <label> */}
          a <input type="number" onChange={(e)=>setA(e.target.value)}
          value={a}
          id='number1'
          className='rounded-full'
          />
        {/* </label> */}
        {/* <label >b */}
          <input type='number' onChange={(e)=>setB(e.target.value)}
          value={b}
          id='number2'
       ></input>
       {/* </label> */}
        </div>
        <div className='flex flex-col gap-10'>

        <button onClick={()=>{
          setResult(Number(a)+Number(b));
          // setA(0);
          // setB(0);
        }}>+</button>
        <button onClick={()=>{
          setResult(Number(a)-Number(b));
        }}
        >-</button>
        <button 
        onClick={()=>{
          setResult(Number(a)*Number(b));
        }}>*</button>
        <button
        onClick={()=>{
          setResult(Number(a)/Number(b));
        }}>/</button>
        <button
        onClick={()=>{
          setResult(Number(a)%Number(b));
        }}>%</button>
        </div>

      </form>
      <div>
        <span className='w-[100vh] h-[100vh]'>
          Result:   {result}
        </span>
      </div>
      </div>
    </React.Fragment>
  )
}

export default App
