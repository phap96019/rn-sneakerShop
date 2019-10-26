import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  Keyboard,
  ImageBackground,
  StatusBar
} from "react-native";

import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import ListButtonComponent from "../components/ListButtonComponent";
import ButtonComponent from "../components/ButtonComponent";
import AccountScreen from "../screens/AccountScreen";

const item = {
  name: "Ngoc Trinh",
  mail: "trinhtrinh@gmail.com"
};
const handleOnSubmit = () => {};

const ProfileScreen = props => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <StatusBar backgroundColor="transparent" barStyle="light-content" />
      <View style={styles.container}>
        <View
          style={{
            height: Dimensions.get("window").height / 2.5,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0
            }}
          >
            <Image
              style={{
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").height / 2
              }}
              source={{
                uri:
                  "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAI6BwY.img?h=552&w=750&m=6&q=60&u=t&o=f&l=f&x=325&y=171"
              }}
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.Image}
              source={{
                uri:
                  "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAI6BwY.img?h=552&w=750&m=6&q=60&u=t&o=f&l=f&x=325&y=171"
              }}
            />
          </View>
          <Text style={styles.TextName}>{item.name}</Text>
          <Text style={{ color: "#FFF" }}>{item.mail}</Text>
        </View>

        <View style={{ marginHorizontal: 15 }}>
          <View style={styles.Info}>
            <ListButtonComponent
              activeOpacity={0.8}
              containerStyle={{ flex: 1 }}
              title="Account"
              iconName="md-person"
              buttonStyle={{
                borderRadius: 0,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
              }}
              handleOnPress={() => {
                props.navigation.navigate("Account");
              }}
            />
            <ListButtonComponent
              activeOpacity={0.8}
              containerStyle={{ flex: 1 }}
              title="Password"
              iconName="md-nutrition"
              buttonStyle={{
                borderRadius: 10,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0
              }}
              handleOnPress={() => {
                props.navigation.navigate("Password");
              }}
            />
          </View>

          <View style={styles.Info}>
            <ListButtonComponent
              activeOpacity={0.8}
              containerStyle={{ flex: 1 }}
              title="Order"
              iconName="md-reorder"
              buttonStyle={{
                borderRadius: 0,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
              }}
              handleOnPress={handleOnSubmit}
            />
            <ListButtonComponent
              activeOpacity={0.8}
              containerStyle={{ flex: 1 }}
              title="Cart"
              iconName="ios-cart"
              handleOnPress={() => {
                props.navigation.navigate("Cart");
              }}
            />
            <ListButtonComponent
              activeOpacity={0.8}
              containerStyle={{ flex: 1 }}
              title="Wish list"
              iconName="ios-heart-empty"
              handleOnPress={() => {
                props.navigation.navigate("WishList");
              }}
            />
            <ListButtonComponent
              activeOpacity={0.8}
              containerStyle={{ flex: 1 }}
              title="Setting"
              iconName="ios-settings"
              buttonStyle={{
                borderRadius: 10,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0
              }}
              handleOnPress={handleOnSubmit}
            />
          </View>
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <ButtonComponent
              activeOpacity={0.8}
              containerStyle={{ flex: 1, marginTop: 30 }}
              title="Logout"
              handleOnPress={handleOnSubmit}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    textAlign: "center"
  },
  imageContainer: {
    alignItems: "center"
  },
  Image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    paddingTop: 15
  },
  TextName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF"
  },
  Info: {
    padding: 5
  }
});
export default ProfileScreen;
