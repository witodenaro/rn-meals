import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Platform, ScrollView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';

import DrawerNavigator from './src/components/navigators/DrawerNavigator';

import COLORS from './src/constants/Colors';

enableScreens();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.screen}>
        <DrawerNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
