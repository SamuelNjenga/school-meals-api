const foodAllocationService = require('../services/FoodAllocationDetailService');
const ReqValidator = require('../utils/validator')

exports.createFoodAllocationDetail = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            mealTicketId: 'required|integer',
            foodTypeCombinationId: 'required|integer',
            quantityAllocated: 'required'
        })
        if (!valid) return
        const data = {
            mealTicketId: req.body.mealTicketId,
            foodTypeCombinationId: req.body.foodTypeCombinationId,
            quantityAllocated: req.body.quantityAllocated
        };
        await foodAllocationService.createFoodAllocationDetail(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateFoodAllocationDetail = async (req, res) => {
    try {
        const valid = await ReqValidator.validate(req, res, {
            mealTicketId: 'required|integer',
            foodTypeCombinationId: 'required|integer',
            quantityAllocated: 'required'
        })
        if (!valid) return
        const data = {
            mealTicketId: req.body.mealTicketId,
            foodTypeCombinationId: req.body.foodTypeCombinationId,
            quantityAllocated: req.body.quantityAllocated
        };

        const foodAllocationId = req.params.id;
        await foodAllocationService.updateFoodAllocationDetail(data, {
            where: {
                id: foodAllocationId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteFoodAllocationDetail = async (req, res, next) => {
    try {
        const foodAllocationId = req.params.id;
        await foodAllocationService.deleteFoodAllocationDetail({
            where: {
                id: foodAllocationId
            }
        });
        res.status(200).json({
            data: null,
            message: `FoodAllocationDetail ${foodAllocationId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getFoodAllocationDetails = async (req, res) => {
    try {
        const foodAllocationDetails = await foodAllocationService.getFoodAllocationDetails();
        res.status(200).json(foodAllocationDetails);
    } catch (err) {
        res.json({
            message: err
        });
    }
};