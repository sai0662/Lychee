/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  buttonsView: {marginTop: hp(4), flexDirection: 'row'},
  primaryButton: {
    width: wp(33),
    height: hp(5.2),
    backgroundColor: '#0084F8',
    marginLeft: wp(5),
    borderRadius: hp(12),
    marginTop: hp(3),
  },
  primaryText: {
    alignSelf: 'center',
    marginTop: hp(1.4),
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontSize: hp(1.5),
  },
  lightButton: {
    width: wp(33),
    height: hp(5.6),
    borderRadius: hp(10),
    marginLeft: wp(40),
    marginTop: hp(-5.4),
  },
  lightText: {
    alignSelf: 'center',
    marginTop: hp(1.6),
    color: '#0084F8',
    fontFamily: 'Poppins-Bold',
    fontSize: hp(1.4),
    marginLeft: wp(-10),
  },
});
