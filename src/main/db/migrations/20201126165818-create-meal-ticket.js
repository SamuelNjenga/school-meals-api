'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MealTickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      admissionNumber: {
        type: Sequelize.INTEGER,
        references: { model: 'studentRegistrations', key: 'admissionNumber' },
        onDelete: 'CASCADE',
      },
      mealCategoryId: {
        type: Sequelize.INTEGER,
        references: { model: 'mealCategories', key: 'id' },
        onDelete: 'CASCADE',
      },
      studentDietId: {
        type: Sequelize.INTEGER,
        references: { model: 'studentDiets', key: 'id' },
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
    await queryInterface.dropTable('MealTickets');
  }
};