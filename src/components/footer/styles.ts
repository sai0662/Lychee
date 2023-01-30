/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  footerText: {
    fontSize: hp(1.2),
    width: wp(77),
    fontFamily: 'Gilroy-SemiBold',
    color: '#0C1A34',
    fontWeight: '600',
    opacity: 0.56,
    marginTop: hp(-6),
    alignSelf: 'center',
  },
});
