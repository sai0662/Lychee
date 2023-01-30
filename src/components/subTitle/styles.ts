/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  thirdText: {
    marginLeft: wp(6),
    marginTop: hp(1),
    fontSize: hp(1.7),
    fontFamily: 'Gilroy-Bold',
    color: '#00192F',
    opacity: 0.56,
  },
});
