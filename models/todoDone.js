const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const TodoDone = sequelize.define('todoDone', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  });

module.exports=TodoDone;