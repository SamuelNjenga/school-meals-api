'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodRemainingDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FoodRemainingDetail.belongsTo(models.MealTicket, {
        foreignKey: {
          name: 'mealTicketId',
          allowNull: false
        }
      });
      FoodRemainingDetail.belongsTo(models.FoodTypeCombination, {
        foreignKey: {
          name: 'foodTypeCombinationId',
          allowNull: false
        }
      });
    }
  };
  FoodRemainingDetail.init({
    mealTicketId: DataTypes.INTEGER,
    foodTypeCombinationId: DataTypes.INTEGER,
    quantityRemaining: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'FoodRemainingDetail',
  });
  return FoodRemainingDetail;
};