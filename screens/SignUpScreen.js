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
  ScrollView,
} from "react-native";
import { NavigationEvents } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import { Context as AuthContext } from "../context/AuthContext";

const SignUpScreen = props => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { state, signUp, clearError } = useContext(AuthContext);
  const { name, email, password, passwordConfirm } = inputData;
  const handleOnChange = name => text => {
    setInputData({ ...inputData, [name]: text });
  };
  const handleOnSubmit = () => {
    Keyboard.dismiss();
    signUp(inputData);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        enabled
        keyboardVerticalOffset={Platform.select({ ios: 40, android: 100 })}
        behavior="padding"
        style={styles.container}
      >
        <ScrollView
          contentContainerStyle={{ alignItems: "center" }}
          showsVerticalScrollIndicator={false}
        >
          <NavigationEvents onWillBlur={clearError} />
          <Image
            style={styles.logo}
            source={{
              uri:
                "https://cdn.shopify.com/s/files/1/1431/4540/products/NIKE_Logo_AIR_Jordan_JumpMan_23_HUGE_Flight_Wall_Decal_Sticker_grande.jpg?v=1526782062",
            }}
          />

          <InputComponent
            label="Name"
            autoCorrect={true}
            value={name}
            handleOnChange={handleOnChange("name")}
          />
          <InputComponent
            label="Email"
            autoCorrect={true}
            autoCapitalize="none"
            value={email}
            handleOnChange={handleOnChange("email")}
          />
          <InputComponent
            label="Password"
            autoCorrect={true}
            autoCapitalize="none"
            secureTextEntry //Password
            value={password}
            handleOnChange={handleOnChange("password")}
          />
          <InputComponent
            label="Confirm Password"
            autoCorrect={true}
            autoCapitalize="none"
            secureTextEntry //Password
            value={passwordConfirm}
            handleOnChange={handleOnChange("passwordConfirm")}
          />
          <View>
            <Text style={styles.error}>
              {state.error !== "" && state.error}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <ButtonComponent
              activeOpacity={0.8}
              containerStyle={{ flex: 1, marginTop: 30 }}
              title="Sign up"
              handleOnPress={handleOnSubmit}
            />
          </View>
          <View style={styles.linkContainer}>
            <TouchableOpacity
              style={styles.link}
              onPress={() => {
                props.navigation.goBack(null);
                return true;
                props.navigation.navigate("Login");
              }}
            >
              <Text>Have an account? Sign in</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    // alignItems: "center",
    paddingHorizontal: 15,
  },
  logoContainer: {
    alignSelf: "center",
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

  linkContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  error: {
    color: "#e74c3c",
    textAlign: "center",
  },
  link: {
    marginVertical: 15,
  },
});

export default SignUpScreen;
