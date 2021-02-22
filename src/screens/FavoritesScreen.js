import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import MealItem from '../components/MealItem';
import {selectFavoriteMeals} from '../redux/meals/meals.selectors';

const renderGridItem = ({item}) => {
  return <MealItem mealItem={item} />;
};

const FavoritesScreen = () => {
  const favoriteMeals = useSelector(selectFavoriteMeals);

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
