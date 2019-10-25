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
  cost: "$ 200",
  pic:
    "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ymmq6yswyxlxycdzquoi/epic-react-flyknit-2-running-shoe-B01C0P.jpg"
};
const handleOnSubmit = () => {};
const WishListItemComponent = ({
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
      <View style={{ ...buttonStyle, ...styles.container }}>
        <View>
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 15
            }}
            source={{
              uri: item.pic
            }}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>{item.name}</Text>
          <Text style={{}}>{item.size}</Text>
          <Text style={{ fontWeight: "bold" }}>{item.cost}</Text>
          <ButtonComponent
            activeOpacity={0.8}
            containerStyle={{
              flex: 1,
              margin: 10,
              paddingBottom: 10,
              width: 200,
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
            title="Add to cart"
            handleOnPress={handleOnSubmit}
          />
        </View>
        <View
          style={{ alignItems: "flex-end", width: 50, backgroundColor: "red" }}
        >
          <TouchableOpacity onPress={() => {}}>
            <Ionicons
              name="ios-close-circle-outline"
              size={25}
              color="#3d3d3d"
            />
          </TouchableOpacity>
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
    padding: 10,
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
    // textAlign: "right",
    marginRight: 20,
    alignSelf: "center"
  },
  container: {
    flexDirection: "row",
    height: 100
  },
  infoContainer: {
    padding: 5,
    paddingLeft: 20
    //width: 300
  }
});

export default WishListItemComponent;
