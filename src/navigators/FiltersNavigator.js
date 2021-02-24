import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SCREENS from '../config/Screens';
import {useNavigation} from '@react-navigation/native';
import {Platform} from 'react-native';

import Colors from '../constants/Colors';

import HeaderMenuButton from '../components/HeaderMenuButton';
const FiltersStack = createStackNavigator();

const FavoritesTab = () => {
  const navigation = useNavigation();

  return (
    <FiltersStack.Navigator
      initialRouteName={SCREENS.Filters.name}
      screenOptions={{
        headerTitleStyle: {
          color: Platform.select({
            ios: Colors.primary,
            default: 'white',
          }),
        },
        headerStyle: {
          backgroundColor: Platform.select({
            ios: 'white',
            default: Colors.primary,
          }),
        },
      }}>
      <FiltersStack.Screen
        name={SCREENS.Filters.name}
        component={SCREENS.Filters.component}
        options={{
          headerLeft: () => <HeaderMenuButton navigation={navigation} />,
        }}
      />
    </FiltersStack.Navigator>
  );
};

export default FavoritesTab;
