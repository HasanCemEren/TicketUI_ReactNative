import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import Styles from './style';
import {Icons} from '../../assets';

export default Navbar = ({leftIcon, rightIcon}) => {
  return (
    <View style={Styles.iconsBar}>
      <TouchableOpacity>
        <Image source={leftIcon} style={Styles.leftIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={rightIcon} style={Styles.rightIcon} />
      </TouchableOpacity>
    </View>
  );
};

Navbar.PropsTypes = {
  leftIcon: PropTypes.symbol,
  rightIcon: PropTypes.symbol,
};
Navbar.defaultProps = {
  leftIcon: Icons.dots,
  rightIcon: Icons.user,
};
