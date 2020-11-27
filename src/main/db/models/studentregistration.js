'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentRegistration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      StudentRegistration.hasMany(models.MealTicket,{
        onDelete:"cascade",
        foreignKey:{
          name:'admissionNumber',
          allowNull:false,
          unique:true
        }
      });
      StudentRegistration.belongsTo(models.FormOfStudy, {
        foreignKey: {
          name: 'formOfStudyId',
          allowNull: false
        }
      });
    }
  };
  StudentRegistration.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    sirName: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    admissionNumber: DataTypes.INTEGER,
    formOfStudyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StudentRegistration',
  });
  return StudentRegistration;
};