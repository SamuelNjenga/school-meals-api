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
      MealTicket.hasOne(models.FoodAllocationDetail,{
        onDelete:"cascade",
        foreignKey:{
          name:'mealTicketId',
          allowNull:false
        }
      });
      MealTicket.hasOne(models.FoodRemainingDetail,{
        onDelete:"cascade",
        foreignKey:{
          name:'mealTicketId',
          allowNull:false
        }
      });
      MealTicket.belongsTo(models.StudentRegistration, {
        foreignKey: {
          name: 'admissionNumber',
          allowNull: false,
          unique:true
        }
      });
      MealTicket.belongsTo(models.MealCategory, {
        foreignKey: {
          name: 'mealCategoryId',
          allowNull: false
        }
      });
      MealTicket.belongsTo(models.StudentDiet, {
        foreignKey: {
          name: 'studentDietId',
          allowNull: false
        }
      });
    }
  };
  MealTicket.init({
    admissionNumber: DataTypes.INTEGER,
    mealCategoryId: DataTypes.INTEGER,
    studentDietId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MealTicket',
  });
  return MealTicket;
};