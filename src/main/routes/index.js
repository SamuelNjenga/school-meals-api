const Router = require('express');
const db = require('../db/models/index'); /* For database*/
const {crud,sequelizeCrud} = require('express-sequelize-crud') /* for CRUD*/ 

const LoginRoutes = require('./LoginRoutes');
const FormOfStudyRoutes = require('./FormOfStudyRoutes')
const FoodItemRoutes = require('./FoodItemRoutes')
const MealCategoryRoutes = require('./MealCategoryRoutes')
const StudentRegRoutes = require('./StudentRegistrationRoutes')
const StudentDietRoutes = require('./StudentDietRoutes')
const MealTicketRoutes = require('./MealTicketRoutes')
const CombinationRoutes = require('./CombinationRoutes')
const FoodAllocationRoutes = require('./FoodAllocationDetailRoutes')
const FoodTypeCombinationRoutes = require('./FoodTypeCombinationRoutes')
const FoodRemainingRoutes = require('./FoodRemainingDetailRoutes')

const router = Router();

router.use('/login', LoginRoutes);
router.use('/formOfStudies',FormOfStudyRoutes);
router.use('/foodItems',FoodItemRoutes);
router.use('/mealCategories',MealCategoryRoutes);
router.use('/students', StudentRegRoutes);
router.use('/combinations', CombinationRoutes);
router.use('/studentDiets', StudentDietRoutes);
router.use('/mealTickets', MealTicketRoutes);
router.use('/foodAllocations', FoodAllocationRoutes);
router.use('/foodRemainings', FoodRemainingRoutes);
router.use('/foodTypeCombinations', FoodTypeCombinationRoutes);


router.use(crud('/student/formOfStudies', sequelizeCrud(db.FormOfStudy)))

module.exports = router;