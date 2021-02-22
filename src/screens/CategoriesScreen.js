import React from 'react';
import {FlatList} from 'react-native';

import CategoryItem from '../components/CategoryItem';

import CATEGORIES from '../mock/categories';

const renderGridItem = ({item}) => {
  return <CategoryItem {...item} />;
};

const CategoriesScreen = () => {
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

export default CategoriesScreen;
