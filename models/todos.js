const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Todo = sequelize.define('todo', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  });

module.exports=Todo;