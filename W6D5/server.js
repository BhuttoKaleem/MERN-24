// const app = require("./app");
const express = require("express");
const cors = require('cors')
const todoRouter = require('./routes/todo_routes');
const connection = require('./database/db_connection'); 
connection();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/todo", todoRouter);

const PORT = 5000;
//routes
app.use("/tasks",todoRouter);
app.listen(PORT, () => {
  console.log("server started");
});