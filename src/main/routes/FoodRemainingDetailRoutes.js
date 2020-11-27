const Router = require('express');
const foodRemainingController = require("../controllers/FoodRemainingDetailController");

const router = Router();

router.post('/', foodRemainingController.createFoodRemainingDetail);
router.get('/', foodRemainingController.getFoodRemainingDetails);
router.delete('/:id', foodRemainingController.deleteFoodRemainingDetail);
router.put('/:id', foodRemainingController.updateFoodRemainingDetail);

module.exports = router;