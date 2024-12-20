import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  bckg: {
    flex: 1,
  },
  topBar: {
    marginTop: 90,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locateText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '600',
    marginHorizontal: 25,
  },
  leftRight: {
    tintColor: 'white',
  },

  boxes: {
    marginTop: 30,
    height: '75%',
    alignItems: 'center',
  },
  box: {
    marginTop: 35,
    width: '90%',
    height: '53%',
    backgroundColor: 'white',
    borderRadius: 30,
    elevation: 5,
    shadowOffset: {width: 5, height: 5},
    shadowColor: '#9A7FDE',
    flexDirection: 'row',
  },
  busBar: {
    position: 'absolute',
    marginLeft: 50,
    top: -25,
  },
  bus: {
    width: 50,
    height: 50,
    tintColor: '#4D3292',
  },
  left: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
  },
  leftTop: {
    width: '100%',
    height: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  leftTopLeft: {
    paddingRight: 15,
  },
  navigation: {
    tintColor: 'green',
  },
  leftTopRight: {},
  fromToText: {},

  LocateText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  leftBottom: {
    width: '100%',
    height: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  gps: {
    tintColor: '#9A7FDE',
  },

  right: {
    height: '100%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upDownBar: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#9A7FDE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upDown: {
    tintColor: '#fff',
  },
  greenRoundBox: {
    width: 30,
    height: 30,
    backgroundColor: 'green',
    borderRadius: 15,
  },
  purpleRoundBox: {
    width: 30,
    height: 30,
    backgroundColor: '#9A7FDE',
    borderRadius: 15,
  },
  countBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rec: {
    width: 10,
    height: 10,
  },
  LocateTextBar: {
    marginHorizontal: 10,
  },
  rightTopBar: {
    marginRight: 30,
    marginBottom: 75,
  },
  footerBar: {
    width: '100%',
    backgroundColor: 'green',
  },
  footerBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  rightBar: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '85%',
  },
  loremText: {
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  greenTexts: {
    color: 'green',
  },
});
