import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';

import {selectFavoriteMealsIds} from '../user/user.selectors';

const selectMeals = (state) => state.meals;

export const selectMealsData = createSelector(
  selectMeals,
  (meals) => meals.data,
);

export const createSelectMealById = memoize((mealId) =>
  createSelector(selectMealsData, (mealsData) =>
    mealsData.find((meal) => meal.id === mealId),
  ),
);

export const selectFavoriteMeals = createSelector(
  [selectMealsData, selectFavoriteMealsIds],
  (meals, mealsIds) => {
    return meals.filter((meal) => mealsIds.includes(meal.id));
  },
);

export const createSelectMealsByCategory = memoize((categoryId) =>
  createSelector(selectMealsData, (meals) =>
    meals.filter((meal) => meal.categoryIds.includes(categoryId)),
  ),
);
