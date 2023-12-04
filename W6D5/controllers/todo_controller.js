const todo = require('../models/todo_model');

async function getTasks(req,res){
 const tasks = await todo.find({});
 return res.json({tasks});
}

async function createTasks(req,res){
    const { taskText, taskStatus } = req.body; // json 
    const todoCreated = todo({ taskText: taskText, taskStatus: taskStatus })
    todoCreated.save();
    res.json(
        todoCreated)
}

async function completedTasks(req,res){
    const tasks = await Todo.find({ taskStatus: true })
    res.json({tasks})
}


async function inCompleteTasks(req,res){
    const tasks = await Todo.find({ taskStatus: false })
    res.json({tasks})
}

module.exports = {
    getTasks,createTasks, completedTasks, inCompleteTasks
}