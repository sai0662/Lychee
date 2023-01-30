/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Button,
} from 'react-native';
import styles from './styles';

interface Input {
  ref: number;
}
const OtpScreen = ({navigation}: any) => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const fifthInput = useRef();
  const sixthInput = useRef();
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Lychee</Text>
          <Text style={styles.supportText}>Support {'>'}</Text>
        </View>
        <Text style={styles.mobileNumberText}>Enter code</Text>
        <View style={styles.otpView}>
          <View style={styles.boxView}>
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              ref={firstInput}
              onChangeText={text => {
                text && secondInput.current.focus();
              }}
              style={styles.input}
            />
          </View>
          <View style={styles.boxView}>
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              ref={secondInput}
              onChangeText={text => {
                text ? thirdInput.current.focus() : firstInput.current.focus();
              }}
              style={styles.input}
            />
          </View>
          <View style={styles.boxView}>
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              ref={thirdInput}
              onChangeText={text => {
                text
                  ? fourthInput.current.focus()
                  : secondInput.current.focus();
              }}
              style={styles.input}
            />
          </View>
          <View style={styles.boxView}>
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              ref={fourthInput}
              onChangeText={text => {
                text ? fifthInput.current.focus() : thirdInput.current.focus();
              }}
              style={styles.input}
            />
          </View>
          <View style={styles.boxView}>
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              ref={fifthInput}
              onChangeText={text => {
                text ? sixthInput.current.focus() : fourthInput.current.focus();
              }}
              style={styles.input}
            />
          </View>
          <View style={styles.boxView}>
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              ref={sixthInput}
              onChangeText={text => {
                !text && fifthInput.current.focus();
              }}
              style={styles.input}
            />
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('register')}>
          <Text style={styles.resendText}>Resend Code {'>'}</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.footerText}>
            Any funds sent to the address below will be recieved in your Lychee
            wallet. Use your usual banking app to make the deposite with PayID.
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default OtpScreen;
