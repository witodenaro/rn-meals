import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../constants/Colors';

const MealItem = ({mealItem}) => {
  const {id, title, imageUrl, affordability, complexity, duration} = mealItem;
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const TouchableComponent = Platform.select({
    android: TouchableNativeFeedback,
    default: TouchableOpacity,
  });

  const renderedLoading = useMemo(() =>
    isLoading ? (
      <ActivityIndicator style={styles.image} color="#000" size="large" />
    ) : null,
  );

  const onLoadEnd = useCallback(() => {
    setIsLoading(false);
  }, []);

  const onLoadStart = useCallback(() => {
    setIsLoading(true);
  }, []);

  const onItemClick = useCallback(() => {
    console.log('MEAL CLICK');
    navigation.navigate('MealDetails', {
      id,
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
            onLoadEnd={onLoadEnd}
            onLoadStart={onLoadStart}
            resizeMode={'cover'}
            style={[styles.image, {display: isLoading ? 'none' : 'flex'}]}
          />
          <View style={styles.information}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.details}>
              <Icon style={styles.icon} name="tags" size={16} />
              <Text>{affordability}</Text>
            </View>
            <View style={styles.details}>
              <Icon style={styles.icon} name="grin-beam-sweat" size={16} />
              <Text>{complexity}</Text>
            </View>
            <View style={styles.details}>
              <Icon style={styles.icon} name="clock" size={16} />
              <Text>{duration} minutes</Text>
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
    overflow: 'hidden',
    marginBottom: 20,
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
});

export default MealItem;
