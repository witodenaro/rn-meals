import UserActionTypes from './user.types';
import {addFavoriteMealId} from './user.utils';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
  favoriteMealsIds: [],
};

const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case UserActionTypes.ADD_FAVORITE_MEAL_ID:
      return {
        ...state,
        favoriteMealsIds: addFavoriteMealId(state.favoriteMealsIds, payload),
      };

    case UserActionTypes.REMOVE_FAVORITE_MEAL_ID:
      return {
        ...state,
        favoriteMealsIds: state.favoriteMealsIds.filter(
          (mealId) => mealId !== payload,
        ),
      };

    default:
      return state;
  }
};

const persistConfig = {
  key: 'RNMeals/User',
  storage: AsyncStorage,
  whitelist: ['favoriteMealsIds'],
};

export default persistReducer(persistConfig, userReducer);
