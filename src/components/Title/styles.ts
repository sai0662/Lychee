/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  titleView: {marginLeft: wp(6), marginTop: hp(3), width: wp(70)},
  title: {
    //width: wp(68),
    fontFamily: 'Poppins-Medium',
    fontSize: hp(3.8),
    fontWeight: '500',
    letterSpacing: hp(-0.2),
    //color: '#000000',
  },
});
