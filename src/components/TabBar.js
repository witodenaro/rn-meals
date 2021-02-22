import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SCREENS from '../config/Screens';

import COLORS from '../constants/Colors';

function TabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        let iconName = null;
        switch (route.name) {
          case SCREENS.Favorites.name:
            iconName = 'star';
            break;
          case SCREENS.Categories.name:
            iconName = 'utensils';
            break;
        }

        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.button}>
            <Icon
              name={iconName}
              color={isFocused ? COLORS.primary : COLORS.additional}
              solid
              size={25}
              style={styles.icon}
            />
            <Text
              style={[
                styles.text,
                {
                  color: isFocused ? COLORS.primary : COLORS.additional,
                  height: 0,
                },
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {},
});

export default TabBar;
