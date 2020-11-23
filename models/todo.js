'use strict';
const Helper = require('../helper')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ToDo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ToDo.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    due_date: {
      type : DataTypes.DATE,
      validate : {
        isAfter : {
          args : [Helper.getToday()],
          msg : 'the due date must be, at least, tommorow'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'ToDo',
  });
  return ToDo;
};