'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodAllocationDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  FoodAllocationDetail.init({
    mealTicketId: DataTypes.INTEGER,
    foodItemId: DataTypes.INTEGER,
    quantityAllocated: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'FoodAllocationDetail',
  });
  return FoodAllocationDetail;
};