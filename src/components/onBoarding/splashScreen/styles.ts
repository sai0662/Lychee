/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {height: hp(100), backgroundColor: '#FFFFFF'},
  logoView: {
    width: wp(42),
    height: hp(12),
    alignSelf: 'center',
    marginTop: hp(40),
    backgroundColor: '#00A3FF',
    borderRadius: hp(1.4),
  },
  textOne: {
    fontSize: hp(3.8),
    alignSelf: 'center',
    color: 'white',
    marginTop: hp(2),
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
  },
  textSecond: {
    marginLeft: wp(24),
    marginTop: hp(-2),
    color: 'white',
    fontFamily: 'Poppins-Light',
  },
  footerView: {
    marginTop: hp(40),
    width: wp(90),
    alignSelf: 'center',
    marginLeft: wp(20),
  },
  footerTextOne: {
    fontSize: hp(1.2),
    color: '#0C1A34',
    fontFamily: 'Gilroy-SemiBold',
    fontWeight: '600',
  },
  footerTextSeconds: {
    fontSize: hp(1.2),
    fontFamily: 'Gilroy-SemiBold',
    color: '#0C1A34',
    fontWeight: '600',
  },
  footerTextThird: {
    fontSize: hp(1.2),
    width: wp(100),
    fontFamily: 'Gilroy-SemiBold',
    color: '#0C1A34',
    fontWeight: '600',
  },
});
