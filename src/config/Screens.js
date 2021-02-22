import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

const SCREENS = {
  Categories: {
    name: 'Categories',
    title: 'Meal categories',
    component: CategoriesScreen,
  },
  CategoryMeals: {
    name: 'CategoryMeals',
    title: 'Category meals',
    component: CategoryMealsScreen,
  },
  MealDetails: {
    name: 'MealDetails',
    title: 'Meal details',
    component: MealDetailsScreen,
  },
  Favorites: {
    name: 'Favorites',
    title: 'Favorite',
    component: FavoritesScreen,
  },
  Filters: {
    name: 'Filters',
    title: 'Filters',
    component: FiltersScreen,
  },
};

export default SCREENS;
