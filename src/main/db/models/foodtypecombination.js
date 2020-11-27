'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodTypeCombination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FoodTypeCombination.hasMany(models.FoodAllocationDetail,{
        onDelete:"cascade",
        foreignKey:{
          name:'foodTypeCombinationId',
          allowNull:false
        }
      });
      FoodTypeCombination.hasMany(models.FoodRemainingDetail,{
        onDelete:"cascade",
        foreignKey:{
          name:'foodTypeCombinationId',
          allowNull:false
        }
      });
      FoodTypeCombination.belongsTo(models.Combination, {
        foreignKey: {
          name: 'combinationId',
          allowNull: false
        }
      });
      FoodTypeCombination.belongsTo(models.FoodItem, {
        foreignKey: {
          name: 'foodItemId',
          allowNull: false
        }
      });
    }
  };
  FoodTypeCombination.init({
    combinationId: DataTypes.INTEGER,
    foodItemId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FoodTypeCombination',
  });
  return FoodTypeCombination;
};