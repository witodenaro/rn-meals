import {createSelector} from 'reselect';

const selectMeals = (state) => state.meals;

export const selectMealsData = createSelector(
  selectMeals,
  (meals) => meals.data,
);

export const createSelectMealById = (mealId) =>
  createSelector(selectMealsData, (mealsData) =>
    mealsData.find((meal) => meal.id === mealId),
  );

export const createMealsByIdsSelector = (mealIds) =>
  createSelector(selectMealsData, (meals) => {
    return meals.filter((meal) => mealIds.includes(meal.id));
  });
