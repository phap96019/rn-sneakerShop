import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { Context as AuthContext } from '../context/AuthContext';

const BigListItemComponent = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        maxHeight: 230,
      }}
    >
      <View
        style={{ height: 170, width: 170, marginRight: 15, marginBottom: 2 }}
      >
        <View style={{ position: 'absolute' }}>
          <Image
            style={{
              height: 170,
              width: 170,
              borderRadius: 10,
              resizeMode: 'contain',
            }}
            source={{ uri: item.imageCover }}
          />
        </View>

        <View
          style={{
            justifyContent: 'flex-end',
            flexDirection: 'row',
            marginTop: 15,
            marginRight: 15,
          }}
        >
          <Foundation
            name="burst-new"
            size={40}
            color={'#2ecc71'}
            backgroundColor="grey"
          />
        </View>
      </View>

      <View style={{ height: 170, width: 170 }}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 17 }}>
          {item.name}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 14 }}>
          ${item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BigListItemComponent;
