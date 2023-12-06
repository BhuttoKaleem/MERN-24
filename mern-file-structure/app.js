const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/product.route");
const todoRoutes = require("./routes/todo.routes");
const connectDatabase = require("./database/connection");
const handleError = require("./middleware/error");

connectDatabase();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/todo", todoRoutes);
app.use("/product",productRoutes);
app.use(handleError);

module.exports = app; // default export
