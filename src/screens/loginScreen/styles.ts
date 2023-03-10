import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {flex: 1},
  backgroundImage: {flex: 1, justifyContent: 'center'},
  header: {
    width: wp(100),
    height: hp(14),
    backgroundColor: '#FFFFFF',
    shadowColor: '#D1D0CE',
    shadowOpacity: 10,
    elevation: 25,
    marginTop: hp(-62),
  },
  headerText: {
    fontSize: hp(1.4),
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    alignSelf: 'flex-end',
    marginTop: hp(8),
    marginRight: wp(6),
    color: '#0084F8',
  },
  mobileNumberText: {
    fontSize: hp(1.8),
    fontFamily: 'Poppins-Bold',
    marginTop: hp(6.8),
    marginLeft: wp(6),
    color: '#00192F',
    opacity: 0.5,
  },
  mobileText: {
    fontSize: hp(1.5),
    fontFamily: 'Rubik-Medium',
    fontWeight: '400',
    marginTop: hp(4),
    marginLeft: wp(7),
    color: 'rgba(12, 26, 52, 0.64)',
    opacity: 0.5,
  },
  input: {
    width: wp(88),
    height: hp(6),
    paddingLeft: wp(1),
    borderBottomWidth: hp(0.3),
    alignSelf: 'center',
    color: 'red',
    fontSize: hp(2),
    fontFamily: 'Gilroy-Bold',
    letterSpacing: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  primaryButton: {
    width: wp(33),
    height: hp(5.2),
    backgroundColor: '#0084F8',
    marginLeft: wp(5),
    borderRadius: hp(12),
    marginTop: hp(4),
  },
  primaryText: {
    alignSelf: 'center',
    marginTop: hp(1.4),
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontSize: hp(1.5),
  },
  lastNameInput: {
    width: wp(2),
    height: hp(6),
    paddingLeft: wp(1),
    borderBottomWidth: hp(0.3),
    marginLeft: wp(6),
    marginTop: hp(3.6),
    color: 'rgba(12, 26, 52, 0.64)',
    //opacity: 0.5,
    fontSize: hp(1.6),
    fontFamily: 'Rubik-Regular',
  },
  firstNameInput: {
    color: '#232426',
    fontFamily: 'Rubik-Bold',
    fontWeight: '500',
  },
  firstLabel: {
    color: 'red',
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
    fontWeight: '400',
    opacity: 0.56,
  },
  inputView: {
    width: wp(94),
  },
});
