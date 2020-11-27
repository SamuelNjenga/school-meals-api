'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FoodItem.hasMany(models.FoodAllocationDetail,{
        onDelete:"cascade",
        foreignKey:{
          name:'foodItemId',
          allowNull:false
        }
      });
    }
  };
  FoodItem.init({
    foodItemTitle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FoodItem',
  });
  return FoodItem;
};