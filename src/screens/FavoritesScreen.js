import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import MealItem from '../components/MealItem';
import {createMealsByIdsSelector} from '../redux/meals/meals.selectors';
import {selectFavoriteMealsIds} from '../redux/user/user.selectors';

const renderGridItem = ({item}) => {
  return <MealItem mealItem={item} />;
};

const FavoritesScreen = () => {
  const favoriteIds = useSelector(selectFavoriteMealsIds);
  const favoriteMeals = useSelector(createMealsByIdsSelector(favoriteIds));

  return (
    <View style={styles.screen}>
      <FlatList
        data={favoriteMeals}
        renderItem={renderGridItem}
        contentContainerStyle={{
          padding: 20,
        }}
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

export default FavoritesScreen;
