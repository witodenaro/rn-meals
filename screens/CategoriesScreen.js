import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Button
        onPress={() => navigation.navigate('categoryMeals')}
        title="To category meal"
      />
      <Text style={{fontFamily: 'OpenSans-Regular'}}>
        The categories screen!
      </Text>
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

export default CategoriesScreen;
