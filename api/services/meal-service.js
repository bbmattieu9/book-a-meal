import dummyData from '../utils/dummyData';
import Meal from '../models/meal.model';

const MealService = {
  fetchAllMeals() {
    const allMeals = dummyData.meals.map((meal) => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.size = meal.size;
      newMeal.price = meal.price;
      return newMeal;
    });
    return allMeals;
  },

  addMeal(meal) {
    const mealId = meal;
    const lengthOfMeal = dummyData.meals.length;
    const lastMealId = dummyData.meals[lengthOfMeal - 1].id;
    const newId = lastMealId + 1;
    mealId.id = newId;
    dummyData.meals.push(meal);
    return meal;
  },

  getAMeal(id) {
    const mealId = id;
    const findMealById = dummyData.meals.find(meal => Number(meal.id) === Number(mealId));
    return findMealById || {};
  },
};

export default MealService;
