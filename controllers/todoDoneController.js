const TodoDone=require('../models/todoDone');

exports.getTodoData=(req,res,next)=>{
    TodoDone.findAll().then(todos=>{
        res.send(todos);
    })
    .catch(err=>console.log(err));
};

exports.postTodoData=(req,res,next)=>{
    const todo=req.body.todo;
    const desc=req.body.description;
    TodoDone.create({
        name:todo,
        description:desc
    }).then(result=>{
        res.send(result);
    })
    .catch(err=>console.log(err));
}