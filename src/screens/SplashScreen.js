import React from 'react';
import {ActivityIndicator, Dimensions, Text, View} from 'react-native';
import Logo from '../assets/svg/logo.svg';
import {colorAccent} from '../utils/colors';

const {width} = Dimensions.get('screen');

const SplashScreen = ({params}) => (
  <View
    style={{
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Logo width={width * 0.8} height={width * 0.4} />
    <ActivityIndicator color={colorAccent} style={{margin: 20}} />
  </View>
);

export default SplashScreen;
