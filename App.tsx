/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import OnBoardingScreenOne from './src/components/onBoarding/onBoardingOne';
import {WithSplashScreen} from './src/components/onBoarding/splashScreen';
const App = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    setIsAppReady(true);
  }, []);
  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <OnBoardingScreenOne />
    </WithSplashScreen>
  );
};

export default App;
