const express = require("express");
const router = express.Router();
const {getTasks,createTasks,completedTasks, inCompleteTasks} = require('../controllers/todo_controller');

//all tasks
router.post('/', createTasks);

//post tasks with body
router.get('/', getTasks);

//status completed
router.get('/completed', completedTasks);

//whose status is incomplete
router.get('/InComplete',inCompleteTasks);


router.route("/").get(getTasks).post(createTasks);
// router.patch('/update', async(req, res) => {
//     const { id, taskText, taskStatus } = req.body; //JSON BODY
//     const findTask = await TodoModel.findById(id);
//     if (findTask) {
//         findTask.taskText = taskText;
//         findTask.taskStatus = taskStatus;
//         findTask.save();
//         res.json({ success: true, findTask })
//     } else {
//         res.status(404).json({
//             success: false,
//             message: "Task Not found"
//         })
//     }

// })



// router.delete('/delete', async(req, res) => {
//     const { id } = req.query;
//     const deletedData = await TodoModel.findByIdAndDelete(id); // deletes whose id is given with ?id=abc
//     res.json({
//         success: true,
//         deletedData
//     })
// })

// router.delete('/delete/:id', async(req, res) => {
//     const { id } = req.params;
//     const deletedData = await TodoModel.findByIdAndDelete(id); // deletes whose id is given with delete/abc
//     res.json({
//         success: true,
//         deletedData
//     })
// })

// router.delete('/delete/', async(req, res) => {
//     const { id } = req.body;
//     const deletedData = await TodoModel.findByIdAndDelete(id); // deletes whose id is given 
//     res.json({
//         success: true,
//         deletedData
//     })
// })
module.exports = router;