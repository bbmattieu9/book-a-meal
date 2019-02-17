import { Router } from 'express';

import MealController from '../controllers/meal.controller';
import OrderController from '../controllers/order.controller';

const router = Router();

router.get('/', MealController.fetchAllMeals);
router.post('/', MealController.addNewMeal);
router.get('/:id', MealController.getASingleMealById);


router.get('/', OrderController.fetchAllOrders);
router.post('/', OrderController.addNewOrder);
router.get('/:id', OrderController.getASingleOrderById);

export default router;
