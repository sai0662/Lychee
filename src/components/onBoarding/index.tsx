/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useState, useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import OnBoardOneImage from '../../Assets/Images/Ob1.svg';
import OnBoardTwoImage from '../../Assets/Images/Ob2.svg';
import OnBoardThreeImage from '../../Assets/Images/Ob3.svg';
import OnBoardFourImage from '../../Assets/Images/Ob4.svg';
import OnBoardFiveImage from '../../Assets/Images/Ob5.svg';

const slides = [
  {
    id: 1,
    title: 'A digital wallet\nfrom the future',
    subTitle: "You've never seen money work like this.",
    footer:
      'Any funds sent to the address below will be recieved in your Lychee wallet. Use your usual banking app to make the\n deposit with PayID.',
  },
  {
    id: 2,
    title: 'Supercharge \nyour money',
    subTitle: 'Earn up to 5% on your money.',
    footer:
      'Any funds sent to the address below will be recieved in your Lychee wallet. Use your usual banking app to make the\n deposit with PayID.',
  },
  {
    id: 3,
    title: 'Get paid instantly, every second',
    subTitle: 'Watch your wealth grow in real time.',
    footer:
      'Any funds sent to the address below will be recieved in your Lychee wallet. Use your usual banking app to make the\n deposit with PayID.',
  },
  {
    id: 4,
    title: 'Pay your friends with money that grows',
    subTitle: 'Money in your Lychee wallet never stop earning',
    footer:
      'Any funds sent to the address below will be recieved in your Lychee wallet. Use your usual banking app to make the\n deposit with PayID.',
  },
  {
    id: 5,
    title: 'Instant, smart and flexible money.',
    subTitle: 'Instant transfers, no locking peroids',
    footer:
      'Any funds sent to the address below will be recieved in your Lychee wallet. Use your usual banking app to make the\n deposit with PayID.',
  },
];

const OnBoardingScreen = ({navigation}: any) => {
  const [screenIndex, setScreenIndex] = useState(0);

  const onChangeScreen = useCallback(() => {
    if (screenIndex < 4) {
      console.log('asdasdasd');
      setScreenIndex(previousValue => previousValue + 1);
    } else {
      navigation.navigate('login');
      // redirect to home screen
    }
  }, [screenIndex]);

  const Skip = () => {
    navigation.navigate('login');
  };

  console.log(screenIndex);

  return (
    <View style={styles.topBar}>
      <View
        style={screenIndex >= 0 ? styles.firstBarView : styles.secondBarView}
      />
      <View
        style={screenIndex >= 1 ? styles.firstBarView : styles.secondBarView}
      />
      <View
        style={screenIndex >= 2 ? styles.firstBarView : styles.secondBarView}
      />
      <View
        style={screenIndex >= 3 ? styles.firstBarView : styles.secondBarView}
      />
      <View
        style={screenIndex >= 4 ? styles.firstBarView : styles.secondBarView}
      />
      <View style={styles.titleView}>
        <Text style={styles.title}>{slides[screenIndex].title}</Text>
      </View>
      <View style={styles.subTitleView}>
        <Text style={styles.thirdText}>{slides[screenIndex].subTitle}</Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.primaryButton} onPress={onChangeScreen}>
          <Text style={styles.primaryText}>Continue {'>'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Skip}>
          <Text style={styles.lightText}>Skip {'>'}</Text>
        </TouchableOpacity>
      </View>

      {slides[screenIndex].id === 1 && (
        <OnBoardOneImage
          width={'120%'}
          height={'48.8%'}
          style={styles.slideOne}
        />
      )}

      {slides[screenIndex].id === 2 && (
        <OnBoardTwoImage
          width={'145%'}
          height={'56%'}
          style={styles.slideTwo}
        />
      )}
      {slides[screenIndex].id === 3 && (
        <OnBoardThreeImage
          width={'120%'}
          height={'46%'}
          style={styles.slideThree}
        />
      )}
      {slides[screenIndex].id === 4 && (
        <OnBoardFourImage
          width={'120%'}
          height={'60%'}
          style={styles.slideFour}
        />
      )}
      {slides[screenIndex].id === 5 && (
        <OnBoardFiveImage
          width={'120%'}
          height={'47.8%'}
          style={styles.slideFive}
        />
      )}
      <Text style={styles.footerText}>{slides[screenIndex].footer}</Text>
    </View>
  );
};

export default OnBoardingScreen;
