/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  topBar: {padding: hp(4), flexDirection: 'row', marginLeft: wp(-2)},
  firstBarView: {
    width: wp(12),
    height: hp(0.7),
    backgroundColor: '#0084F8',
    marginLeft: wp(2),
  },
  secondBarView: {
    width: wp(12),
    height: hp(0.7),
    backgroundColor: 'rgba(0, 0, 0, 0.07)',
    marginLeft: wp(2),
  },
});
