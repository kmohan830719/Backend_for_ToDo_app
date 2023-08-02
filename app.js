const express=require('express');
const cors=require('cors');
const sequelize=require('./util/database');
const app = express();

const todoRouter=require('./routes/todo');

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cors());

app.use(todoRouter);

sequelize.sync().then(result=>{
    app.listen(4000);
}).catch(err=>console.log(err));