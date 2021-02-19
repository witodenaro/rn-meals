import CategoriesScreen from './CategoriesScreen';
import CategoryMealsScreen from './CategoryMealsScreen';
import FavoritesScreen from './FavoritesScreen';
import FiltersScreen from './FiltersScreen';

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
