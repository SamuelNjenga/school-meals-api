const db = require('../db/models/index');

exports.createMealTicket = async (data) => {
    return db.MealTicket.create(data);
};

exports.updateMealTicket = async (data, root) => {
    return db.MealTicket.update(data, root);
};

exports.getMealTickets = async () => {
    return db.MealTicket.findAll();
};

exports.deleteMealTicket = async (data) => {
    return db.MealTicket.destroy(data);
};