import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const item = 5;
const PlusNumberComponent = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      <View style={{}}>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 15,
            borderTopLeftRadius: 25,
            borderBottomLeftRadius: 25,
            backgroundColor: '#ecf0f1',
          }}
        >
          <Text style={{ fontSize: 15 }}>-</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 15,
          paddingLeft: 10,
          paddingRight: 10,
          backgroundColor: '#ecf0f1',
        }}
      >
        {item}
      </Text>
      <View>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 15,
            borderTopRightRadius: 25,
            borderBottomRightRadius: 25,
            backgroundColor: '#ecf0f1',
          }}
        >
          <Text style={{ fontSize: 15 }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlusNumberComponent;
