import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

export interface footerProps {
  text: string;
  //   style: {
  //     marginTop: 5;
  //   };
}
const Footer: React.FC<footerProps> = ({text}) => {
  return <Text style={styles.footerText}>{text}</Text>;
};

export default Footer;
