const express = require("express");
const router = express.Router();
const {getTasks,createTasks,completedTasks, inCompleteTasks,UpdateTasks} = require('../controllers/todo_controller');

//all tasks
router.post('/', createTasks);

//post tasks with body
router.get('/', getTasks);

//status completed
router.get('/completed', completedTasks);

//whose status is incomplete
router.get('/InComplete',inCompleteTasks);


router.route("/").get(getTasks).post(createTasks);
router.patch('/update',UpdateTasks)



router.delete('/delete', async(req, res) => {
    const { id } = req.query;
    const deletedData = await TodoModel.findByIdAndDelete(id); // deletes whose id is given with ?id=abc
    res.json({
        success: true,
        deletedData
    })
})

router.delete('/delete/:id',deleteById)

router.delete('/delete/', async(req, res) => {
    const { id } = req.body;
    const deletedData = await TodoModel.findByIdAndDelete(id); // deletes whose id is given 
    res.json({
        success: true,
        deletedData
    })
})
module.exports = router;