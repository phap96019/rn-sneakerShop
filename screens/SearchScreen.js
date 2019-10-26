import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  FlatList
} from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import { TouchableOpacity } from "react-native-gesture-handler";
import WishListItemComponent from "../components/WishListItemComponent";
import ListOderComponent from "../components/ListOderComponent";

const SearchScreen = props => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignSelf: "center" }}>
      <Text>Search!</Text>
    </View>
  );
};

export default SearchScreen;
