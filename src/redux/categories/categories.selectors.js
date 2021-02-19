import {createSelector} from 'reselect';

const selectCategories = (state) => state.categories;

export const selectCategoriesData = createSelector(
  selectCategories,
  (categories) => categories.data,
);

export const createSelectCategoryTitleById = (id) =>
  createSelector(
    selectCategoriesData,
    (data) => data.find((category) => category.id === id).title,
  );
