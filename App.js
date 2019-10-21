import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RootStackNavigator from "./navigation/RootStackNavigator";
import { setNavigator } from "./utils/navigationRef";

export default function App() {
  return (
    <RootStackNavigator
      ref={navigator => {
        setNavigator(navigator);
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
