import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Dimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ButtonComponent from "../components/ButtonComponent";
const item = {
  id: "000001",
  date: "27/10/2019",
  status: "Delivered"
};
//=====================
const handleOnSubmit = () => {};
const ListOrderComponent = ({
  item,
  containerStyle,
  buttonStyle,
  textStyle,
  handleOnPress,
  title,
  iconName,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        {...props}
        onPress={handleOnPress}
        style={{
          ...styles.touchContainer,
          ...containerStyle,
          ...buttonStyle
        }}
      >
        <View style={styles.info}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            {"ID: " + item.id}
          </Text>
          <Text style={{}}>{"Date: " + item.date}</Text>
          <Text style={{ fontWeight: "bold" }}>{"Status: " + item.status}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    margin: 5,
    paddingBottom: 10
  },
  touchContainer: {
    flex: 1,
    //height: 110,
    flexDirection: "row"
  },
  info: {
    flex: 1,
    padding: 5
  }
});

export default ListOrderComponent;
