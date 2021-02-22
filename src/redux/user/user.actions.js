import UserActionTypes from './user.types';

export const addFavoriteMealId = (mealId) => ({
  type: UserActionTypes.ADD_FAVORITE_MEAL_ID,
  payload: mealId,
});

export const removeFavoriteMealId = (mealId) => ({
  type: UserActionTypes.REMOVE_FAVORITE_MEAL_ID,
  payload: mealId,
});
