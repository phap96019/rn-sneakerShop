import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Test1Component = ({ item }) => {
  return (
    <TouchableOpacity>
      <View
        style={{ height: 170, width: 170, marginRight: 15, marginBottom: 2 }}
      >
        <View style={{ position: "absolute" }}>
          <Image
            style={{
              height: 170,
              width: 170,
              borderRadius: 10
            }}
            source={{ uri: item.pic }}
          />
        </View>
        <TouchableOpacity>
          <View
            style={{
              justifyContent: "flex-end",
              flexDirection: "row",
              marginTop: 15,
              marginRight: 15
            }}
          >
            <Ionicons
              name="ios-heart-empty"
              size={20}
              color="grey"
              backgroundColor="grey"
            />
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{ fontSize: 17 }}>{item.name}</Text>
        <Text style={{ fontSize: 14 }}>${item.cost}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Test1Component;
