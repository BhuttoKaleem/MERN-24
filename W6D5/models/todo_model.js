const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
    taskText: { type: String },
    taskStatus: { type: Boolean }
});
const todoModel = mongoose.model('todo',TodoSchema);
module.exports = todoModel;
