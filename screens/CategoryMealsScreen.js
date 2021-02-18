import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const CategoryMealsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <Text>{'abc'}</Text>
      <Button title={'Go back'} onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
