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
      FoodAllocationDetail.belongsTo(models.MealTicket, {
        foreignKey: {
          name: 'mealTicketId',
          allowNull: false
        }
      });
      FoodAllocationDetail.belongsTo(models.FoodTypeCombination, {
        foreignKey: {
          name: 'foodTypeCombinationId',
          allowNull: false
        }
      });
    }
  };
  FoodAllocationDetail.init({
    mealTicketId: DataTypes.INTEGER,
    foodTypeCombinationId: DataTypes.INTEGER,
    quantityAllocated: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'FoodAllocationDetail',
  });
  return FoodAllocationDetail;
};