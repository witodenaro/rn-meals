import React, {useMemo} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import MealItem from '../components/MealItem';

import {useSelector} from 'react-redux';
import {selectMealsData} from '../redux/meals/meals.selectors';

const CategoryMealsScreen = () => {
  const route = useRoute();
  const meals = useSelector(selectMealsData);

  const categoryId = route.params.id;

  const filteredMeals = useMemo(() =>
    meals.filter((meal) => meal.categoryIds.includes(categoryId), [categoryId]),
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
