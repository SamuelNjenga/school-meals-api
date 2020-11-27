const Router = require('express');
const mealTicketController = require("../controllers/MealTicketController");

const router = Router();

router.post('/', mealTicketController.createMealTicket);
router.get('/', mealTicketController.getMealTickets);
router.delete('/:id', mealTicketController.deleteMealTicket);
router.put('/:id', mealTicketController.updateMealTicket);

module.exports = router;