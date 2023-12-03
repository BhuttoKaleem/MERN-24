import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Calculator from './calculator.jsx'
import Api from './api.jsx';
import './index.css'
import Todo from './todo.jsx'
import StopWatch from './StopWatch.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/stopWatch",
    element: <StopWatch/>,
  },
  {
    path: "/Calculator",
    element: <Calculator/>,
  },
  {
    path: "/api",
    element: <Api/>,
  },
  {
    path: "/todo",
    element: <Todo/>,
  },
 
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>,
)