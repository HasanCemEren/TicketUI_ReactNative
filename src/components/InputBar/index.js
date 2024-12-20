import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import Styles from './style';

export default InputBar = ({inputText, isSecure}) => {
  return (
    <View style={Styles.outBar}>
      <TextInput
        style={Styles.input}
        placeholder={inputText}
        secureTextEntry={isSecure}
        placeholderTextColor={'white'}></TextInput>
    </View>
  );
};

InputBar.PropsTypes = {
  inputText: PropTypes.string,
  isSecure: PropTypes.bool,
};
InputBar.defaultProps = {
  inputText: 'Username',
  isSecure: true,
};
