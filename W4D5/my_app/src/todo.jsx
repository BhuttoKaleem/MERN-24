import React from "react";
import "./index.css";
import { useState } from "react";
import Header from "./header.jsx";
import { Footer } from "./Components/Footer.jsx";
export default function Todo() {
  // const [todo,setTodo] = useState([]);
  const [task, setTask] = useState("");
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);

  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("completed");
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <form
          onSubmit={(event) => {
            // confirm();
            event.preventDefault();
            setName(" ");
            setTask(" ");
            setTasks([
              ...tasks,
              {
                task: task,
                name: name,
                time: new Date(),
              },
            ]);
          }}
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
          <label>Name</label>
          <input
            required
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />

          {/* <select required value={status}
      onChange={(e)=>{
        setStatus(e.target.value);
      }}
      > 
      <option value="completed">Completed</option>
      <option value="InCompleted">InCompleted</option>
      <option value="Pending">Pending</option>    
        </select>  */}
          <button type="submit" className="bg-green-500 rounded-lg w-[10vh]">
            Submit
          </button>
        </form>
        <div>
          {tasks.map((todoItem, index) => {
            return (
              <div key={index}>
                <div
                  style={{ display: "flex", gap: "50px" }}
                  className="gap-5 bg-purple-400"
                >
                  <span>{index}</span>
                  <span>{todoItem.task}</span>
                  <span>{todoItem.name}</span>
                  <span>
                    {todoItem.time.getHours()}:{todoItem.time.getMinutes()}:
                    {todoItem.time.getSeconds()}
                  </span>
                  <button
                    onClick={() => {
                      setTasks(tasks.filter((mytask) => mytask != todoItem));
                    }}
                    className="bg-green-100 rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
