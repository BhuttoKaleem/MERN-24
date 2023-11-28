const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const router = express.Router();

app.use(cors());
app.use(router);

const PORT = 5000;
async function connectDatabase() {
    // await mongoose.connect('mongodb://127.0.0.1:27017/todo_app');
    await mongoose.connect('mongodb+srv://kaleem:kaleem@todoapi.9ihweva.mongodb.net/todos');
}

connectDatabase().then((result) => console.log(result)).catch(err => console.log(err));

const TodoSchema = new mongoose.Schema({
    taskText: { type: String },
    taskStatus: { type: Boolean }
});

const TodoModel = mongoose.model('todo', TodoSchema);

router.post('/tasks', (req, res) => {
    const { taskText, taskStatus } = req.body; // json 
    const todoCreated = new TodoModel({ taskText: taskText, taskStatus: taskStatus })
    todoCreated.save();
    res.json({
        success: true,
        todoCreated
    })
})

router.get('/tasks', async(req, res) => {
    const tasks = await TodoModel.find({},{__v:0}); // returns all the tasks
    res.json({
        success: true,
        tasks
    })
})

//status completed
router.get('/completed', async(req, res) => {
    const tasks = await TodoModel.find({ taskStatus: true })
    res.json(tasks)
})

//whose status is incomplete
router.get('/InComplete', async(req, res) => {
    const tasks = await TodoModel.find({ taskStatus: false })
    res.json(tasks)
})



router.patch('/update', async(req, res) => {
    const { id, taskText, taskStatus } = req.body; //JSON BODY
    const findTask = await TodoModel.findById(id);
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



router.delete('/delete', async(req, res) => {
    const { id } = req.query;
    const deletedData = await TodoModel.findByIdAndDelete(id); // deletes whose id is given with ?id=abc
    res.json({
        success: true,
        deletedData
    })
})

router.delete('/delete/:id', async(req, res) => {
    const { id } = req.params;
    const deletedData = await TodoModel.findByIdAndDelete(id); // deletes whose id is given with delete/abc
    res.json({
        success: true,
        deletedData
    })
})




router.delete('/delete/', async(req, res) => {
    const { id } = req.body;
    const deletedData = await TodoModel.findByIdAndDelete(id); // deletes whose id is given 
    res.json({
        success: true,
        deletedData
    })
})

app.listen(PORT, () => {
    console.log(`server is working ${PORT}`);
})