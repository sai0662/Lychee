/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Pay from '../../Assets/Images/PayID.svg';
import Eye from '../../Assets/Images/eye.svg';
import Right from '../../Assets/Images/Right.svg';
import Dollar from '../../Assets/Images/dollar.svg';
import PaySomeOne from '../../Assets/Images/paysomeone.svg';
import PaySomeOneBlue from '../../Assets/Images/paySomeonewhite.svg';
import ViewEarnings from '../../Assets/Images/viewEarning.svg';
import ViewEarningsBlue from '../../Assets/Images/viewEarningwhite.svg';
import DashBoardImage from '../../Assets/Images/dashBoard.svg';
import Line from '../../Assets/Images/LineIcon.svg';
import Home from '../../Assets/Images/HomeBlue.svg';
import Card from '../../Assets/Images/cardBlack.svg';
import Trending from '../../Assets/Images/trendingBlack.svg';
import Profile from '../../Assets/Images/profileBlack.svg';
import DollarBlue from '../../Assets/Images/dollarblue.svg';
import styles from './styles';
import { AuthContext } from '../../components/context';

function HomeScreen() {
  const [balance, setBalance] = useState('0.00');
  const [selected, setSelected] = useState(false);
  const [paySlected, setPaySelected] = useState(false);

 //const {signOut} = React.useContext(AuthContext);

  const onChangeColor = () => {
    setSelected(!selected);
  };

    const onChangePay = () => {
    setPaySelected(!paySlected);
  };

  return (
    <View style={styles.container}>
      <View style={styles.userNameView}>
        <Text style={styles.userNameText}>Hi, Nathan</Text>
        <Pay width={'20%'} height={'60%'} style={styles.payIcon} />
      </View>
      <View style={styles.walletBalanceView}>
        <View style={styles.walletSecondView}>
          <Text style={styles.walletText}>Wallet Balance</Text>
          <Eye style={styles.eyeIcon} width={20} height={20} />
        </View>
        <View style={styles.balanceView}>
          <Text style={styles.dolorText}>$</Text>
          <Text style={styles.balanceText}>{balance}</Text>
          <Right style={styles.arrowIcon} />
        </View>
      </View>
      <View style={styles.buttonsView}>
        <TouchableOpacity
          style={{
            ...styles.depositeView,
            backgroundColor: selected === true ? '#0084F8' : '#F2F6FD',
          }}
          onPress={onChangeColor}>
          {selected ? (
            <Dollar style={styles.dollar} width={'22%'} height={'22%'} />
          ) : (
            <DollarBlue style={styles.dollar} width={'22%'} height={'22%'} />
          )}
          <Text
            style={{
              ...styles.DepositeText,
              color: selected === true ? '#FFFFFF' : '#0084F8',
            }}>
            Deposit
          </Text>
          <Text
            style={{
              ...styles.fundsText,
              color: selected === true ? '#FFFFFF' : '#0084F8',
            }}>
            Funds
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.payView,
            backgroundColor: paySlected === true ? '#0084F8' : '#F2F6FD',
          }}
          onPress={onChangePay}>
          {paySlected ? (
            <PaySomeOneBlue
              style={styles.dollar}
              width={'22%'}
              height={'22%'}
            />
          ) : (
            <PaySomeOne style={styles.dollar} width={'22%'} height={'22%'} />
          )}
          <Text
            style={{
              ...styles.PayText,
              color: paySlected === true ? '#FFFFFF' : '#0084F8',
            }}>
            Pay
          </Text>
          <Text
            style={{
              ...styles.someOneText,
              color: paySlected === true ? '#FFFFFF' : '#0084F8',
            }}>
            Someone
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.earningView}>
          <ViewEarnings style={styles.dollar} width={'22%'} height={'22%'} />
          <Text style={styles.PayText}>View</Text>
          <Text style={styles.someOneText}>Earnings</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.AddFundsText}>ADD FUNDS TO START EARNING!</Text>
        <DashBoardImage
          style={styles.DashboardImage}
          width={'100%'}
          height={'36%'}
        />
        <Line width={'100%'} height={'10%'} />
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.firstBottomImage}>
          <Home width={20} height={22} style={styles.bottomIconView} />
          <Text style={styles.firstBottomText}>
            home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondBottomImage}>
          <Card width={20} height={22} style={styles.bottomIconView} />
          <Text style={styles.secondBottomText}>
            transfer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.thirdBottomImage}>
          <Trending width={20} height={22} style={styles.bottomIconView} />
          <Text style={styles.thirdBottomText}>
            Finance
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fourthBottomImage}>
          <Profile width={20} height={22} style={styles.bottomIconView} />
          <Text style={styles.fourthBottomText}>
            profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen;
