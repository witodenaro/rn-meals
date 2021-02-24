import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import FiltersTabComponent from './FiltersNavigator';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Colors from '../constants/Colors';

const FiltersTab = Platform.select({
  android: createMaterialBottomTabNavigator(),
  default: createBottomTabNavigator(),
});

const FiltersBottomTabNavigator = () => {
  return (
    <FiltersTab.Navigator
      initialRouteName="Filters"
      {...Platform.select({
        android: {
          barStyle: {
            backgroundColor: Platform.select({
              default: Colors.primary,
            }),
          },
        },
      })}>
      <FiltersTab.Screen
        key="Filters"
        name="Filters"
        component={FiltersTabComponent}
        options={{
          tabBarLabel: 'Filters',
          tabBarIcon: ({color}) => (
            <Icon name="filter" size={20} color={color} />
          ),
          tabBarColor: Colors.primary,
        }}
      />
    </FiltersTab.Navigator>
  );
};

export default FiltersBottomTabNavigator;
