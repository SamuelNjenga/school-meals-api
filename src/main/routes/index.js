const Router = require('express');
const LoginRoutes = require('./LoginRoutes');
const FormOfStudyRoutes = require('./FormOfStudyRoutes')
const FoodItemRoutes = require('./FoodItemRoutes')
const MealCategoryRoutes = require('./MealCategoryRoutes')
const StudentRegRoutes = require('./StudentRegistrationRoutes')
const StudentDietRoutes = require('./StudentDietRoutes')
const MealTicketRoutes = require('./MealTicketRoutes')
const FoodAllocationRoutes = require('./FoodAllocationDetailRoutes')
const FoodRemainingRoutes = require('./FoodRemainingDetailRoutes')

const router = Router();

router.use('/login', LoginRoutes);
router.use('/formOfStudies',FormOfStudyRoutes);
router.use('/foodItems',FoodItemRoutes);
router.use('/mealCategories',MealCategoryRoutes);
router.use('/students', StudentRegRoutes);
router.use('/studentDiets', StudentDietRoutes);
router.use('/mealTickets', MealTicketRoutes);
router.use('/foodAllocations', FoodAllocationRoutes);
router.use('/foodRemainings', FoodRemainingRoutes);

module.exports = router;