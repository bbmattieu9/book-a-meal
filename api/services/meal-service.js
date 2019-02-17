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
    let mealId = meal;
    const lengthOfMeal = dummyData.meals.length;
    const lastMealId = dummyData.meals[lengthOfMeal - 1].id;
    mealId = lastMealId + 1;
    const newMeal = new Meal();
    newMeal.id = mealId;
    dummyData.meals.push(meal);
    return meal;
  },

  getAMeal(id) {
    const findMealById = dummyData.meals.find(meal => meal.id === id);
    return findMealById || {};
  },
};

export default MealService;
