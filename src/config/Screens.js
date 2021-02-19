import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import MealDetails from '../screens/MealDetailsScreen';

const SCREENS = {
  Categories: {
    Screen: CategoriesScreen,
    title: 'Meal categories',
  },
  CategoryMeals: {
    Screen: CategoryMealsScreen,
    title: 'Category',
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
    title: 'Meal details',
  },
};

export default SCREENS;
