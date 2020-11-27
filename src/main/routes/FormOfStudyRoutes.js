const Router = require('express');
const formOfStudyController = require("../controllers/FormOfStudyController");

const router = Router();

router.post('/', formOfStudyController.createFormOfStudy);
router.get('/', formOfStudyController.getFormOfStudies);
router.delete('/:id', formOfStudyController.deleteFormOfStudy);
router.put('/:id', formOfStudyController.updateFormOfStudy);

module.exports = router;