const db = require('../db/models/index');

exports.getStudent = async (data) => {
    return db.StudentRegistration.findOne(data);
};

exports.updateStudent = async (data, root) => {
    return db.StudentRegistration.update(data, root);
};