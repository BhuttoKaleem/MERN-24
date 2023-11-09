import React from 'react';
import './index.css';
import { useState } from 'react';

export default function App() {
const [todo,setTodo] = useState([]);
const [task, setTask] = useState("");
const [status, setStatus] = useState("completed");
// const [time,setTime]= useState(new Date());
  return (
    <div className='container'>
      <form 
      onSubmit={(event)=>{
        event.preventDefault();
        setTodo([
          ...todo,
          {
            task: task,
            status: status,
            time: new Date(),
          }
        ]);
      }}
      >
      <label >Task</label>
      <input required type="text" value={task}
      onChange={(event)=>{
        setTask(event.target.value);
      }}
      />
      <select required value={status}
      onChange={(e)=>{
        setStatus(e.target.value);
      }}
      > 
      <option value="completed">Completed</option>
      <option value="InCompleted">InCompleted</option>
      <option value="Pending">Pending</option>    
      </select>
      <button type='submit'>Submit</button>
      </form>
      <div>
        {
          todo.map((todoItem)=>{
            return(
              <div>
              {/* <div style={{itemGap:"50px"}}>
              <span>task</span>
              <span>status</span>
              <span>time</span>
              </div> */}
              <div key={todoItem} style={{display:"flex", gap:"50px"}}>

                <span>{todoItem.task}</span>
                <span>{todoItem.status}</span>
                <span>{todoItem.time.getHours()}:{todoItem.time.getMinutes()}:{todoItem.time.getSeconds()}</span>
              </div>
              </div>
            );
          }
          )
        }
      </div>
    </div>
  );
}

