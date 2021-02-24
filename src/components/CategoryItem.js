import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Dimensions,
  Platform,
  Image,
} from 'react-native';

import DefaultText from './DefaultText';

import SCREENS from '../config/Screens';
import Colors from '../constants/Colors';

const CategoryItem = (item) => {
  const {id, title, imageUrl} = item;
  const navigation = useNavigation();

  return (
    <View style={styles.categoryItemWrapper}>
      <View style={styles.categoryItemContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(SCREENS.CategoryMeals.name, {
              id,
              title,
            })
          }
          style={[styles.categoryItem, {backgroundColor: 'transparent'}]}>
          <Image style={styles.backgroundImage} source={{uri: imageUrl}} />
          <DefaultText
            style={[
              styles.categoryTitle,
              {
                fontSize: Dimensions.get('window').width > 350 ? 20 : 14,
              },
            ]}>
            {title}
          </DefaultText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItemContainer: {
    margin: 15,
    flex: 1,
    borderRadius: 20,
  },
  categoryItemWrapper: {
    flex: 1,
    borderRadius: 20,
  },
  categoryItem: {
    width: '100%',
    marginRight: 'auto',
    height: 130,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 20,
    elevation: 8,
    shadowOpacity: 0.26,
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOffset: {
      height: 2,
      width: 0,
    },
  },
  categoryTitle: {
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 5,
    textAlign: 'right',
    fontFamily: 'OpenSans-Bold',
    marginBottom: 10,
    marginRight: 10,
  },
  backgroundImage: {
    zIndex: -1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
});

export default CategoryItem;
