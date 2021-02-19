import React, {useEffect, useMemo} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import MealItem from '../components/MealItem';

import MEALS from '../mock/meals';

const CategoryMealsScreen = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const categoryId = route.params.categoryId;

  const filteredMeals = useMemo(() =>
    MEALS.filter((meal) => meal.categoryIds.includes(categoryId), [categoryId]),
  );

  const renderMealItem = ({item}) => <MealItem mealItem={item} />;

  return (
    <View style={styles.screen}>
      <FlatList
        contentContainerStyle={{
          padding: 20,
        }}
        data={filteredMeals}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
