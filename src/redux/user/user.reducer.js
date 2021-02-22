import UserActionTypes from './user.types';
import {addFavoriteMealId} from './user.utils';

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

export default userReducer;
