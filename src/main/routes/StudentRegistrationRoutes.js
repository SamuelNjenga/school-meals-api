const Router = require('express');
const studentRegController = require("../controllers/StudentRegistrationController");

const router = Router();

router.post('/', studentRegController.createStudent);
router.get('/', studentRegController.getStudents);
router.delete('/:id', studentRegController.deleteStudent);
router.put('/:id', studentRegController.updateStudent);

module.exports = router;