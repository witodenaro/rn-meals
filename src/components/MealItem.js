import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useMemo, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../constants/Colors';
import DefaultText from './DefaultText';

const MealItem = ({mealItem}) => {
  const {id, title, imageUrl, affordability, complexity, duration} = mealItem;
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const TouchableComponent = Platform.select({
    android: TouchableNativeFeedback,
    default: TouchableOpacity,
  });

  const renderedLoading = useMemo(
    () =>
      isLoading ? (
        <ActivityIndicator
          style={[styles.loadingIndicator, {transform: [{translateX: -16}]}]}
          color="#000"
          size="large"
        />
      ) : null,
    [isLoading],
  );

  const onItemClick = useCallback(() => {
    navigation.navigate('MealDetails', {
      id,
      title,
    });
  }, []);

  return (
    <View style={styles.itemWrapper}>
      <TouchableComponent onPress={onItemClick}>
        <View style={styles.item}>
          {renderedLoading}
          <Image
            source={{
              uri: imageUrl,
            }}
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
            resizeMode={'cover'}
            style={[styles.image]}
          />
          <View style={styles.information}>
            <DefaultText style={styles.title}>{title}</DefaultText>
            <View style={styles.details}>
              <Icon style={styles.icon} name="tags" size={16} />
              <DefaultText>{affordability}</DefaultText>
            </View>
            <View style={styles.details}>
              <Icon style={styles.icon} name="grin-beam-sweat" size={16} />
              <DefaultText>{complexity}</DefaultText>
            </View>
            <View style={styles.details}>
              <Icon style={styles.icon} name="clock" size={16} />
              <DefaultText>{duration} minutes</DefaultText>
            </View>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    minWidth: '100%',
    borderRadius: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    shadowRadius: 5,
    shadowOpacity: 0.26,
    elevation: 5,
  },
  item: {
    flex: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 4,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    height: 200,
    borderRadius: 15,
  },
  information: {
    padding: 20,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 20,
    color: COLORS.additional,
  },
  details: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    marginRight: 10,
  },
  loadingIndicator: {
    position: 'absolute',
    top: 100,
    left: '50%',
  },
});

export default MealItem;
