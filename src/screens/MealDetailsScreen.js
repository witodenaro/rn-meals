import {useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {createSelectMealById} from '../redux/meals/meals.selectors';

const MealDetailsScreen = () => {
  console.log('MEAL DETAILS INVOKE');
  const route = useRoute();
  const itemId = route.params.id;

  console.log('MEAL SELECT START');
  const meal = useSelector(createSelectMealById(itemId));
  console.log('MEAL SELECT END');
  return (
    <View>
      <Text>{meal.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MealDetailsScreen;
