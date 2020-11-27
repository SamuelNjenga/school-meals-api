const foodTypeCombinationService = require('../services/FoodTypeCombinationService');
const ReqValidator = require('../utils/validator')

exports.createFoodTypeCombination = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            combinationId: 'required|integer',
            foodItemId: 'required|integer'
        })
        if (!valid) return
        const data = {
            combinationId: req.body.combinationId,
            foodItemId: req.body.foodItemId
        };
        await foodTypeCombinationService.createFoodTypeCombination(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateFoodTypeCombination = async (req, res) => {
    try {
        const valid = await ReqValidator.validate(req, res, {
            combinationId: 'required|integer',
            foodItemId: 'required|integer'
        })
        if (!valid) return
        const data = {
            combinationId: req.body.combinationId,
            foodItemId: req.body.foodItemId
        };

        const foodTypeCombinationId = req.params.id;
        await foodTypeCombinationService.updateFoodTypeCombination(data, {
            where: {
                id: foodTypeCombinationId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteFoodTypeCombination = async (req, res, next) => {
    try {
        const foodTypeCombinationId = req.params.id;
        await foodTypeCombinationService.deleteFoodTypeCombination({
            where: {
                id: foodTypeCombinationId
            }
        });
        res.status(200).json({
            data: null,
            message: `FoodTypeCombination ${foodTypeCombinationId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getFoodTypeCombinations = async (req, res) => {
    try {
        const foodTypeCombinations = await foodTypeCombinationService.getFoodTypeCombinations();
        res.status(200).json(foodTypeCombinations);
    } catch (err) {
        res.json({
            message: err
        });
    }
};