import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import MealsBottomTabNavigator from './MealsBottomTabNavigator';
import FiltersBottomTabNavigator from './FiltersBottomTabNavigator';
import Colors from '../../constants/Colors';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerType="back"
      drawerContentOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.additional,
      }}>
      <Drawer.Screen name="Meals" component={MealsBottomTabNavigator} />
      <Drawer.Screen name="Filters" component={FiltersBottomTabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
