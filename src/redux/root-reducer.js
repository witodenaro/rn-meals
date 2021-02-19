import {combineReducers} from 'redux';

import categoriesReducer from './categories/categories.reducer';
import mealsReducer from './meals/meals.reducer';

export default combineReducers({
  categories: categoriesReducer,
  meals: mealsReducer,
});
