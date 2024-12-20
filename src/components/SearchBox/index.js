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

export default SearchBox = ({text}) => {
  return (
   
  );
};

SearchBox.PropsTypes = {
  _buttonText: PropTypes.string,
  buttonStyle: PropTypes.object,
  buttonTextColor: PropTypes.object,
};
SearchBox.defaultProps = {
  _buttonText: 'Sign In',
  buttonStyle: {backgroundColor: '#761D3B'},
  buttonTextColor: {color: '#fff'},
};
