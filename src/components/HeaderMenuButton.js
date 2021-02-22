import React from 'react';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import AwesomeHeaderButton from './AwesomeHeaderButton';

const HeaderMenuButton = ({navigation}) => {
  return (
    <HeaderButtons HeaderButtonComponent={AwesomeHeaderButton}>
      <Item
        iconName="bars"
        color={Platform.select({
          ios: 'black',
          default: 'white',
        })}
        onPress={() => {
          navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  );
};

export default HeaderMenuButton;
