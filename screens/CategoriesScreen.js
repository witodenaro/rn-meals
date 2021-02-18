import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';

import CATEGORIES from '../mock/categories';

const renderGridItem = ({item, navigation}) => {
  const {title, color} = item;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('categoryMeals', {
          title,
        })
      }
      style={[styles.categoryItem, {backgroundColor: color}]}>
      <Text style={styles.categoryTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const CategoriesScreen = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      contentContainerStyle={[styles.screen]}
      data={CATEGORIES}
      renderItem={(props) => renderGridItem({...props, navigation})}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'flex-start',
  },
  categoryItem: {
    flex: 1,
    marginBottom: 20,
    marginRight: 'auto',
    paddingVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  categoryTitle: {
    color: 'white',
    fontSize: 20,
    textShadowRadius: 3,
    textShadowColor: 'black',
  },
});

export default CategoriesScreen;
