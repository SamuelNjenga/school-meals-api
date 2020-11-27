const Router = require('express');
const foodTypeCombinationController = require("../controllers/FoodTypeCombinationController");

const router = Router();

router.post('/', foodTypeCombinationController.createFoodTypeCombination);
router.get('/', foodTypeCombinationController.getFoodTypeCombinations);
router.delete('/:id', foodTypeCombinationController.deleteFoodTypeCombination);
router.put('/:id', foodTypeCombinationController.updateFoodTypeCombination);

module.exports = router;