import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import MealsBottomTabNavigator from './MealsBottomTabNavigator';
import FiltersBottomTabNavigator from './FiltersBottomTabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Meals" component={MealsBottomTabNavigator} />
      <Drawer.Screen name="Filters" component={FiltersBottomTabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
