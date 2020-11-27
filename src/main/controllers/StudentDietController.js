const studentDietService = require('../services/StudentDietService');
const ReqValidator = require('../utils/validator')

exports.createStudentDiet = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            dietTitle: 'required|string'
        })
        if (!valid) return
        const data = {
            dietTitle: req.body.dietTitle
        };
        await studentDietService.createStudentDiet(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateStudentDiet = async (req, res) => {
    try {
        const valid = await ReqValidator.validate(req, res, {
            dietTitle: 'required|string'
        })
        if (!valid) return
        const data = {
            dietTitle: req.body.dietTitle
        };

        const dietId = req.params.id;
        await studentDietService.updateStudentDiet(data, {
            where: {
                id: dietId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteStudentDiet = async (req, res, next) => {
    try {
        const dietId = req.params.id;
        await studentDietService.deleteStudentDiet({
            where: {
                id: dietId
            }
        });
        res.status(200).json({
            data: null,
            message: `StudentDiet ${dietId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getStudentDiets = async (req, res) => {
    try {
        const studentDiets = await studentDietService.getStudentDiets();
        res.status(200).json(studentDiets);
    } catch (err) {
        res.json({
            message: err
        });
    }
};