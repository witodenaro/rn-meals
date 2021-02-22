import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SCREENS from '../config/Screens';

const FavoritesStack = createStackNavigator();

const FavoritesTab = () => (
  <FavoritesStack.Navigator
    initialRouteName={SCREENS.Favorites.name}
    screenOptions={{
      headerShown: false,
    }}>
    <FavoritesStack.Screen
      name={SCREENS.Favorites.name}
      component={SCREENS.Favorites.component}
    />
  </FavoritesStack.Navigator>
);

export default FavoritesTab;
