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
  ImageBackground
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
    <ImageBackground
      source={require("../assets/cat.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <ScrollView>
        <View style={{ flex: 1, padding: 10 }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View style={styles.Container}>
              <Image
                style={styles.Image}
                source={{
                  uri:
                    "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAI6BwY.img?h=552&w=750&m=6&q=60&u=t&o=f&l=f&x=325&y=171"
                }}
              />
              <Text style={styles.TextName}>{item.name}</Text>
              <Text style={{ color: "#FFF" }}>{item.mail}</Text>
            </View>
          </View>
          <View>
            <View style={{ ...styles.Info }}>
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
                handleOnPress={handleOnSubmit}
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
                handleOnPress={handleOnSubmit}
              />
              <ListButtonComponent
                activeOpacity={0.8}
                containerStyle={{ flex: 1 }}
                title="Wish list"
                iconName="ios-heart-empty"
                handleOnPress={handleOnSubmit}
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
            <View style={{ padding: 20 }}>
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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  Container: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 18,
    zIndex: 10
  },
  Image: {
    width: 100,
    height: 100,
    borderRadius: 50,
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
