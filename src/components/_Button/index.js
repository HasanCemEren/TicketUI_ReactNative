import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import Styles from './style';

export default _Button = ({_buttonText, buttonStyle, buttonTextColor}) => {
  return (
    <TouchableOpacity style={[Styles.button, buttonStyle]}>
      <View style={Styles.buttonTextBar}>
        <Text style={[Styles.buttonText, buttonTextColor]}>{_buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

_Button.PropsTypes = {
  _buttonText: PropTypes.string,
  buttonStyle: PropTypes.object,
  buttonTextColor: PropTypes.object,
};
_Button.defaultProps = {
  _buttonText: 'Sign In',
  buttonStyle: {},
  buttonTextColor: {color: '#fff'},
};
