const foodRemainingService = require('../services/FoodRemainingDetailService');
const ReqValidator = require('../utils/validator')

exports.createFoodRemainingDetail = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            mealTicketId: 'required|integer',
            foodTypeCombinationId: 'required|integer',
            quantityRemaining: 'required'
        })
        if (!valid) return
        const data = {
            mealTicketId: req.body.mealTicketId,
            foodTypeCombinationId: req.body.foodTypeCombinationId,
            quantityRemaining: req.body.quantityRemaining
        };
        await foodRemainingService.createFoodRemainingDetail(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateFoodRemainingDetail = async (req, res) => {
    try {
        const valid = await ReqValidator.validate(req, res, {
            mealTicketId: 'required|integer',
            foodTypeCombinationId: 'required|integer',
            quantityRemaining: 'required'
        })
        if (!valid) return
        const data = {
            mealTicketId: req.body.mealTicketId,
            foodTypeCombinationId: req.body.foodTypeCombinationId,
            quantityRemaining: req.body.quantityRemaining
        };

        const foodRemainingId = req.params.id;
        await foodRemainingService.updateFoodRemainingDetail(data, {
            where: {
                id: foodRemainingId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteFoodRemainingDetail = async (req, res, next) => {
    try {
        const foodRemainingId = req.params.id;
        await foodRemainingService.deleteFoodRemainingDetail({
            where: {
                id: foodRemainingId
            }
        });
        res.status(200).json({
            data: null,
            message: `FoodRemainingDetail ${foodRemainingId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getFoodRemainingDetails = async (req, res) => {
    try {
        const foodRemainingDetails = await foodRemainingService.getFoodRemainingDetails();
        res.status(200).json(foodRemainingDetails);
    } catch (err) {
        res.json({
            message: err
        });
    }
};