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

export default Ticket = ({_buttonText, buttonStyle, buttonTextColor}) => {
  return (
    <TouchableOpacity style={[Styles.button, buttonStyle]}>
      <View style={Styles.buttonTextBar}>
        <Text style={[Styles.buttonText, buttonTextColor]}>{_buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

Ticket.PropTypes = {
  _buttonText: PropTypes.string,
  buttonStyle: PropTypes.object,
  buttonTextColor: PropTypes.object,
};
Ticket.defaultProps = {
  _buttonText: 'Sign In',
  buttonStyle: {backgroundColor: '#761D3B'},
  buttonTextColor: {color: '#fff'},
};
