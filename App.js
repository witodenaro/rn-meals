import React, {useEffect, useMemo} from 'react';
import {SafeAreaView, StyleSheet, Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';

import DrawerNavigator from './src/components/navigators/DrawerNavigator';

import SCREENS from './src/config/Screens';

import COLORS from './src/constants/Colors';

const Stack = createStackNavigator();

enableScreens();

const DefaultNavigationStyles = {
  headerStyle: {
    backgroundColor: COLORS.primary,
    ...Platform.select({
      ios: {
        backgroundColor: 'white',
      },
    }),
  },
  headerTitleStyle: {
    ...Platform.select({
      ios: {
        color: COLORS.primary,
      },
      default: {
        color: 'white',
      },
    }),
  },
};

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
