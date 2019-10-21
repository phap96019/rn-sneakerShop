import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RootStackNavigator from "./navigation/RootStackNavigator";
import { setNavigator } from "./utils/navigationRef";
import { Provider as AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <RootStackNavigator
        ref={navigator => {
          setNavigator(navigator);
        }}
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
