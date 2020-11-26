'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FormOfStudy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FormOfStudy.hasMany(models.StudentRegistration,{
        onDelete:"cascade",
        foreignKey:{
          name:'formOfStudyId',
          allowNull:false
        }
      });
    }
  };
  FormOfStudy.init({
    formTitle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FormOfStudy',
  });
  return FormOfStudy;
};