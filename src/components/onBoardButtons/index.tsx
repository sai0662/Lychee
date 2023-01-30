import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
function Buttons({onPress}: any) {
  return (
    <View>
      <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
        <Text style={styles.primaryText}>Continue {'>'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.lightButton}>
        <Text style={styles.lightText}>Skip {'>'}</Text>
      </TouchableOpacity>
    </View>

  );
}

export default Buttons;
