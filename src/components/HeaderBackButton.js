import React from 'react';
import {Platform} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';
import AwesomeHeaderButton from './AwesomeHeaderButton';

const HeaderBackButton = ({navigation}) => {
  return (
    <HeaderButtons HeaderButtonComponent={AwesomeHeaderButton}>
      <Item
        onPress={() => navigation.goBack()}
        iconName="arrow-left"
        iconSize={20}
        color={Platform.select({
          ios: Colors.primary,
          default: 'white',
        })}
        style={{
          marginLeft: 10,
        }}
        solid
      />
    </HeaderButtons>
  );
};

export default HeaderBackButton;
