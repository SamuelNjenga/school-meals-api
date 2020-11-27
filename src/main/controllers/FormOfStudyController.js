const formOfStudyService = require('../services/FormOfStudyService');
const ReqValidator = require('../utils/validator')

exports.createFormOfStudy = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            formTitle: 'required|string'
        })
        if (!valid) return
        const data = {
            formTitle: req.body.formTitle
        };
        await formOfStudyService.createFormOfStudy(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateFormOfStudy = async (req, res) => {
    try {
        const valid = await ReqValidator.validate(req, res, {
            formTitle: 'required|string'
        })
        if (!valid) return
        const data = {
            formTitle: req.body.formTitle
        };

        const formOfStudyId = req.params.id;
        await formOfStudyService.updateFormOfStudy(data, {
            where: {
                id: formOfStudyId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteFormOfStudy = async (req, res, next) => {
    try {
        const formOfStudyId = req.params.id;
        await formOfStudyService.deleteFormOfStudy({
            where: {
                id: formOfStudyId
            }
        });
        res.status(200).json({
            data: null,
            message: `FormOfStudy ${formOfStudyId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getFormOfStudies = async (req, res) => {
    try {
        const formOfStudies = await formOfStudyService.getFormOfStudies();
        res.status(200).json(formOfStudies);
    } catch (err) {
        res.json({
            message: err
        });
    }
};