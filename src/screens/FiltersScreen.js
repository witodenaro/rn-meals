import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableWithoutFeedback,
} from 'react-native';

import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';

const FilterSwitch = ({onValueChange, value, label}) => (
  <TouchableWithoutFeedback onPress={() => onValueChange(!value)}>
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        trackColor={{
          true: Colors.secondary,
          false: 'grey',
        }}
        thumbColor={'white'}
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  </TouchableWithoutFeedback>
);

const FiltersScreen = () => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  return (
    <View style={styles.screen}>
      <DefaultText style={styles.title}>Available Filters</DefaultText>
      <FilterSwitch
        label="Gluten free"
        value={isGlutenFree}
        onValueChange={setIsGlutenFree}
      />
      <FilterSwitch label="Vegan" value={isVegan} onValueChange={setIsVegan} />
      <FilterSwitch
        label="Vegetarian"
        value={isVegetarian}
        onValueChange={setIsVegetarian}
      />
      <FilterSwitch
        label="Lactose free"
        value={isLactoseFree}
        onValueChange={setIsLactoseFree}
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
    fontSize: 22,
  },
});

export default FiltersScreen;
