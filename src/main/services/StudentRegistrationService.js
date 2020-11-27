const db = require('../db/models/index');

exports.createStudent = async (data) => {
    return db.StudentRegistration.create(data);
};

exports.updateStudent = async (data, root) => {
    return db.StudentRegistration.update(data, root);
};

exports.getStudents = async () => {
    return db.StudentRegistration.findAll();
};

exports.deleteStudent = async (data) => {
    return db.StudentRegistration.destroy(data);
};