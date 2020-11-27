const studentRegService = require('../services/StudentRegistrationService');
const ReqValidator = require('../utils/validator')
const bcrypt = require('bcrypt')

async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}

exports.createStudent = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            firstName: 'required|string',
            lastName: 'required|string',
            sirName: 'required|string',
            gender: 'required|string',
            admissionNumber: 'required|integer',
            password: 'required|string',
            formOfStudyId: 'required|integer'
        })
        if (!valid) return
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            sirName: req.body.sirName,
            gender: req.body.gender,
            password: req.body.password,
            admissionNumber: req.body.admissionNumber,
            formOfStudyId: req.body.formOfStudyId
        };
        const hashedPassword = await hashPassword(data.password);
        const newStudent = {
            firstName: data.firstName,
            lastName: data.lastName,
            sirName: data.sirName,
            gender: data.gender,
            password: hashedPassword,
            admissionNumber: data.admissionNumber,
            formOfStudyId: data.formOfStudyId
        }
        await studentRegService.createStudent(newStudent)
        res.status(201).json(newStudent);
    } catch (err) {
        console.log(err);
    }
};

exports.updateStudent = async (req, res) => {
    try {
        const valid = await ReqValidator.validate(req, res, {
            firstName: 'required|string',
            lastName: 'required|string',
            sirName: 'required|string',
            gender: 'required|string',
            admissionNumber: 'required|integer',
            password: 'required|string',
            formOfStudyId: 'required|integer'
        })
        if (!valid) return
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            sirName: req.body.sirName,
            gender: req.body.gender,
            password: req.body.password,
            admissionNumber: req.body.admissionNumber,
            formOfStudyId: req.body.formOfStudyId
        };

        const studentId = req.params.id;
        const hashedPassword = await hashPassword(data.password);
        const updatedStudent = {
            firstName: data.firstName,
            lastName: data.lastName,
            sirName: data.sirName,
            gender: data.gender,
            password: hashedPassword,
            admissionNumber: data.admissionNumber,
            formOfStudyId: data.formOfStudyId
        }
        
        await studentRegService.updateStudent(updatedStudent, {
            where: {
                id: studentId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteStudent = async (req, res, next) => {
    try {
        const studentId = req.params.id;
        await studentRegService.deleteStudent({
            where: {
                id: studentId
            }
        });
        res.status(200).json({
            data: null,
            message: `Student ${studentId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getStudents = async (req, res) => {
    try {
        const students = await studentRegService.getStudents();
        res.status(200).json(students);
    } catch (err) {
        res.json({
            message: err
        });
    }
};