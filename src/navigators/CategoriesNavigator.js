import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from '../constants/Colors';
import {Platform} from 'react-native';
import SCREENS from '../config/Screens';
import {useNavigation} from '@react-navigation/native';

import HeaderMenuButton from '../components/HeaderMenuButton';
import HeaderBackButton from '../components/HeaderBackButton';

const CategoriesStack = createStackNavigator();

const CategoriesTab = () => {
  const navigation = useNavigation();

  return (
    <CategoriesStack.Navigator
      initialRouteName={SCREENS.Categories.name}
      screenOptions={{
        headerTitleStyle: {
          color: Platform.select({
            ios: Colors.primary,
            default: 'white',
          }),
          fontFamily: 'OpenSans-Bold',
        },
        headerStyle: {
          backgroundColor: Platform.select({
            ios: 'white',
            default: Colors.primary,
          }),
        },
        headerLeft: () => <HeaderBackButton navigation={navigation} />,
      }}>
      <CategoriesStack.Screen
        name={SCREENS.Categories.name}
        component={SCREENS.Categories.component}
        options={{
          title: SCREENS.Categories.title,
          headerLeft: () => <HeaderMenuButton navigation={navigation} />,
        }}
      />
      <CategoriesStack.Screen
        name={SCREENS.CategoryMeals.name}
        component={SCREENS.CategoryMeals.component}
        options={({route}) => ({
          title: route.params.title,
        })}
      />
      <CategoriesStack.Screen
        name={SCREENS.MealDetails.name}
        component={SCREENS.MealDetails.component}
        options={({route}) => ({
          title: route.params.title,
        })}
      />
    </CategoriesStack.Navigator>
  );
};

export default CategoriesTab;
