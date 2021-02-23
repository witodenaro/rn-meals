import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useDispatch, useSelector} from 'react-redux';
import AwesomeHeaderButton from '../components/AwesomeHeaderButton';

import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';
import {setFilters} from '../redux/user/user.actions';
import {selectFilters} from '../redux/user/user.selectors';

const FilterSwitch = ({toggleFilter, value, label}) => (
  <TouchableWithoutFeedback onPress={toggleFilter}>
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        trackColor={{
          true: Colors.secondary,
          false: 'grey',
        }}
        thumbColor={'white'}
        value={value}
        onValueChange={toggleFilter}
      />
    </View>
  </TouchableWithoutFeedback>
);

const FiltersScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const [unsavedFilters, setUnsavedFilters] = useState({...filters});
  const [hasChanges, setHasChanges] = useState(false);

  const toggleFilter = (filterName) => {
    if (!hasChanges) setHasChanges(true);

    setUnsavedFilters({
      ...unsavedFilters,
      [filterName]: !unsavedFilters[filterName],
    });
  };

  const saveFiltersChanges = () => {
    dispatch(setFilters(unsavedFilters));
    setHasChanges(false);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        hasChanges ? (
          <HeaderButtons HeaderButtonComponent={AwesomeHeaderButton}>
            <Item
              iconName="save"
              color={Platform.select({
                ios: Colors.primary,
                default: '#fff',
              })}
              onPress={saveFiltersChanges}
            />
          </HeaderButtons>
        ) : null,
    });
  }, [saveFiltersChanges, hasChanges]);

  return (
    <View style={styles.screen}>
      <DefaultText style={styles.title}>Available Filters</DefaultText>
      <FilterSwitch
        label="Gluten free"
        value={unsavedFilters.isGlutenFree}
        toggleFilter={() => toggleFilter('isGlutenFree')}
      />
      <FilterSwitch
        label="Lactose free"
        value={unsavedFilters.isLactoseFree}
        toggleFilter={() => toggleFilter('isLactoseFree')}
      />
      <FilterSwitch
        label="Vegan"
        value={unsavedFilters.isVegan}
        toggleFilter={() => toggleFilter('isVegan')}
      />
      <FilterSwitch
        label="Vegetarian"
        value={unsavedFilters.isVegetarian}
        toggleFilter={() => toggleFilter('isVegetarian')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  filterContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  title: {
    marginTop: 10,
    fontSize: 22,
  },
});

export default FiltersScreen;
