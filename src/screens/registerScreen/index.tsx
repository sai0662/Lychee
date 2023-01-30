/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {nominalTypeHack} from 'prop-types';
import {Value} from 'react-native-reanimated';
function RegisterScreen({navigation}) {
  const [text, setText] = useState('');
  const [lastName, setLastName] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Lychee</Text>
        <Text style={styles.supportText}>Support? {'>'}</Text>
      </View>
      <Text style={styles.registerText}>ACCOUNT REGISTRATION</Text>
      <View style={styles.borderLine} />
      <Text style={styles.nameText}>What's your name?</Text>
      <View style={styles.floatLabelView}>
        <View style={styles.inputTextView}>
          <FloatingLabelInput
            label={'First name'}
            value={text}
            onChangeText={value => setText(value)}
            containerStyles={{
              ...styles.lastNameInput,
              borderColor: text ? '#232426' : 'rgba(0, 0, 0, 0.1)',
            }}
            inputStyles={styles.firstNameInput}
            labelStyles={styles.firstLabel}
          />
        </View>
        <View style={styles.secondInputView}>
          <FloatingLabelInput
            label={'Last name'}
            value={lastName}
            onChangeText={value => setLastName(value)}
            containerStyles={{
              ...styles.input,
              borderColor: lastName ? '#232426' : 'rgba(0, 0, 0, 0.1)',
            }}
            inputStyles={styles.secondNameView}
            labelStyles={styles.secondLabel}
          />
        </View>
      </View>
      <View />
      <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('registersecond')}>
        <Text style={styles.primaryText}>Next {'>'}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default RegisterScreen;
