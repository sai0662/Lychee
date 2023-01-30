/* eslint-disable react-native/no-inline-styles */
import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import {FloatingLabelInput} from 'react-native-floating-label-input';

function Login({navigation}: any) {
  const [state, setState] = useState({
    userNumber: '',
  });

  //const {signIn} = React.useContext(AuthContext);

  const loginHandle = userNumber => {
    signIn(userNumber);
    console.log(userNumber);
  };

  const onChangeMobile = value => {
    setState(prev => ({...prev, userNumber: value}));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Assets/Images/loginBg.png')}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Support {'>'}</Text>
        </View>
        <Text style={styles.mobileNumberText}>Enter mobile number</Text>
        <KeyboardAvoidingView>
          <View>
            <View style={styles.inputView}>
              <FloatingLabelInput
                label={'Mobile'}
                value={state.userNumber}
                onChangeText={value => onChangeMobile(value)}
                containerStyles={{
                  ...styles.lastNameInput,
                  borderColor: state.userNumber
                    ? '#232426'
                    : 'rgba(0, 0, 0, 0.1)',
                }}
                inputStyles={styles.firstNameInput}
                labelStyles={styles.firstLabel}
              />
            </View>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => navigation.navigate('otpScreen')}>
              <Text style={styles.primaryText}>Continue {'>'}</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

export default Login;
