'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MealTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MealTicket.init({
    ticketNumber: DataTypes.INTEGER,
    studentRegNumber: DataTypes.INTEGER,
    mealCategoryId: DataTypes.INTEGER,
    studentDietId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MealTicket',
  });
  return MealTicket;
};