import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FiltersScreen from './screens/FiltersScreen';

import COLORS from './constants/Colors';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.screen}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: COLORS.primary,
              ...Platform.select({
                ios: {
                  backgroundColor: 'white',
                },
              }),
            },
            headerTitleStyle: {
              ...Platform.select({
                ios: {
                  color: COLORS.primary,
                },
                default: {
                  color: 'white',
                },
              }),
            },
          }}
          initialRouteName="categories">
          <Stack.Screen
            name="categories"
            options={{
              headerTitle: 'Categories',
            }}
            component={CategoriesScreen}
          />
          <Stack.Screen
            name="categoryMeals"
            options={({route}) => ({
              headerTitle: route.params.title,
            })}
            component={CategoryMealsScreen}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
