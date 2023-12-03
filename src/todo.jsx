import React from 'react';
import './index.css';
import { useState } from 'react';
import Header from './header.jsx';
export default function Todo() {
// const [todo,setTodo] = useState([]);
const [task,setTask] = useState('');
const [name,setName] = useState('');
const [tasks,setTasks] = useState([]);

// const [task, setTask] = useState("");
// const [status, setStatus] = useState("completed");
  return (
    <React.Fragment>

    <Header/>
    <div className='container'>
      <form 
      onSubmit={(event)=>{
        event.preventDefault();
        setTasks([
          ...tasks,
          {
            task: task,
            name: name,
          }
        ]);
      }}
      >
      <label >Task</label>
      <input required type="text" value={task}
      onChange={(event)=>{
        setTask(event.target.value);
      }}/>
      <label >Name</label>
           <input required type="text" value={name}
      onChange={(event)=>{
        setName(event.target.value);
      }}/>
      
       {/* <select required value={status}
      onChange={(e)=>{
        setStatus(e.target.value);
      }}
      > 
      <option value="completed">Completed</option>
      <option value="InCompleted">InCompleted</option>
      <option value="Pending">Pending</option>    
        </select>  */}
      <button type='submit'className='bg-green-500 rounded-full w-[10vh]'>Submit</button>
      </form>
      <div>
        {
          tasks.map((todoItem,index)=>{
            return(
              <div key={index}>
              <div  style={{display:"flex", gap:"50px"}} className='gap-5 bg-purple-400'>
              
                <span>{todoItem.task}</span>
                <span>{todoItem.name}</span>
                <span>{index}</span> 
                {/* <span>{todoItem.time.getHours()}:{todoItem.time.getMinutes()}:{todoItem.time.getSeconds()}</span> */}
                <button onClick={()=>{
                        setTasks(tasks.filter(mytask=>mytask!=todoItem));
                }}
                className='bg-green-100 rounded-full'>delete</button>
              </div>
              </div>
            );
          }
          )
        }
      </div>
    </div>
    </React.Fragment>
    
  );
}
