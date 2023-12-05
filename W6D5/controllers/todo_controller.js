const todo = require('../models/todo_model');
const CustomError = require("../middleware/CustomError");
const catchAsyncError = require("../middleware/catchAsyncError");

const getTasks = catchAsyncError(async (req,res)=>{
    // itis = jkdlsdj;
    // throw CustomError("not found",404);
 const tasks = await todo.find({});
 return res.json({tasks});
})

 const createTasks = catchAsyncError(async (req,res)=>{
    const { taskText, taskStatus } = req.body; // json 
    const todoCreated = todo({ taskText: taskText, taskStatus: taskStatus })
    todoCreated.save();
    res.json(
        todoCreated)
})

const completedTasks = catchAsyncError(async (req,res)=>{
    const tasks = await Todo.find({ taskStatus: true })
    res.json({tasks})
})


const inCompleteTasks = catchAsyncError(async (req,res)=>{
    const tasks = await Todo.find({ taskStatus: false })
    res.json({tasks})
})

module.exports = {
    getTasks,createTasks, completedTasks, inCompleteTasks
}