const express = require("express");
// const res = require("express/lib/response");
const app = express();
const PORT = 5000;
// const router = express.Router();

const mongoose = require("mongoose");

async function connectDatabase() {
    await mongoose.connect('mongodb://127.0.0.1:27017/todo_app');
}

  const TodoSchema = new mongoose.Schema({
    taskText: String,
    taskStatus: Boolean,
  });

const TodoModel = mongoose.model('Todo', TodoSchema);

app.post('/tasks',(req,res)=>
{
    const {taskText,taskStatus} =  req.body; // json 
    const todoCreated =  new TodoModel({taskText:taskText, taskStatus: taskStatus})
    todoCreated.save();
    res.json({
        success: true,
        todoCreatedCreated
    })
})

app.get('/tasks',async(req,res)=>{
    const tasks  = await TodoModel.find(); // returns all the tasks
    res.json({
        success: true,
        tasks
    })
})

connectDatabase().then((result)=>console.log(result)).catch(err => console.log(err));
app.get("/",(req, res)=>{
    res.json({
        success: true,
        message: "server is live"  
    });
})

// app.use(router);
app.listen(PORT, () => {
    console.log('testing again ${PORT}');
});