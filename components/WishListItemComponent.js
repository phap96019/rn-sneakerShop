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
  name: "Giày loại A",
  size: "Size: 40",
  cost: 200,
  pic:
    "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ymmq6yswyxlxycdzquoi/epic-react-flyknit-2-running-shoe-B01C0P.jpg"
};
//=====================
const handleOnSubmit = () => {};
const WishListItemComponent = ({
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
        <View style={{ marginRight: 17 }}>
          <Image
            style={{
              width: 110,
              height: 110,
              borderRadius: 15
            }}
            source={{
              uri: item.pic
            }}
          />
        </View>
        <View style={styles.info}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>{item.name}</Text>
          <Text style={{}}>{item.size}</Text>
          <Text style={{ fontWeight: "bold" }}>{"$ " + item.cost}</Text>
          <ButtonComponent
            activeOpacity={0.8}
            containerStyle={{
              flex: 1,
              width: 130,
              backgroundColor: "#FFF",
              shadowColor: "red",
              shadowOffset: {
                width: 0,
                height: 0
              },
              shadowOpacity: 0,
              shadowRadius: 0,
              elevation: 0,
              borderWidth: 1,
              borderColor: "#2d3436"
            }}
            textStyle={{ color: "#000", marginBottom: 5 }}
            title="Remove"
            handleOnPress={handleOnSubmit}
          />
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
    height: 110,
    flexDirection: "row"
  },
  info: {
    flex: 1,
    padding: 5
  }
});

export default WishListItemComponent;