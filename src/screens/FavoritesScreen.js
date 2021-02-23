import React from 'react';
import {useMemo} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import MealItem from '../components/MealItem';
import {selectFavoriteMeals} from '../redux/meals/meals.selectors';

import DefaultText from '../components/DefaultText';

const renderGridItem = ({item}) => {
  return <MealItem mealItem={item} />;
};

const FavoritesScreen = () => {
  const favoriteMeals = useSelector(selectFavoriteMeals);

  const renderedFavorites = useMemo(
    () =>
      favoriteMeals.length > 0 ? (
        <FlatList
          data={favoriteMeals}
          renderItem={renderGridItem}
          contentContainerStyle={{
            padding: 20,
          }}
        />
      ) : (
        <DefaultText style={styles.textEmpty}>
          No meals were added to favorite
        </DefaultText>
      ),
    [favoriteMeals],
  );

  return <View style={styles.screen}>{renderedFavorites}</View>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
