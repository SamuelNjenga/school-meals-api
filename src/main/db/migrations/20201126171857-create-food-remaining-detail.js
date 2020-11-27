'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FoodRemainingDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      foodAllocationDetailId: {
        type: Sequelize.INTEGER,
        references: { model: 'foodAllocationDetails', key: 'id' },
        onDelete: 'CASCADE',
      },
      quantityRemaining: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('FoodRemainingDetails');
  }
};