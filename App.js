import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FiltersScreen from './screens/FiltersScreen';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.screen}>
        <ScrollView contentContainerStyle={styles.screen}>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="categories">
            <Stack.Screen name="categories" component={CategoriesScreen} />
            <Stack.Screen
              name="categoryMeals"
              component={CategoryMealsScreen}
            />
          </Stack.Navigator>
        </ScrollView>
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
