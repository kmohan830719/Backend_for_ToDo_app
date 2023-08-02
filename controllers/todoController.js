const Todo=require('../models/todos');

exports.getTodoData=(req,res,next)=>{
    Todo.findAll().then(todos=>{
        res.send(todos);
    })
    .catch(err=>console.log(err));
};

exports.postTodoData=(req,res,next)=>{
    const todo=req.body.todo;
    const desc=req.body.description;
    Todo.create({
        name:todo,
        description:desc
    }).then(result=>{
        res.send(result);
    })
    .catch(err=>console.log(err));
}

exports.deleteTodoData=(req,res,next)=>{
    const todoId=req.params.Id;
    Todo.findByPk(todoId).then(todo=>{
      todo.destroy();
      console.log('USER DELETED')
    })
    .catch(err=>console.log(err));
}