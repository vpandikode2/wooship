import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Logo from '../../assets/svg/logo.svg';
import {colorPrimary} from '../../utils/colors';

const {width} = Dimensions.get('screen');

const LoginScreen = ({navigation, route}) => {
  const {signIn} = route.params;
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        padding: 20,
      }}>
      <Logo width={width * 0.6} height={width * 0.3} />
      <View style={{margin: 30}}>
        <Text style={{fontSize: 20}}>Hello! let's get started</Text>
        <TextInput style={styles.textInput} placeholder="Username" />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          placeholder="Password"
        />
        <TouchableOpacity
          onPress={() => {
            setIsLoading(true);
            setTimeout(() => {
              signIn();
            }, 3000);
          }}
          disabled={isLoading}
          style={[
            styles.textInput,
            {
              backgroundColor: colorPrimary,
            },
          ]}>
          {isLoading ? (
            <ActivityIndicator color={'white'} />
          ) : (
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
              }}>
              SIGN IN
            </Text>
          )}
        </TouchableOpacity>
        <Text style={{fontSize: 16, marginTop: 10}}>Forget password?</Text>
        <View style={{margin: 10, alignItems: 'center', flexDirection: 'row'}}>
          <Text style={{fontSize: 16, marginTop: 10}}>
            Don't have an account?{' '}
          </Text>
          <Text
            onPress={() => navigation.replace('Register')}
            style={{fontSize: 16, marginTop: 10, color: colorPrimary}}>
            Create
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colorPrimary,
    padding: 10,
  },
});

export default LoginScreen;
