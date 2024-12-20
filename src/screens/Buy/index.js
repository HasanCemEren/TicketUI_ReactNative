import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import Styles from './style';
import {Icons, Images} from '../../assets';
import {Navbar, _Button, Footer} from '../../components';

const index = () => {
  return (
    <SafeAreaView style={Styles.safeArea}>
      <ImageBackground style={Styles.bckg} source={Images.bckgrnd}>
        <View>
          <Navbar leftIcon={Icons.leftArrow} rightIcon={Icons.dots} />
        </View>
        <View style={Styles.topBar}>
          <View>
            <Text style={Styles.locateText}>Location 1</Text>
          </View>
          <TouchableOpacity>
            <Image source={Icons.leftRight} style={Styles.leftRight} />
          </TouchableOpacity>
          <View>
            <Text style={Styles.locateText}>Location 2</Text>
          </View>
        </View>
        <View style={Styles.bottomBar}>
          <View style={Styles.bottom}>
            <View style={Styles.boxes}>
              <View style={Styles.box}>
                <View style={Styles.busBar}>
                  <Image source={Icons.bus} style={Styles.bus} />
                </View>
                <View style={Styles.left}>
                  <View style={Styles.leftTop}>
                    <View style={Styles.leftTopLeft}>
                      <View>
                        <Image
                          source={Icons.navigation}
                          style={Styles.navigation}
                        />
                      </View>
                    </View>
                    <View style={Styles.leftTopRight}>
                      <View>
                        <Text style={Styles.LocateText}>Location 1</Text>
                      </View>
                      <View>
                        <Text style={Styles.fromToText}>FROM</Text>
                      </View>
                    </View>
                  </View>
                  <View style={Styles.leftBottom}>
                    <View style={Styles.leftTopLeft}>
                      <View>
                        <Image source={Icons.gps} style={Styles.gps} />
                      </View>
                    </View>
                    <View style={Styles.leftTopRight}>
                      <View>
                        <Text style={Styles.LocateText}>Location 2</Text>
                      </View>
                      <View>
                        <Text style={Styles.fromToText}>TO</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={Styles.right}>
                  <View style={Styles.rightBar}>
                    <View>
                      <Text style={Styles.loremText}>
                        Lorem Ipsum <Text style={Styles.greenTexts}>dolor</Text>
                      </Text>
                    </View>
                    <View>
                      <Text style={Styles.loremText}>
                        Lorem Ipsum <Text style={Styles.greenTexts}>dolor</Text>
                      </Text>
                    </View>
                    <View>
                      <Text style={Styles.loremText}>
                        Lorem{' '}
                        <Text
                          style={[
                            Styles.greenTexts,
                            {fontSize: 30, fontWeight: 'bold'},
                          ]}>
                          $1,50
                        </Text>
                      </Text>
                    </View>
                    <View>
                      <_Button
                        buttonStyle={{
                          width: '100%',
                          height: 50,
                        }}
                        _buttonText={'BUY TICKET'}
                        buttonTextColor={{
                          paddingHorizontal: 30,
                          color: 'white',
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={Styles.box}>
                <View style={Styles.busBar}>
                  <Image source={Icons.bus} style={Styles.bus} />
                </View>
                <View style={Styles.left}>
                  <View style={Styles.leftTop}>
                    <View style={Styles.leftTopLeft}>
                      <View>
                        <Image
                          source={Icons.navigation}
                          style={Styles.navigation}
                        />
                      </View>
                    </View>
                    <View style={Styles.leftTopRight}>
                      <View>
                        <Text style={Styles.LocateText}>Location 1</Text>
                      </View>
                      <View>
                        <Text style={Styles.fromToText}>FROM</Text>
                      </View>
                    </View>
                  </View>
                  <View style={Styles.leftBottom}>
                    <View style={Styles.leftTopLeft}>
                      <View>
                        <Image source={Icons.gps} style={Styles.gps} />
                      </View>
                    </View>
                    <View style={Styles.leftTopRight}>
                      <View>
                        <Text style={Styles.LocateText}>Location 2</Text>
                      </View>
                      <View>
                        <Text style={Styles.fromToText}>TO</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={Styles.right}>
                  <View style={Styles.rightBar}>
                    <View>
                      <Text style={Styles.loremText}>
                        Lorem Ipsum <Text style={Styles.greenTexts}>dolor</Text>
                      </Text>
                    </View>
                    <View>
                      <Text style={Styles.loremText}>
                        Lorem Ipsum <Text style={Styles.greenTexts}>dolor</Text>
                      </Text>
                    </View>
                    <View>
                      <Text style={Styles.loremText}>
                        Lorem{' '}
                        <Text
                          style={[
                            Styles.greenTexts,
                            {fontSize: 30, fontWeight: 'bold'},
                          ]}>
                          $1,50
                        </Text>
                      </Text>
                    </View>
                    <View>
                      <_Button
                        buttonStyle={{
                          width: '100%',
                          height: 50,
                        }}
                        _buttonText={'BUY TICKET'}
                        buttonTextColor={{
                          paddingHorizontal: 30,
                          color: 'white',
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={Styles.footerBar}>
          <Footer />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default index;
