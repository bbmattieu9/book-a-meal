import MealService from '../services/meal-service';

const MealController = {
  fetchAllMeals(req, res) {
    const allMeals = MealService.fetchAllMeals();
    return res
      .json({
        status: 'success',
        data: allMeals,
      })
      .status(200);
  },

  addNewMeal(req, res) {
    const createThisNewMeal = req.body;
    const theNewlyCreatedMeal = MealService.addMeal(createThisNewMeal);
    return res
      .json({
        status: 'success',
        data: theNewlyCreatedMeal,
      })
      .status(201);
  },

  getASingleMealById(req, res) {
    const usingThisId = req.params.id;
    const theSingleMealFound = MealService.getAMeal(usingThisId);
    return res
      .json({
        status: 'success',
        data: theSingleMealFound,
      })
      .status(200);
  },
};
export default MealController;
