import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import ButtonComponent from "../components/ButtonComponent";
import InputComponent from "../components/InputComponent";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";

const item = {
  name: "Ngoc Trinh",
  mail: "Abc@gmail.com"
};
var radio_props = [{ label: "Male", value: 0 }, { label: "Female", value: 1 }];
const ChangeAvatar = () => {};
const AccountScreen = prop => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        //keyboardVerticalOffset={Platform.select({ ios: 80, android: 200 })}
        behavior="padding"
        style={styles.container}
      >
        <View>
          <TouchableOpacity
            style={styles.AvatarContainer}
            //onPress={{ ChangeAvatar }}
          >
            <Image
              style={styles.avatar}
              source={{
                uri:
                  "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAI6BwY.img?h=552&w=750&m=6&q=60&u=t&o=f&l=f&x=325&y=171"
              }}
            />
          </TouchableOpacity>
          <View style={styles.NameAndMail}>
            <InputComponent
              label="Name"
              autoCorrect={true}
              autoCapitalize="none"
            />
            <InputComponent
              label="Phone number"
              autoCorrect={true}
              autoCapitalize="none"
            />
            <InputComponent
              label="Address"
              autoCorrect={true}
              autoCapitalize="none"
            />
            <RadioForm
              radio_props={radio_props}
              initial={0}
              buttonColor={"#2f3542"}
              onPress={Keyboard.dismiss}
              //onPress={(value) => {this.setState({value:value})}}
            />
          </View>

          <View style={styles.ButtonContainer}>
            <ButtonComponent
              activeOpacity={0.8}
              containerStyle={{ marginTop: 20 }}
              title="Save"
              handleOnPress={() => {}}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  AvatarContainer: {
    padding: 20,
    paddingBottom: 10
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  ButtonContainer: {
    padding: 15
  },
  NameAndMail: {
    padding: 15
  }
});

export default AccountScreen;
