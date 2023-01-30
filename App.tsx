/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
//import {WithSplashScreen} from './src/components/splashScreen';
import Login from './src/screens/loginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OtpScreen from './src/screens/otpScreen';
import RegisterScreen from './src/screens/registerScreen';
import OnBoardingScreen from './src/components/onBoarding';
import HomeScreen from './src/screens/HomeScreen';
import RegisterSecondScreen from './src/screens/registerScreen/registerSecondScreen';
import {AuthContext} from './src/components/context';

const Stack = createNativeStackNavigator();

const App = () => {
  const initialLoginState = {
    userNumber: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userNumber: action.id,
          userToken: action.token,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          //userNumber: null,
          //userToken: null,
        };
      case 'REGISTER':
        return {
          ...prevState,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: userNumber => {
        let userToken;
        userToken = null;
        if (userNumber === '8885987564') {
          userToken = 'sai';
        }
        dispatch({type: 'LOGIN', id: userNumber, token: userToken});
      },
      signOut: () => {
        dispatch({type: 'LOGOUT'});
      },
    }),
    [],
  );

  return (
    // <WithSplashScreen isAppReady={isAppReady}>
    //   <OnBoardingScreen />
    // </WithSplashScreen>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'onboard'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="onboard" component={OnBoardingScreen} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="otpScreen" component={OtpScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
        <Stack.Screen name="registersecond" component={RegisterSecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <AuthContext.Provider value={authContext}>
    //   <NavigationContainer>
    //     <Stack.Navigator
    //       //initialRouteName={'onboard'}
    //       screenOptions={{
    //         headerShown: false,
    //       }}>
    //       {loginState.userToken === null ? (
    //         <>
    //           <Stack.Screen name="onboard" component={OnBoardingScreen} />
    //           <Stack.Screen name="login" component={Login} />
    //           <Stack.Screen name="otpScreen" component={OtpScreen} />
    //           <Stack.Screen name="register" component={RegisterScreen} />
    //         </>
    //       ) : (
    //         <Stack.Screen name="home" component={HomeScreen} />
    //       )}
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </AuthContext.Provider>
  );
};

export default App;
function setUserToken(arg0: string) {
  throw new Error('Function not implemented.');
}
