const db = require('../db/models/index');

exports.createFoodTypeCombination = async (data) => {
    return db.FoodTypeCombination.create(data);
};

exports.updateFoodTypeCombination = async (data, root) => {
    return db.FoodTypeCombination.update(data, root);
};

exports.getFoodTypeCombinations = async () => {
    return db.FoodTypeCombination.findAll();
};

exports.deleteFoodTypeCombination = async (data) => {
    return db.FoodTypeCombination.destroy(data);
};