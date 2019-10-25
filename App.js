import React from "react";
import * as Expo from "expo";
import { StyleSheet, Text, View } from "react-native";
import RootStackNavigator from "./navigation/RootStackNavigator";
import { setNavigator } from "./utils/navigationRef";
import { Provider as AuthProvider } from "./context/AuthContext";

export default function App() {
  const prefix = Expo.Linking.makeUrl("/");
  return (
    <AuthProvider>
      <RootStackNavigator
        ref={navigator => {
          setNavigator(navigator);
        }}
        uriPrefix={prefix}
      />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
