import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  StyleSheet,
  Image,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context as AuthContext } from '../context/AuthContext';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';
import LoadingComponent from '../components/LoadingComponent';
import trimData from '../utils/trimData';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  logo: {
    width: 200,
    height: 150,
  },
  title: {
    textAlign: 'center',
    // opacity: 0.5  //độ mờ
  },
  linkContainer: {
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  link: {
    paddingTop: 15,
  },
  error: {
    color: '#e74c3c',
  },
});

const LoginScreen = props => {
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });
  const { state, signIn, clearError, setLoading } = useContext(AuthContext);
  const { email, password } = inputData;
  const handleOnChange = name => text => {
    setInputData({ ...inputData, [name]: text });
  };
  const handleOnSubmit = () => {
    // Trim data to clear space
    const cleanData = trimData(inputData);

    // Update data input.
    // Don't send inputData to context beacause setInputData is async fuction
    setInputData(cleanData);

    // Dismiss keyboard
    Keyboard.dismiss();

    // Cleare error on screen
    clearError();

    // Set lottie loading
    setLoading();

    // Handle login
    signIn(cleanData);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        // keyboardVerticalOffset={Platform.select({ ios: 80, android: 200 })}
        behavior="padding"
        style={styles.container}
      >
        {state.loading && <LoadingComponent />}
        <NavigationEvents onWillBlur={clearError} />

        <Image
          style={styles.logo}
          source={{
            uri:
              'https://cdn.shopify.com/s/files/1/1431/4540/products/NIKE_Logo_AIR_Jordan_JumpMan_23_HUGE_Flight_Wall_Decal_Sticker_grande.jpg?v=1526782062',
          }}
        />

        <InputComponent
          label="Email"
          autoCorrect
          autoCapitalize="none"
          value={email}
          handleOnChange={handleOnChange('email')}
        />
        <InputComponent
          label="Password"
          autoCorrect
          autoCapitalize="none"
          secureTextEntry // Password
          showIconPassword
          value={password}
          handleOnChange={handleOnChange('password')}
        />
        <View>
          <Text style={styles.error}>{state.error !== '' && state.error}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <ButtonComponent
            activeOpacity={0.8}
            containerStyle={{ flex: 1, marginTop: 30 }}
            title="Login"
            handleOnPress={handleOnSubmit}
          />
        </View>
        <View style={styles.linkContainer}>
          <TouchableOpacity
            style={styles.link}
            onPress={() => {
              props.navigation.navigate('Forgot');
            }}
          >
            <Text>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.link}
            onPress={() => {
              props.navigation.navigate('SignUp');
            }}
          >
            <Text>Don&lsquo;t have an account?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoginScreen;
