'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentDiet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  StudentDiet.init({
    dietTitle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StudentDiet',
  });
  return StudentDiet;
};