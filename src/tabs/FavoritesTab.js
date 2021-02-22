import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SCREENS from '../config/Screens';

import COLORS from '../constants/Colors';

const FavoritesStack = createStackNavigator();

const FavoritesTab = () => (
  <FavoritesStack.Navigator
    initialRouteName={SCREENS.Favorites.name}
    screenOptions={{
      headerTitleStyle: {
        color: Platform.select({
          ios: COLORS.secondary,
          default: 'white',
        }),
      },
      headerStyle: {
        backgroundColor: Platform.select({
          ios: 'white',
          default: COLORS.secondary,
        }),
      },
    }}>
    <FavoritesStack.Screen
      name={SCREENS.Favorites.name}
      component={SCREENS.Favorites.component}
    />
    <FavoritesStack.Screen
      name={SCREENS.MealDetails.name}
      component={SCREENS.MealDetails.component}
      options={{}}
    />
  </FavoritesStack.Navigator>
);

export default FavoritesTab;
