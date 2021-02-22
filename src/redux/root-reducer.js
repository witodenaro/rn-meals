import {combineReducers} from 'redux';

import categoriesReducer from './categories/categories.reducer';
import mealsReducer from './meals/meals.reducer';
import userReducer from './user/user.reducer';

export default combineReducers({
  categories: categoriesReducer,
  meals: mealsReducer,
  user: userReducer,
});
