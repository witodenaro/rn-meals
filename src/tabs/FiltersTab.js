import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SCREENS from '../config/Screens';

const FiltersStack = createStackNavigator();

const FavoritesTab = () => (
  <FiltersStack.Navigator initialRouteName={SCREENS.Filters.name}>
    <FiltersStack.Screen
      name={SCREENS.Filters.name}
      component={SCREENS.Filters.component}
    />
  </FiltersStack.Navigator>
);

export default FavoritesTab;
