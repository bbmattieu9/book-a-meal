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

  destroyOneMeal(id) {
    const mealId = id;
    let isDeleted = false;
    const thisMealId = dummyData.meals.find(meal => Number(meal.id) === Number(mealId));
    const theMealIndexById = dummyData.meals.indexOf(thisMealId);
    const removedMeal = dummyData.meals.splice(theMealIndexById, 1);
    if (removedMeal) {
      isDeleted = true;
    }
    return isDeleted;
  },


  updateOneMeal(id) {
    const mealId = id;
    const mealToUpdate = dummyData.meals.find(meal => Number(meal.id) === Number(mealId));
    const theMealIndexById = dummyData.meals.indexOf(mealToUpdate);
    const oldData = dummyData.meals.map((oldMeal) => {
      const newItem = new Meal();
      newItem.name = oldMeal.name;
      newItem.size = oldMeal.size;
      newItem.price = oldMeal.prize;
      return newItem;
    });
    const update = dummyData.meals.splice(theMealIndexById, 1, oldData);
    console.log(theMealIndexById);  
    return update;
  },
};
export default MealService;
