import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SelectItemComponent = ({ att, active, type, handlePress }) => {
  const backgroundColor = type === 'color' ? att : 'white';
  const title = type === 'size' ? att : '';

  return (
    <TouchableOpacity
      style={{ width: 60, height: 60, marginHorizontal: 10 }}
      activeOpacity={0.8}
      onPress={handlePress}
    >
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: active ? 3 : 0,
          backgroundColor,
        }}
      >
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SelectItemComponent;
