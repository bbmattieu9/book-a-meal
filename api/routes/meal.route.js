import { Router } from 'express';

import MealController from '../controllers/meal.controller';

const router = Router();

router.get('/', MealController.fetchAllMeals);
router.post('/', MealController.addNewMeal);
router.get('/:id', MealController.getASingleMealById);


export default router;
