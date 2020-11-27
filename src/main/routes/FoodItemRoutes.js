const Router = require('express');
const foodItemController = require("../controllers/FoodItemController");

const router = Router();

router.post('/', foodItemController.createFoodItem);
router.get('/', foodItemController.getFoodItems);
router.delete('/:id', foodItemController.deleteFoodItem);
router.put('/:id', foodItemController.updateFoodItem);

module.exports = router;