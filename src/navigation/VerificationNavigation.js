import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import KYCScreen from '../screens/verification/KYCScreen';
import PanScreen from '../screens/verification/PanScreen';
import AadharScreen from '../screens/verification/AadharScreen';
import BankScreen from '../screens/verification/BankScreen';

const Stack = createNativeStackNavigator();

const VerificationNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="KYC" component={KYCScreen} />
      <Stack.Screen name="PAN" component={PanScreen} />
      <Stack.Screen name="AADHAR" component={AadharScreen} />
      <Stack.Screen name="BANK" component={BankScreen} />
    </Stack.Navigator>
  );
};

export default VerificationNavigation;
