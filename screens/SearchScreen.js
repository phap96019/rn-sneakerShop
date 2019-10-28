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
  FlatList,
  TextInput
} from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import { TouchableOpacity } from "react-native-gesture-handler";
import WishListItemComponent from "../components/WishListItemComponent";
import ListOderComponent from "../components/ListOderComponent";
import { Ionicons } from "@expo/vector-icons";

const SearchScreen = props => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 80,
          backgroundColor: "#1d1d1d",
          justifyContent: "center",
          paddingTop: 23,
          paddingLeft: 5,
          paddingRight: 5
        }}
      >
        <View
          style={{
            height: 50,
            backgroundColor: "#FFF",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Ionicons
            name={"ios-search"}
            size={30}
            color="#3d3d3d"
            style={{ padding: 10 }}
          />
          <TextInput
            placeholder="Search"
            autoFocus={true}
            returnKeyType="go"
            style={{ fontSize: 20, marginLeft: 5, flex: 1 }}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;
