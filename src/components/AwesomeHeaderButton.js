import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/FontAwesome5';

const AwesomeHeaderButton = (props) => {
  return <HeaderButton IconComponent={Icon} iconSize={20} {...props} />;
};

export default AwesomeHeaderButton;
