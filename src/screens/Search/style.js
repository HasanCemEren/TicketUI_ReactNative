import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  bckg: {
    flex: 1,
    backgroundColor: '#D1D1D1',
  },
  bottomBar: {
    marginTop: 18,
    justifyContent: 'center',
    alignItems: 'center',
    height: 660,
  },
  bottom: {
    width: '85%',
    height: '100%',
    position: 'absolute',
  },

  textsBar: {
    marginLeft: 15,
    marginTop: 5,
  },
  bingolText: {
    color: 'white',
    fontSize: 15,
  },
  busText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },

  boxes: {
    height: '60%',
  },
  box: {
    marginTop: 15,
    width: '100%',
    height: '53%',
    backgroundColor: 'white',
    borderRadius: 30,
    elevation: 5,
    shadowOffset: {width: 5, height: 5},
    shadowColor: '#9A7FDE',
    flexDirection: 'row',
  },
  left: {
    width: '70%',
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
    width: '30%',
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
  searchButton: {
    alignItems: 'center',
    marginTop: 85,
  },
  footerBar: {
    marginTop: 10,
  },
});
