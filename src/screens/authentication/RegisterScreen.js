import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Logo from '../../assets/svg/logo.svg';
import {Checkbox} from 'react-native-paper';
import {colorPrimary} from '../../utils/colors';

const {width} = Dimensions.get('screen');

const RegisterScreen = ({navigation, params}) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        padding: 10,
      }}>
      <Logo width={width * 0.6} height={width * 0.3} />
      <View style={{margin: 30}}>
        <Text style={{fontSize: 20}}>New here?</Text>
        <Text style={{fontSize: 14, marginTop: 10, marginBottom: 10}}>
          SIGNING UP IS EASY. IT ONLY TAKES A FEW STEPS
        </Text>
        <TextInput style={styles.textInput} placeholder="First Name" />
        <TextInput style={styles.textInput} placeholder="Middle Name" />
        <TextInput style={styles.textInput} placeholder="Last Name" />
        <TextInput style={styles.textInput} placeholder="Email" />
        <TextInput style={styles.textInput} placeholder="Mobile No" />
        <TextInput style={styles.textInput} placeholder="Password" />

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <Checkbox
            color={colorPrimary}
            uncheckedColor={colorPrimary}
            theme={{}}
            style={{margin: 20}}
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={{fontSize: 16}}>I agree to all Terms & Conditions</Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: colorPrimary,
            borderRadius: 5,
            padding: 10,
            marginTop: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'white',
            }}>
            SIGN UP
          </Text>
        </TouchableOpacity>
        <View style={{margin: 10, alignItems: 'center', flexDirection: 'row'}}>
          <Text style={{fontSize: 16, marginTop: 10}}>
            Already have an account?{' '}
          </Text>
          <Text
            onPress={() => navigation.replace('Login')}
            style={{fontSize: 16, marginTop: 10, color: colorPrimary}}>
            Login
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: colorPrimary,
    padding: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default RegisterScreen;
