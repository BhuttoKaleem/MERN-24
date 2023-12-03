const express = require("express");
const cors = require("cors");

const todoRoutes = require("./routes/todo.routes");
const connectDatabase = require("./database/connection");
connectDatabase();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/todo", todoRoutes);

module.exports = app; // default export
