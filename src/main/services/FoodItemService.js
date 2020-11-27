const db = require('../db/models/index');

exports.createFoodItem = async (data) => {
    return db.FoodItem.create(data);
};

exports.updateFoodItem = async (data, root) => {
    return db.FoodItem.update(data, root);
};

exports.getFoodItems = async () => {
    return db.FoodItem.findAll();
};

exports.deleteFoodItem = async (data) => {
    return db.FoodItem.destroy(data);
};