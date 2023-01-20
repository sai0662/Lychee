/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {OnBoardOneImage} from '../../../Utils/images';
const OnBoardingScreenOne = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.firstBarView} />
        <View style={styles.secondBarView} />
        <View style={styles.secondBarView} />
        <View style={styles.secondBarView} />
        <View style={styles.secondBarView} />
      </View>
      <View style={styles.firstTextView}>
        <Text style={styles.firstText}>A digital wallet,</Text>
        <Text style={styles.secondText}>from the future</Text>
      </View>
      <Text style={styles.thirdText}>
        You've never seen money work like this.
      </Text>
      <View style={styles.buttonsView}>
        <TouchableOpacity style={styles.continueButtonView}>
          <Text style={styles.continueText}>Continue {'>'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skipButtonView}>
          <Text style={styles.skipText}>Skip {'>'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ImageView}>
        <OnBoardOneImage width={'100%'} height={'66%'} />
        <Text style={styles.footerText}>
          Any funds sent to the address below will be recieved in your{'\n'}{' '}
          Lychee wallet. Use your usual banking app to make the {'\n'} deposit
          with PayID.
        </Text>
      </View>
    </View>
  );
};

export default OnBoardingScreenOne;
