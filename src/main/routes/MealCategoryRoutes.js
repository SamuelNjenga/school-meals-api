const Router = require('express');
const mealCategoryController = require("../controllers/MealCategoryController");

const router = Router();

router.post('/', mealCategoryController.createMealCategory);
router.get('/', mealCategoryController.getMealCategories);
router.delete('/:id', mealCategoryController.deleteMealCategory);
router.put('/:id', mealCategoryController.updateMealCategory);

module.exports = router;