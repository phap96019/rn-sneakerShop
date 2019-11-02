import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";

const SmallListItemComponent = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ height: Dimensions.get('window').width / 4.5, width: Dimensions.get('window').width / 4.5 }}>
          <Image style={{ height: Dimensions.get('window').width / 4.5, width: Dimensions.get('window').width / 4.5 }} source={{ uri: item.pic }} />
        </View>
        <View style={{ marginRight: 25, marginLeft: 15 }}>
          <Text style={{ fontSize: 17 }}>{item.name}</Text>
          <Text style={{ fontSize: 14 }}>${item.cost}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SmallListItemComponent;
