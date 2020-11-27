'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('StudentRegistrations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      sirName: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      admissionNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique:true
      },
      formOfStudyId: {
        type: Sequelize.INTEGER,
        references: { model: 'formOfStudies', key: 'id' },
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
    await queryInterface.dropTable('StudentRegistrations');
  }
};