const foodItemsService = require('../services/FoodItemService');
const ReqValidator = require('../utils/validator')

exports.createFoodItem = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            foodItemTitle: 'required|string'
        })
        if (!valid) return
        const data = {
            foodItemTitle: req.body.foodItemTitle
        };
        await foodItemsService.createFoodItem(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateFoodItem = async (req, res) => {
    try {
        const valid = await ReqValidator.validate(req, res, {
            foodItemTitle: 'required|string'
        })
        if (!valid) return
        const data = {
            foodItemTitle: req.body.foodItemTitle
        };

        const foodItemId = req.params.id;
        await foodItemsService.updateFoodItem(data, {
            where: {
                id: foodItemId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteFoodItem = async (req, res, next) => {
    try {
        const foodItemId = req.params.id;
        await foodItemService.deleteFoodItem({
            where: {
                id: foodItemId 
            }
        });
        res.status(200).json({
            data: null,
            message: `FoodItem ${foodItemId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getFoodItems = async (req, res) => {
    try {
        const foodItems = await foodItemsService.getFoodItems();
        res.status(200).json(foodItems);
    } catch (err) {
        res.json({
            message: err
        });
    }
};