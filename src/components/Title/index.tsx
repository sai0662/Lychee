import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export interface TitleProps {
  text: string;
  style: {
    color: '#000000' | 'blue' | 'black' | 'grey';
    width: 250 | 290 | 330;
  };
}

const Title: React.FC<TitleProps> = ({text, style}) => {
  return (
    <View style={styles.titleView}>
      <Text style={{...styles.title, color: style.color, width: style.width}}>
        {text}
      </Text>
    </View>
  );
};

export default Title;
