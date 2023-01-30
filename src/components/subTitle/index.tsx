import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

export interface subTitleProps {
  text: string;
}

const SubTitle: React.FC<subTitleProps> = ({text}) => {
  return <Text style={styles.thirdText}>{text}</Text>;
};

export default SubTitle;
