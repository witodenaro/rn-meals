import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Dimensions,
  Platform,
} from 'react-native';

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

  console.log(TouchableComponent);

  return (
    <View style={styles.categoryItemContainer}>
      <View style={styles.categoryItemWrapper}>
        <TouchableComponent
          onPress={() =>
            navigation.navigate('CategoryMeals', {
              categoryId: id,
            })
          }
          // background={TouchableNativeFeedback.Ripple(color, true)}
          {...Platform.select({
            android: {},
            default: {
              style: [styles.categoryItem, {backgroundColor: color}],
            },
          })}>
          <TouchableChildComponent
            style={[
              styles.categoryItem,
              {backgroundColor: color, overflow: 'hidden'},
            ]}>
            <Text
              style={[
                styles.categoryTitle,
                {
                  fontSize: Dimensions.get('window').width > 350 ? 20 : 14,
                },
              ]}>
              {title}
            </Text>
          </TouchableChildComponent>
        </TouchableComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItemContainer: {
    padding: 15,
    flex: 1,
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
    elevation: 5,
    shadowOpacity: 0.26,
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOffset: {
      height: 2,
      width: 0,
    },
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
