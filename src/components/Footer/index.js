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

export default Footer = ({icon1, icon2, icon3, icon4}) => {
  return (
    <View style={Styles.iconsBar}>
      <TouchableOpacity>
        <Image source={icon1} style={Styles.icon1} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={icon2} style={Styles.icon2} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={icon3} style={Styles.icon3} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={icon4} style={Styles.icon4} />
      </TouchableOpacity>
    </View>
  );
};

Footer.PropsTypes = {
  icon1: PropTypes.symbol,
  icon2: PropTypes.symbol,
  icon3: PropTypes.symbol,
  icon4: PropTypes.symbol,
};
Footer.defaultProps = {
  icon1: Icons.home,
  icon2: Icons.compass,
  icon3: Icons.rec,
  icon4: Icons.userMenu,
};
