import MEALS from './meals.data';

const initialState = {
  data: MEALS,
};

const mealsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    default:
      return state;
  }
};

export default mealsReducer;
