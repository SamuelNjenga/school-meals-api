'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FoodAllocationDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mealTicketId: {
        type: Sequelize.INTEGER,
        references: { model: 'mealTickets', key: 'id' },
        onDelete: 'CASCADE',
      },
      foodItemId: {
        type: Sequelize.INTEGER,
        references: { model: 'foodItems', key: 'id' },
        onDelete: 'CASCADE',
      },
      quantityAllocated: {
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
    await queryInterface.dropTable('FoodAllocationDetails');
  }
};