import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Icons, Images} from '../../assets';
import Styles from './style';
import {_Button, Navbar, Footer} from '../../components';
const index = () => {
  const locations = {
    a: 'Location 1',
    b: 'Location 2',
  };
  const [location, setLocation] = useState('Location 1');
  const switchLocation = index => {
    locations.a === 'Location 1'
      ? (locations.a = 'Location 2')
      : (locations.a = 'Location 1');
  };
  return (
    <SafeAreaView style={Styles.safeArea}>
      <ImageBackground style={Styles.bckg} source={Images.bckgrnd1}>
        <View>
          <Navbar />
        </View>
        <View style={Styles.bottomBar}>
          <View style={Styles.bottom}>
            <View style={Styles.textsBar}>
              <View>
                <Text style={Styles.bingolText}>bingöl</Text>
              </View>
              <View>
                <Text style={Styles.busText}>Bus</Text>
              </View>
            </View>
            <View style={Styles.boxes}>
              <View style={Styles.box}>
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
                        <Text style={Styles.fromToText}>FROM</Text>
                      </View>
                      <View>
                        <Text style={Styles.LocateText}>{locations.a}</Text>
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
                        <Text style={Styles.fromToText}>TO</Text>
                      </View>
                      <View>
                        <Text style={Styles.LocateText}>{locations.b}</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={Styles.right}>
                  <TouchableOpacity
                    style={Styles.upDownBar}
                    onPress={switchLocation}>
                    <Image source={Icons.upDown} style={Styles.upDown} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={Styles.box}>
                <View style={Styles.left}>
                  <View style={Styles.leftTop}>
                    <View style={Styles.leftTopLeft}>
                      <View style={Styles.greenRoundBox}></View>
                    </View>
                    <View style={Styles.leftTopRight}>
                      <View>
                        <Text style={Styles.fromToText}>COUNT</Text>
                      </View>
                      <View style={Styles.countBar}>
                        <View>
                          <Image source={Icons.rec} style={Styles.rec} />
                        </View>
                        <View style={Styles.LocateTextBar}>
                          <Text style={Styles.LocateText}>01</Text>
                        </View>
                        <View>
                          <Image source={Icons.rec} style={Styles.rec} />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={Styles.leftBottom}>
                    <View style={Styles.leftTopLeft}>
                      <View style={Styles.purpleRoundBox}></View>
                    </View>
                    <View style={Styles.leftTopRight}>
                      <View>
                        <Text style={Styles.fromToText}>DATE</Text>
                      </View>
                      <View>
                        <Text style={Styles.LocateText}>Sun 3 Jun 2021</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={Styles.right}>
                  <View style={Styles.rightTopBar}>
                    <View>
                      <Text style={Styles.fromToText}>TYPE</Text>
                    </View>
                    <View>
                      <Text style={Styles.LocateText}>TYPE</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={Styles.searchButton}>
              <_Button
                _buttonText="SEARCH"
                buttonStyle={{width: '60%', height: 65}}
                buttonTextColor={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 30,
                  letterSpacing: 1.2,
                }}
              />
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
/*
_buttonText, buttonStyle, buttonTextColor
*/
