import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../utils/colors';
import NoQLogoSVG from '../assets/images/noq_logo.svg';
import persistStorage from '../storage/persistStorage';
import Toast from 'react-native-simple-toast';
import {isTablet} from 'react-native-device-info';

const LoginScreen = ({route}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  // console.log('isTablet', isTablet())

  const onSubmit = () => {
    if (!userName || userName.length == 0) {
      Toast.show('Please enter Username');
      return;
    }
    if (!password || password.length == 0) {
      Toast.show('Please enter Password');
      return;
    }
    if (userName === 'vaibhav' && password === 'test') {
      persistStorage.storeUserDetails(userName);
      route.params.setUserStatus(true);
    } else {
      Toast.show("Credentials doesn't matched");
      return;
    }
  };

  return (
    <View style={styles.parentContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.container}>
        <View
          style={[
            styles.subContainer,
            {marginHorizontal: isTablet() ? '25%' : 0},
          ]}>
          <NoQLogoSVG width={260} height={100} style={styles.logo} />
          <Text style={styles.logoText}>VENDOR LOG IN</Text>
          <View style={styles.formContainer}>
            <Text style={styles.fieldTitle}>
              Insert User Name (User or email)
            </Text>
            <TextInput
              value={userName}
              onChangeText={setUserName}
              style={styles.input}
              autoCapitalize="none"
            />

            <Text style={[styles.fieldTitle, {marginTop: 20}]}>
              Insert Password
            </Text>
            <View style={styles.passwordContainer}>
              <TextInput
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                style={styles.password}
                secureTextEntry={!passwordVisible}
              />
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
                style={styles.show}
                activeOpacity={0.5}>
                <Text>Show</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.forgotPassword}>Forgot Password?</Text>

            <TouchableOpacity
              activeOpacity={0.5}
              onPress={onSubmit}
              style={styles.loginButton}>
              <Text style={styles.loginButtonText}>LOG IN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  parentContainer: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 25,
  },
  logoText: {
    textAlign: 'center',
    color: colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  formContainer: {
    marginTop: 40,
    paddingHorizontal: 40,
  },
  fieldTitle: {
    textAlign: 'center',
    color: colors.white,
  },
  input: {
    height: 35,
    borderRadius: 10,
    color: colors.black,
    backgroundColor: colors.white,
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 2,
    fontSize: 17,
  },
  passwordContainer: {
    flexDirection: 'row',
    height: 35,
    borderRadius: 10,
    backgroundColor: colors.white,
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  password: {
    flex: 1,
    paddingVertical: 2,
    fontSize: 17,
    color: colors.black,
  },
  show: {
    justifyContent: 'center',
  },
  forgotPassword: {
    textAlign: 'right',
    fontSize: 16,
    color: colors.secondary,
  },
  loginButton: {
    height: 42,
    marginHorizontal: 50,
    marginTop: 50,
    backgroundColor: colors.secondary,
    borderColor: colors.white,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  loginButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
