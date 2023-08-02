const express=require('express');
const router=express.Router();
const todoController=require('../controllers/todoController');

router.get('/todo', todoController.getTodoData);
router.post('/todo', todoController.postTodoData);
router.delete('/todo/:Id', todoController.deleteTodoData);

module.exports=router;