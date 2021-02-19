import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import MealDetails from '../screens/MealDetailsScreen';

import CATEGORIES_DATA from '../redux/categories/categories.data';
import MEALS_DATA from '../redux/meals/meals.data';

const SCREENS = {
  Categories: {
    Screen: CategoriesScreen,
    title: 'Meal categories',
  },
  CategoryMeals: {
    Screen: CategoryMealsScreen,
    title: (categoryId) =>
      CATEGORIES_DATA.find((category) => category.id === categoryId).title,
  },
  Favorites: {
    Screen: FavoritesScreen,
    title: 'Favorite meals',
  },
  Filters: {
    Screen: FiltersScreen,
    title: 'Filters',
  },
  MealDetails: {
    Screen: MealDetails,
    title: (mealId) => MEALS_DATA.find((meal) => meal.id === mealId).title,
  },
};

export default SCREENS;
