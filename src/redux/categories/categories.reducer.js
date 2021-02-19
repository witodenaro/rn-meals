import CATEGORIES from './categories.data';

const initialState = {
  data: CATEGORIES,
};

const categoriesReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    default:
      return state;
  }
};

export default categoriesReducer;
