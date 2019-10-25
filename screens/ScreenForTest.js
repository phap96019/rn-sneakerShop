import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import { TouchableOpacity } from "react-native-gesture-handler";
import WishListItemComponent from "../components/WishListItemComponent";

const ScreenForTest = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
      }}
    >
      <WishListItemComponent
        activeOpacity={0.8}
        containerStyle={{ flex: 1 }}
        title="Save"
        handleOnPress={() => {}}
      />
    </View>
  );
};

export default ScreenForTest;
