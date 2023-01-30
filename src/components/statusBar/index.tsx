import React from 'react';
import {View} from 'react-native';
import styles from './styles';

export interface statusBar {}
const StatusBar: React.FC<statusBar> = () => {
  return (
    <View style={styles.topBar}>
      {[1, 2, 3, 4, 5].map((value, index) => (
        <View
          key={index}
          style={value === 1 ? styles.firstBarView : styles.secondBarView}
        />
      ))}
    </View>
  );
};

export default StatusBar;
