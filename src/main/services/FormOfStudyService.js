const db = require('../db/models/index');

exports.createFormOfStudy = async (data) => {
    return db.FormOfStudy.create(data);
};

exports.updateFormOfStudy = async (data, root) => {
    return db.FormOfStudy.update(data, root);
};

exports.getFormOfStudies = async () => {
    return db.FormOfStudy.findAll();
};

exports.deleteFormOfStudy = async (data) => {
    return db.FormOfStudy.destroy(data);
};