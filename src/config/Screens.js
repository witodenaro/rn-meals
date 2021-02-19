import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

const SCREENS = {
  Categories: {
    Screen: CategoriesScreen,
    title: 'Meal categories',
  },
  CategoryMeals: {
    Screen: CategoryMealsScreen,
    title: null,
  },
  Favorites: {
    Screen: FavoritesScreen,
    title: 'Favorite meals',
  },
  Filters: {
    Screen: FiltersScreen,
    title: 'Filters',
  },
};

export default SCREENS;
