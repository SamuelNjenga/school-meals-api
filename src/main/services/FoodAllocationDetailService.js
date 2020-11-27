const db = require('../db/models/index');

exports.createFoodAllocationDetail = async (data) => {
    return db.FoodAllocationDetail.create(data);
};

exports.updateFoodAllocationDetail = async (data, root) => {
    return db.FoodAllocationDetail.update(data, root);
};

exports.getFoodAllocationDetails = async () => {
    return db.FoodAllocationDetail.findAll();
};

exports.deleteFoodAllocationDetail = async (data) => {
    return db.FoodAllocationDetail.destroy(data);
};