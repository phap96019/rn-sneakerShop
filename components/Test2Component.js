import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Test2Component = ({ item }) => {
  return (
    <TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ height: 70, width: 70 }}>
          <Image style={{ height: 70, width: 70 }} source={{ uri: item.pic }} />
        </View>
        <View style={{ marginRight: 25, marginLeft: 15 }}>
          <Text style={{ fontSize: 17 }}>{item.name}</Text>
          <Text style={{ fontSize: 14 }}>${item.cost}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Test2Component;
