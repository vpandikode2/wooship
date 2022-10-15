import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {LogBox, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import VerificationNavigation from './src/navigation/VerificationNavigation';
import AuthNavigation from './src/navigation/Authnavigation';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import SplashScreen from './src/screens/SplashScreen';

LogBox.ignoreAllLogs(true);

const App = ({params}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isVerified, setIsVerified] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      checkStatus();
    }, 5000);
  }, []);

  async function checkStatus() {
    setIsLoading(false);
    // setIsLoggedIn(true);
  }

  async function signIn() {
    fetch('http://shipgram.in/controller/user.controller.php', {
      method: 'POST',
      body: {},
    });
    setIsLoggedIn(true);
  }

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        isVerified ? (
          <DrawerNavigation />
        ) : (
          <VerificationNavigation />
        )
      ) : (
        <AuthNavigation signIn={signIn} />
      )}
    </NavigationContainer>
  );
};

export default App;
