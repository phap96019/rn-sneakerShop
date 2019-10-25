//Login Screen
import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";

const ForgotPasswordScreen = () => {
  const [inputData, setInputData] = useState({
    email: "",
  });
  const { state, forgotPassword, clearError } = useContext(AuthContext);
  const { email } = inputData;
  const handleOnChange = name => text => {
    setInputData({ ...inputData, [name]: text });
  };
  const handleOnSubmit = () => {
    Keyboard.dismiss();
    forgotPassword(inputData);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.select({ ios: 80, android: 200 })}
        behavior="padding"
        style={styles.container}
      >
        <NavigationEvents onWillBlur={clearError} />
        <Image
          style={styles.logo}
          source={{
            uri:
              "https://cdn.shopify.com/s/files/1/1431/4540/products/NIKE_Logo_AIR_Jordan_JumpMan_23_HUGE_Flight_Wall_Decal_Sticker_grande.jpg?v=1526782062",
          }}
        />
        <View style={styles.messageContainer}>
          <Text style={styles.message}>Enter your Email.</Text>
          <Text style={styles.message}>
            We'll email instruction on how to reset your password.
          </Text>
        </View>
        {/* <View>
            <Tex>Enter your Email.</Tex>
            <Text>We'll email instruction on how to reset your password.</Text>
          </View> */}

        <InputComponent
          label="Email"
          autoCorrect={true}
          autoCapitalize="none"
          value={email}
          handleOnChange={handleOnChange("email")}
        />
        <View>
          <Text style={styles.error}>{state.error !== "" && state.error}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <ButtonComponent
            activeOpacity={0.8}
            containerStyle={{ flex: 1, marginTop: 30 }}
            title="Send me an email"
            handleOnPress={handleOnSubmit}
          />
        </View>

        {/* <View style={styles.linkContainer}>
            <TouchableOpacity
              style={styles.link}
              onPress={() => {
                this.props.navigation.navigate("SignUp");
              }}
            >
              <Text>Don't have an account?</Text>
            </TouchableOpacity>
          </View> */}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  logo: {
    width: 200,
    height: 150,
  },
  title: {
    textAlign: "center",
    //opacity: 0.5  //độ mờ
  },
  formContainer: {},
  linkContainer: {
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  messageContainer: {
    //padding: 20,
    paddingTop: 50,
  },
  error: {
    color: "#e74c3c",
  },
  message: {
    fontSize: 15,
  },
});

export default ForgotPasswordScreen;
