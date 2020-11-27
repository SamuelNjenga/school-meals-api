const db = require('../db/models/index');

exports.createStudentDiet = async (data) => {
    return db.StudentDiet.create(data);
};

exports.updateStudentDiet = async (data, root) => {
    return db.StudentDiet.update(data, root);
};

exports.getStudentDiets = async () => {
    return db.StudentDiet.findAll();
};

exports.deleteStudentDiet = async (data) => {
    return db.StudentDiet.destroy(data);
};