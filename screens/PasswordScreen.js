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
import LoginScreen from "./LoginScreen";

const item = {
  pic:
    "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAI6BwY.img?h=552&w=750&m=6&q=60&u=t&o=f&l=f&x=325&y=171"
};

const PasswordScreen = props => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.select({ ios: 80, android: 220 })}
        behavior="padding"
        style={styles.container}
      >
        <Image
          style={styles.logo}
          source={{
            uri: item.pic
          }}
        />

        <InputComponent
          label="Password"
          autoCorrect={true}
          autoCapitalize="none"
          secureTextEntry //Password
        />
        <InputComponent
          label="New password"
          autoCorrect={true}
          autoCapitalize="none"
          secureTextEntry //Password
          //showIconPassword
        />
        <InputComponent
          label="Confirm new password"
          autoCorrect={true}
          autoCapitalize="none"
          secureTextEntry //Password
          //showIconPassword
        />
        <View style={{ flexDirection: "row" }}>
          <ButtonComponent
            activeOpacity={0.8}
            containerStyle={{ flex: 1, marginTop: 30 }}
            title="Change password"
            handleOnPress={() => {}}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default PasswordScreen;
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
    width: 150,
    height: 150,
    borderRadius: 100
  }
});
