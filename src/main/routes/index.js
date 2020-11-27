const Router = require('express');
const LoginRoutes = require('./LoginRoutes');
const FormOfStudyRoutes = require('./FormOfStudyRoutes')
const FoodItemRoutes = require('./FoodItemRoutes')
const StudentRegRoutes = require('./StudentRegistrationRoutes');

const router = Router();

router.use('/login', LoginRoutes);
router.use('/formOfStudies',FormOfStudyRoutes);
router.use('/foodItems',FoodItemRoutes);
router.use('/students', StudentRegRoutes);

module.exports = router;