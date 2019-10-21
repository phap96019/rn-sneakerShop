import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const ButtonComponent = ({
  containerStyle,
  buttonStyle,
  textStyle,
  handleOnPress,
  title,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      onPress={handleOnPress ? handleOnPress : 0.9}
      style={{ ...styles.buttonContainer, ...containerStyle }}
    >
      <Text style={{ ...styles.textStyle }}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    backgroundColor: "#1d1d1d",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24
  },
  textStyle: {
    color: "#fff"
  }
});

export default ButtonComponent;
