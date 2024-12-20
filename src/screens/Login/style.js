import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  safeArea: {flex: 1},
  bckgrnd: {
    alignItems: 'center',
    backgroundColor: '#9A7FDE',
    flex: 1,
  },
  logo: {height: '26%', justifyContent: 'flex-end'},
  smileBar: {marginTop: 15},
  smile: {width: 140, height: 140, tintColor: 'white'},
  logoTextBar: {
    marginVertical: 5,
  },
  logoText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  welcomeTextBar: {
    width: '75%',
    marginTop: 75,
  },
  welcomeText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  inputs: {
    width: '100%',
    height: 250,
    alignItems: 'center',
    marginTop: 10,
  },
  logButton: {
    width: '83%',
    height: 60,
    marginBottom: 40,
  },
  forgetTextBar: {margin: 12},
  forgetText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
  },
  createButton: {
    width: 300,
    height: 300,
    alignItems: 'center',
    paddingTop: 20,
  },
  createTextBar: {marginBottom: 15},
  createText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
  },
});
