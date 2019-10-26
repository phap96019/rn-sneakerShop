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

const data3 = [
  {
    id: "000001",
    date: "27/10/2019",
    status: "Delivered"
  },
  {
    id: "000002",
    date: "27/10/2019",
    status: "Delivered"
  },
  {
    id: "000003",
    date: "27/10/2019",
    status: "Delivered"
  }
];
const OrderScreen = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        margin: 10,
        paddingBottom: 20
      }}
    >
      <ScrollView>
        <View>
          <FlatList
            data={data3}
            keyExtractor={data => data.id.toString()}
            renderItem={({ item }) => (
              <ListOderComponent
                item={item}
                activeOpacity={0.5}
                handleOnPress={() => {}}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderScreen;
