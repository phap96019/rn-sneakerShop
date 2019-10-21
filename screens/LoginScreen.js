//Login Screen
import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={Platform.select({ ios: 80, android: 200 })}
          behavior="padding"
          style={styles.container}
        >
          <Image
            style={styles.logo}
            source={{
              uri:
                "https://cdn.shopify.com/s/files/1/1431/4540/products/NIKE_Logo_AIR_Jordan_JumpMan_23_HUGE_Flight_Wall_Decal_Sticker_grande.jpg?v=1526782062"
            }}
          />

          <InputComponent
            label="Email"
            autoCorrect={true}
            autoCapitalize="none"
          />
          <InputComponent
            label="Password"
            autoCorrect={true}
            autoCapitalize="none"
            secureTextEntry //Password
            showIconPassword
          />
          <View style={{ flexDirection: "row" }}>
            <ButtonComponent
              activeOpacity={0.8}
              containerStyle={{ flex: 1, marginTop: 30 }}
              title="Login"
              handleOnPress={() => {}}
            />
          </View>
          <View style={styles.linkContainer}>
            <TouchableOpacity
              style={styles.link}
              onPress={() => {
                this.props.navigation.navigate("Forgot");
              }}
            >
              <Text>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.link}
              onPress={() => {
                this.props.navigation.navigate("SignUp");
              }}
            >
              <Text>Don't have an account?</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1
  },
  logo: {
    width: 200,
    height: 150
  },
  title: {
    textAlign: "center"
    //opacity: 0.5  //độ mờ
  },
  formContainer: {},
  linkContainer: {
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "space-between"
  },
  link: {
    paddingTop: 15
  }
});
