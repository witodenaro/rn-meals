import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/FontAwesome5';

const AwesomeHeaderButton = ({solid, ...props}) => {
  return (
    <HeaderButton
      IconComponent={(props) => <Icon solid={solid} {...props} />}
      iconSize={20}
      {...props}
    />
  );
};

export default AwesomeHeaderButton;
