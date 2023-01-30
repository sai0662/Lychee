/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {FloatingLabelInput} from 'react-native-floating-label-input';

function RegisterSecondScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const handleCheckEmail = (text) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(email) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Lychee</Text>
        <Text style={styles.supportText}>Support? {'>'}</Text>
      </View>
      <Text style={styles.nameText}>What's your email?</Text>
      <View style={styles.floatLabelView}>
        <View style={styles.inputTextView}>
          <FloatingLabelInput
            label={'Email'}
            value={email}
            onChangeText={text => handleCheckEmail(text)}
            containerStyles={{
              ...styles.lastNameInput,
              borderColor: email ? '#232426' : 'rgba(0, 0, 0, 0.1)',
            }}
            inputStyles={styles.firstNameInput}
            labelStyles={styles.firstLabel}
          />
          {checkValidEmail ? (
            <Text style={styles.validationText}>Email is incorrect</Text>
          ) : (
            <Text />
          )}
        </View>
      </View>
      <View />
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.primaryAddButton}>
          <Text style={styles.primaryAddText}>Add later {'>'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('home')}>
          <Text style={styles.primaryText}>Next {'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default RegisterSecondScreen;
