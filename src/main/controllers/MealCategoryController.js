const mealCategoryService = require('../services/MealCategoryService');
const ReqValidator = require('../utils/validator')

exports.createMealCategory = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            mealCategoryTitle: 'required|string'
        })
        if (!valid) return
        const data = {
            mealCategoryTitle: req.body.mealCategoryTitle
        };
        await mealCategoryService.createMealCategory(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateMealCategory = async (req, res) => {
    try {
        const valid = await ReqValidator.validate(req, res, {
            mealCategoryTitle: 'required|string'
        })
        if (!valid) return
        const data = {
            mealCategoryTitle: req.body.mealCategoryTitle
        };

        const mealCategoryId = req.params.id;
        await mealCategoryService.updateMealCategory(data, {
            where: {
                id: mealCategoryId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteMealCategory = async (req, res, next) => {
    try {
        const mealCategoryId = req.params.id;
        await mealCategoryService.deleteMealCategory({
            where: {
                id: mealCategoryId
            }
        });
        res.status(200).json({
            data: null,
            message: `MealCategory ${mealCategoryId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getMealCategories = async (req, res) => {
    try {
        const mealCategories = await mealCategoryService.getMealCategories();
        res.status(200).json(mealCategories);
    } catch (err) {
        res.json({
            message: err
        });
    }
};