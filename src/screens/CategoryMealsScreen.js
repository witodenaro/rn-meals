import React, {useMemo} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

import MealItem from '../components/MealItem';

import {useSelector} from 'react-redux';
import {selectFilteredMeals} from '../redux/meals/meals.selectors';
import DefaultText from '../components/DefaultText';

const CategoryMealsScreen = () => {
  const route = useRoute();
  const meals = useSelector(selectFilteredMeals);

  const categoryId = route.params.id;

  const filteredMeals = useMemo(() =>
    meals.filter((meal) => meal.categoryIds.includes(categoryId), [categoryId]),
  );

  const renderMealItem = ({item}) => <MealItem mealItem={item} />;

  const renderedItems = useMemo(
    () =>
      filteredMeals.length > 0 ? (
        <FlatList
          contentContainerStyle={{
            padding: 20,
          }}
          data={filteredMeals}
          renderItem={renderMealItem}
        />
      ) : (
        <DefaultText>
          No meals were found. Try removing some filters.
        </DefaultText>
      ),
    [filteredMeals.length > 0],
  );

  return <View style={styles.screen}>{renderedItems}</View>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
