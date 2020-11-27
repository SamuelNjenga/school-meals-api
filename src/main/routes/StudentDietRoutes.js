const Router = require('express');
const studentDietController = require("../controllers/StudentDietController");

const router = Router();

router.post('/', studentDietController.createStudentDiet);
router.get('/', studentDietController.getStudentDiets);
router.delete('/:id', studentDietController.deleteStudentDiet);
router.put('/:id', studentDietController.updateStudentDiet);

module.exports = router;