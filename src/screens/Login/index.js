import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {_Button, Footer, Navbar, Ticket, InputBar} from '../../components';
import Styles from './style';
import {Icons} from '../../assets';

const index = () => {
  return (
    <SafeAreaView style={Styles.safeArea}>
      <View style={Styles.bckgrnd}>
        <View style={Styles.logo}>
          <View style={Styles.smileBar}>
            <Image source={Icons.smile} style={Styles.smile} />
          </View>
          <View style={Styles.logoTextBar}>
            <Text style={Styles.logoText}>App</Text>
          </View>
        </View>
        <View style={Styles.welcomeTextBar}>
          <View>
            <Text style={Styles.welcomeText}>Welcome!</Text>
          </View>
        </View>
        <View style={Styles.inputs}>
          <InputBar isSecure={false} />
          <InputBar isSecure={true} inputText="Password" />
        </View>
        <View style={Styles.logButton}>
          <_Button
            _buttonText={'Log In'}
            buttonStyle={{
              backgroundColor: '#fff',
              width: '100%',
              height: '100%',
            }}
            buttonTextColor={{color: '#9A7FDE', fontSize: 20}}
          />
          <View style={Styles.forgetTextBar}>
            <Text style={Styles.forgetText}>Forget password?</Text>
          </View>
        </View>
        <View style={Styles.createButton}>
          <View style={Styles.createTextBar}>
            <Text style={Styles.createText}>Don't have an account?</Text>
          </View>
          <_Button
            _buttonText={'Create'}
            buttonStyle={{
              backgroundColor: '#fff',
              borderRadius: 50,
            }}
            buttonTextColor={{color: '#9A7FDE', fontSize: 25}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
/*
  <_Button
        _buttonText={'Log in'}
        buttonStyle={{backgroundColor: '#fff'}}
        buttonTextColor={{color: '#9A7FDE'}}
      />
*/
