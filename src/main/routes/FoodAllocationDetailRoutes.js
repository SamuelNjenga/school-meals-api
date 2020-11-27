const Router = require('express');
const foodAllocationController = require("../controllers/FoodAllocationDetailController");

const router = Router();

router.post('/', foodAllocationController.createFoodAllocationDetail);
router.get('/', foodAllocationController.getFoodAllocationDetails);
router.delete('/:id', foodAllocationController.deleteFoodAllocationDetail);
router.put('/:id', foodAllocationController.updateFoodAllocationDetail);

module.exports = router;