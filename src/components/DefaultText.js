import React from 'react';
import {StyleSheet, Text} from 'react-native';

const DefaultText = ({style, children}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans-Regular',
  },
});

export default DefaultText;
