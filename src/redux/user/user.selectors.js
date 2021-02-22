import {createSelector} from 'reselect';

const selectUser = (state) => state.user;
export const selectFavoriteMealsIds = createSelector(
  selectUser,
  (user) => user.favoriteMealsIds,
);

export const createIsMealIdFavoriteSelector = (mealId) =>
  createSelector(
    selectFavoriteMealsIds,
    (mealIds) => mealIds.indexOf(mealId) !== -1,
  );
