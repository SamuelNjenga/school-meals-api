'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FoodTypeCombinations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      combinationId: {
        type: Sequelize.INTEGER,
        references: { model: 'combinations', key: 'id' },
        onDelete: 'CASCADE',
      },
      foodItemId: {
        type: Sequelize.INTEGER,
        references: { model: 'foodItems', key: 'id' },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('FoodTypeCombinations');
  }
};