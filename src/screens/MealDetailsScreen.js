import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {createSelectMealById} from '../redux/meals/meals.selectors';

const MealDetailsScreen = () => {
  const route = useRoute();
  const itemId = route.params.id;
  const navigation = useNavigation();

  const meal = useSelector(createSelectMealById(itemId));

  useEffect(() => {
    navigation.setOptions({
      title: meal.title,
    });
  }, []);
  return (
    <View>
      <Text>{meal.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MealDetailsScreen;
