import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useCallback} from 'react/cjs/react.development';
import {createSelectMealById} from '../redux/meals/meals.selectors';
import {
  addFavoriteMealId,
  removeFavoriteMealId,
} from '../redux/user/user.actions';
import {createIsMealIdFavoriteSelector} from '../redux/user/user.selectors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../constants/Colors';
import useComponentWillMount from '../hooks/componentWillMount';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import AwesomeHeaderButton from '../components/AwesomeHeaderButton';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// title, affordability, complexity, imageUrl, duration, ingredients,
// steps, isGlutenFree, isVegan, isVegetarian, isLactoseFree

const MealDetailsScreen = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const mealId = route.params.id;
  const navigation = useNavigation();

  const meal = useSelector(createSelectMealById(mealId));
  const isFavorite = useSelector(createIsMealIdFavoriteSelector(mealId));

  const favoriteClickHandler = useCallback(() => {
    if (isFavorite) {
      dispatch(removeFavoriteMealId(mealId));
    } else {
      dispatch(addFavoriteMealId(mealId));
    }
  }, [isFavorite]);

  useComponentWillMount(() => {
    navigation.setOptions({
      title: meal.title,
    });
  });

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AwesomeHeaderButton}>
          <Item
            title="Favorite"
            iconName="star"
            solid={isFavorite}
            color={Platform.select({
              ios: COLORS.primary,
              default: 'white',
            })}
            onPress={favoriteClickHandler}
          />
        </HeaderButtons>
        // <TouchableOpacity
        //   style={styles.headerFavoriteButton}
        //   onPress={favoriteClickHandler}>
        //   <Icon
        //     name="star"
        //     size={20}
        //     color={Platform.select({
        //       ios: COLORS.primary,
        //       default: 'white',
        //     })}
        //     solid={isFavorite}
        //   />
        // </TouchableOpacity>
      ),
    });
  }, [favoriteClickHandler, isFavorite]);

  return (
    <View>
      <Text>{meal.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerFavoriteButton: {
    marginRight: 10,
  },
});

export default MealDetailsScreen;
