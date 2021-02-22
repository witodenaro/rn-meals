import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Screens from '../config/Screens';
import TabBar from './TabBar';
import CategoriesTab from '../tabs/CategoriesTab';
import FavoritesTab from '../tabs/FavoritesTab';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      initialRouteName="Categories">
      <BottomTab.Screen
        key="Categories"
        name="Categories"
        component={CategoriesTab}
        options={{
          title: 'Categories',
        }}
      />
      <BottomTab.Screen
        key="Favorites"
        name="Favorites"
        component={FavoritesTab}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
