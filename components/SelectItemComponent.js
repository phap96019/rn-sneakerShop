import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { withTheme } from 'react-native-elements';

const SelectItemComponent = ({ att, active, type, handlePress }) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: active ? '2f3542' : '#FFF' }}
      activeOpacity={0.8}
      onPress={handlePress}
    >
      {/* <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: active ? 3 : 0,
          backgroundColor,
        }}
      > */}
      <Text
        style={{
          // backgroundColor: 'white',
          backgroundColor: active ? '#2f3542' : '#FFF',
          color: active ? '#FFF' : '#000',
          padding: 5,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#2f3542',
          fontSize: 17,
          padding: 10,
          marginRight: 8,
          marginVertical: 5,
        }}
      >
        {att}
      </Text>
      {/* </View> */}
    </TouchableOpacity>
  );
};

export default SelectItemComponent;
