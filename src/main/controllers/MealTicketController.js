const mealTicketService = require('../services/MealTicketService');
const ReqValidator = require('../utils/validator')

exports.createMealTicket = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            admissionNumber: 'required|integer',
            mealCategoryId: 'required|integer',
            studentDietId: 'required|integer'
        })
        if (!valid) return
        const data = {
            admissionNumber: req.body.admissionNumber,
            mealCategoryId: req.body.mealCategoryId,
            studentDietId: req.body.studentDietId
        };
        await mealTicketService.createMealTicket(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateMealTicket = async (req, res) => {
    try {
        const valid = await ReqValidator.validate(req, res, {
            admissionNumber: 'required|integer',
            mealCategoryId: 'required|integer',
            studentDietId: 'required|integer'
        })
        if (!valid) return
        const data = {
            admissionNumber: req.body.admissionNumber,
            mealCategoryId: req.body.mealCategoryId,
            studentDietId: req.body.studentDietId
        };

        const mealTicketId = req.params.id;
        await mealTicketService.updateMealTicket(data, {
            where: {
                id: mealTicketId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteMealTicket = async (req, res, next) => {
    try {
        const mealTicketId = req.params.id;
        await mealTicketService.deleteMealTicket({
            where: {
                id: mealTicketId
            }
        });
        res.status(200).json({
            data: null,
            message: `MealTicket ${mealTicketId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getMealTickets = async (req, res) => {
    try {
        const mealTickets = await mealTicketService.getMealTickets();
        res.status(200).json(mealTickets);
    } catch (err) {
        res.json({
            message: err
        });
    }
};