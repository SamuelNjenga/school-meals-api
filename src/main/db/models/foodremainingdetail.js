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
      FoodRemainingDetail.belongsTo(models.FoodAllocationDetail, {
        foreignKey: {
          name: 'foodAllocationDetailId',
          allowNull: false
        }
      });
    }
  };
  FoodRemainingDetail.init({
    foodAllocationDetailId: DataTypes.INTEGER,
    quantityRemaining: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'FoodRemainingDetail',
  });
  return FoodRemainingDetail;
};