import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Dimensions,
  Platform,
} from 'react-native';

import DefaultText from './DefaultText';

import SCREENS from '../config/Screens';

const CategoryItem = (item) => {
  const {id, color, title} = item;
  const navigation = useNavigation();

  const TouchableComponent = Platform.select({
    android: TouchableNativeFeedback,
    default: TouchableOpacity,
  });

  const TouchableChildComponent = Platform.select({
    android: View,
    default: React.Fragment,
  });

  return (
    <View style={styles.categoryItemContainer}>
      <View style={styles.categoryItemWrapper}>
        <TouchableComponent
          onPress={() =>
            navigation.navigate(SCREENS.CategoryMeals.name, {
              id,
              title,
            })
          }
          {...Platform.select({
            android: {},
            default: {
              style: [styles.categoryItem, {backgroundColor: color}],
            },
          })}>
          <TouchableChildComponent
            {...Platform.select({
              android: {
                style: [
                  styles.categoryItem,
                  {backgroundColor: color, overflow: 'hidden'},
                ],
              },
            })}>
            <DefaultText
              style={[
                styles.categoryTitle,
                {
                  fontSize: Dimensions.get('window').width > 350 ? 20 : 14,
                },
              ]}>
              {title}
            </DefaultText>
          </TouchableChildComponent>
        </TouchableComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItemContainer: {
    margin: 15,
    flex: 1,
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
  categoryItemWrapper: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
  categoryItem: {
    padding: 10,
    width: '100%',
    marginRight: 'auto',
    height: 130,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 20,
  },
  categoryTitle: {
    color: 'white',
    textShadowRadius: 3,
    textShadowColor: 'black',
    textAlign: 'right',
  },
});

export default CategoryItem;
