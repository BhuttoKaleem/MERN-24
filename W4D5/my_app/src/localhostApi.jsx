import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import Header from "./header.jsx";
// import { Footer } from "./Components/Footer.jsx";

import axios from "axios";
function TodoApi() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");
  const [taskStatus, setStatus] = useState("");
  useEffect(() => {
    getAllTodo();
  }, []);
    async function getAllTodo() {
    const response = await axios.get("http://localhost:5000/tasks");
     setTodo(response.data.tasks);
    // console.log(response.data.tasks)
  };

  return (
    <React.Fragment>
      <Header/>
        <div>
        <form
             onSubmit={async(event) => {
              event.preventDefault();
            await axios.post("http://localhost:5000/tasks", {
            taskText:task, 
            taskStatus: taskStatus
            });
          } 
        }
        >
          <label>Task</label>
          <input
            required
            type="text"
            value={task}
            onChange={(event) => {
              setTask(event.target.value);
            }}
          />

          <select required value={taskStatus}
      onChange={(e)=>{
        setStatus(e.target.value);
      }}
      > 
      <option value="true">true</option>
      <option value="false">false</option>    
        </select> 
          <button type="submit" className="bg-green-500 rounded-lg w-[10vh]">
            Submit
          </button>
        </form>
        </div>
      <button onClick={getAllTodo}>Get Todo</button>    
      {todo.map((todoItem, index) => (
        <div key={index}>
          Text: {todoItem.taskText}
          &nbsp; status: {JSON.stringify(todoItem.taskStatus)}
          <button
            onClick={async () => {
              const id = todoItem._id;
              const text = todoItem.taskText;
              const updatedStatus = !todoItem.taskStatus;
              await axios.patch("http://localhost:5000/update", {
                id,
                text,
                status: updatedStatus,
              });
              getAllTodo();
            }}
          >
            Change Status{" "}
          </button>
        </div>
      ))}
    </React.Fragment>
  )
}

export default TodoApi;