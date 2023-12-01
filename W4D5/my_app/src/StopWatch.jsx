import { useState } from 'react'
import React from 'react'
import Header from './Components/header'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'

const stopWatch = ()=> {

  

  const [sec,setSec] = useState(0);
  const [min,setMin] = useState(0);
  const [hour,setHour] = useState(0);

  const [intervalId,setIntervalId] = useState(0);



   function start() {

    const Id  = setInterval(() => {

      setSec(sec => sec + 1);

    }, 1000);


    setIntervalId(Id);

  }
  function stop() {
    clearInterval(intervalId);
  }
  function reset(){
    clearInterval(intervalId);
    setSec(0);
    setMin(0);
    setHour(0);
    start();
  }
return(
  <React.Fragment>  
    <Header/>
  <div>
      <div className='flex justify-center item-center mt-10 flex-col'>
      <h1 className="p-5 rounded font-bold bg-slate-900 text-white mb-2">Stop Watch</h1>

       <div className='flex flex-row justify-center gap-2'>
        <span className='bg-black text-white p-3 rounded font-bold'> Hour:{Math.floor(sec/3600)} Min:{Math.floor(sec/60)%60}  Sec:{sec%60}</span>

       </div>
      </div>

      <div className=' flex justify-center gap-5 mt-5'>
      <button className='border-[2px] border-green-900 rounded p-3 hover:bg-red-900 hover:text-white' onClick={start}>Start</button>

      <button className='border-[2px] border-gray-900 rounded p-3  hover:bg-green-900 hover:text-white' onClick={stop}>Stop</button>

      <button className='border-[2px] border-red-900 rounded p-3  hover:bg-yellow-900 hover:text-white' onClick={reset} >Restart</button>
      </div>
  </div> 
</React.Fragment>
)
  
}

export default stopWatch;