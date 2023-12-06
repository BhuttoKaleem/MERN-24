const todo = require('../models/todo_model');
const CustomError = require("../middleware/CustomError");
const catchAsyncError = require("../middleware/catchAsyncError");

getTasks = catchAsyncError(async (req,res)=>{
    // itis = jkdlsdj;
    // throw CustomError("not found",404);
 const tasks = await todo.find({});
 return res.json({tasks});
})

createTasks = catchAsyncError(async (req,res)=>{
    const { taskText, taskStatus } = req.body; // json 
    const todoCreated = todo({ taskText: taskText, taskStatus: taskStatus })
    todoCreated.save();
    res.json(
        todoCreated)
})

completedTasks = catchAsyncError(async (req,res)=>{
    const tasks = await todo.find({ taskStatus: true })
    res.json({tasks})
})


inCompleteTasks = catchAsyncError(async (req,res)=>{
    const tasks = await todo.find({ taskStatus: false })
    res.json({tasks})
})

UpdateTasks = catchAsyncError( async(req, res) => {
    const { id, taskText, taskStatus } = req.body; //JSON BODY
    const findTask = await todo.findById(id);
    if (findTask) {
        findTask.taskText = taskText;
        findTask.taskStatus = taskStatus;
        findTask.save();
        res.json({ success: true, findTask })
    } else {
        res.status(404).json({
            success: false,
            message: "Task Not found"
        })
    }
})

deleteById = catchAsyncError( async(req, res) => {
    const { id } = req.params;
    const deletedTask = await todo.findByIdAndDelete(id); // deletes whose id is given with delete/abc
    res.json({
        success: true,
        deletedTask
    })
})

module.exports = {
    getTasks,createTasks, completedTasks, inCompleteTasks,UpdateTasks,deleteById,
}