const db = require('../db/models/index');

exports.createFoodRemainingDetail = async (data) => {
    return db.FoodRemainingDetail.create(data);
};

exports.updateFoodRemainingDetail = async (data, root) => {
    return db.FoodRemainingDetail.update(data, root);
};

exports.getFoodRemainingDetails = async () => {
    return db.FoodRemainingDetail.findAll();
};

exports.deleteFoodRemainingDetail = async (data) => {
    return db.FoodRemainingDetail.destroy(data);
};