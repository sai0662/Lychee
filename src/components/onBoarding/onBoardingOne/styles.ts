/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {backgroundColor: '#FFFFFF'},
  topBar: {padding: hp(4), flexDirection: 'row', marginLeft: wp(-1)},
  firstBarView: {
    width: wp(12),
    height: hp(0.8),
    backgroundColor: '#0084F8',
  },
  secondBarView: {
    width: wp(12),
    height: hp(0.8),
    backgroundColor: 'rgba(0, 0, 0, 0.07)',
    marginLeft: 10,
  },
  firstTextView: {marginLeft: wp(6), marginTop: hp(3)},
  firstText: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(3.9),
    color: '#000000',
    fontWeight: '500',
    letterSpacing: hp(-0.2),
  },
  secondText: {
    fontFamily: 'Poppins-Medium',
    fontSize: hp(3.8),
    color: '#000000',
    fontWeight: '500',
    letterSpacing: hp(-0.2),
    marginTop: hp(-2),
  },
  thirdText: {
    marginLeft: wp(6),
    marginTop: hp(1),
    fontSize: hp(1.7),
    fontFamily: 'Gilroy-Bold',
    color: '#00192F',
    opacity: 0.56,
  },
  buttonsView: {marginTop: hp(4), flexDirection: 'row'},
  continueButtonView: {
    width: wp(33),
    height: hp(5.2),
    backgroundColor: '#0084F8',
    marginLeft: wp(5),
    borderRadius: hp(12),
  },
  continueText: {
    alignSelf: 'center',
    marginTop: hp(1.4),
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontSize: hp(1.5),
  },
  skipButtonView: {width: wp(33), height: hp(5.6), borderRadius: hp(10)},
  skipText: {
    alignSelf: 'center',
    marginTop: hp(1.6),
    color: '#0084F8',
    fontFamily: 'Poppins-Bold',
    fontSize: hp(1.4),
    marginLeft: wp(-10),
  },
  ImageView: {marginTop: hp(3)},
  footerText: {
    fontSize: hp(1.2),
    width: 400,
    fontFamily: 'Gilroy-SemiBold',
    color: '#0C1A34',
    fontWeight: '600',
    marginLeft: wp(13),
    opacity: 0.56,
  },
});
