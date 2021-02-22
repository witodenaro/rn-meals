import {createSelector} from 'reselect';

import {selectFavoriteMealsIds} from '../user/user.selectors';

const selectMeals = (state) => state.meals;

export const selectMealsData = createSelector(
  selectMeals,
  (meals) => meals.data,
);

export const createSelectMealById = (mealId) =>
  createSelector(selectMealsData, (mealsData) =>
    mealsData.find((meal) => meal.id === mealId),
  );

export const selectFavoriteMeals = createSelector(
  [selectMealsData, selectFavoriteMealsIds],
  (meals, mealsIds) => {
    return meals.filter((meal) => mealsIds.includes(meal.id));
  },
);
