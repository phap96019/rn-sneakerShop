import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ListButtonComponent = ({
  containerStyle,
  buttonStyle,
  textStyle,
  handleOnPress,
  title,
  iconName,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      onPress={handleOnPress ? handleOnPress : 0.9}
      style={{ ...styles.buttonContainer, ...containerStyle, ...buttonStyle }}
    >
      <View style={{ ...buttonStyle, flexDirection: "row" }}>
        <View style={{ padding: 3, width: 30, alignItems: "center" }}>
          <Ionicons name={iconName} size={17} color="#3d3d3d" />
        </View>

        <View>
          <Text style={{ ...styles.textStyle }}>{title}</Text>
        </View>
        {/* <View style={styles.ButtonRight}>
          <Ionicons name="md-arrow-dropright" size={20} color="#3d3d3d" />
        </View> */}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    //alignItems: "center",
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
    color: "#2f3542"
  },
  ButtonRight: {
    flexDirection: "row-reverse",
    flex: 1,
    textAlign: "right",
    alignSelf: "center"
  }
});

export default ListButtonComponent;
