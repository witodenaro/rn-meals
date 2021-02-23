import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Platform, StyleSheet, Image, View, ScrollView} from 'react-native';
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
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';
import {useMemo} from 'react';
import {FlatList} from 'react-native-gesture-handler';

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
      ),
    });
  }, [favoriteClickHandler, isFavorite]);

  const renderIngredientItem = ({item}) => (
    <DefaultText style={styles.ingredient}>{item}</DefaultText>
  );

  const renderStepItem = ({item, index}) => (
    <View style={styles.step}>
      <DefaultText>
        {index + 1}. {item}
      </DefaultText>
    </View>
  );

  const renderCheckDetail = (condition, text) => (
    <View style={styles.infoContainer}>
      <View style={styles.iconContainer}>
        <Icon
          name={condition ? 'check' : 'times'}
          style={[{color: condition ? Colors.primary : 'red'}]}
        />
      </View>
      <DefaultText style={styles.detailText}>{text}</DefaultText>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: meal.imageUrl,
            }}
            resizeMode="cover"
          />
        </View>
        <DefaultText style={styles.title}>{meal.title}</DefaultText>
        <View style={styles.details}>
          <View style={styles.detail}>
            <Icon name="tags" />
            <DefaultText style={styles.detailText}>
              {meal.affordability}
            </DefaultText>
          </View>
          <View style={styles.detail}>
            <Icon name="grin-beam-sweat" />
            <DefaultText style={styles.detailText}>
              {meal.complexity}
            </DefaultText>
          </View>
          <View style={styles.detail}>
            <Icon name="clock" />
            <DefaultText style={styles.detailText}>
              {meal.duration} minutes
            </DefaultText>
          </View>
        </View>
        <View style={styles.info}>
          {renderCheckDetail(meal.isGlutenFree, 'Gluten free')}
          {renderCheckDetail(meal.isVegan, 'Vegan')}
          {renderCheckDetail(meal.isVegetarian, 'Vegetarian')}
          {renderCheckDetail(meal.isLactoseFree, 'Lactose free')}
        </View>
        <View style={styles.container}>
          <DefaultText style={styles.subtitle}>Ingredients</DefaultText>
          <FlatList
            data={meal.ingredients}
            keyExtractor={(item, index) => 'ingredient' + index}
            renderItem={renderIngredientItem}
          />
        </View>
        <View style={styles.container}>
          <DefaultText style={styles.subtitle}>Steps</DefaultText>
          <FlatList
            data={meal.steps}
            keyExtractor={(item, index) => 'step' + index}
            renderItem={renderStepItem}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
  },
  headerFavoriteButton: {
    marginRight: 10,
  },
  itemContainer: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
  imageContainer: {
    shadowColor: 'black',
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowRadius: 5,
    shadowOpacity: 0.26,
    elevation: 10,
    borderRadius: 20,
    width: '100%',
  },
  image: {
    height: 250,
    borderRadius: 20,
  },
  title: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 20,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    marginLeft: 10,
  },
  details: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '80%',
  },
  infoContainer: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    marginTop: 10,
    width: '80%',
    height: 40,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 10,
    alignItems: 'center',
  },
  container: {
    marginTop: 15,
    width: '80%',
  },
  ingredient: {
    marginTop: 5,
    fontSize: 16,
  },
  subtitle: {
    fontSize: 18,
    color: COLORS.primary,
  },
  step: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    shadowOpacity: 0.26,

    shadowOffset: {
      height: 2,
    },
  },
});

export default MealDetailsScreen;
