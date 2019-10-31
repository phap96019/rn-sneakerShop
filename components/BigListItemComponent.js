import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Context as AuthContext } from '../context/AuthContext';
import { Context as UserContext } from '../context/UserContext';
import { navigate } from '../utils/navigationRef';

const BigListItemComponent = ({ item, navigation }) => {
  const [love, setLove] = useState(false);
  const handleOnPress = () => {
    if (!isSignIn) {
      navigate('Login');
      return;
    }
    setLove(!love);
    //call api here
  };
  const { isSignIn } = useContext(AuthContext);
  return (
    <TouchableOpacity>
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
        <TouchableOpacity onPress={handleOnPress}>
          <View
            style={{
              justifyContent: 'flex-end',
              flexDirection: 'row',
              marginTop: 15,
              marginRight: 15,
            }}
          >
            <Ionicons
              name={love ? 'ios-heart' : 'ios-heart-empty'}
              size={20}
              color={love ? '#e74c3c' : 'grey'}
              backgroundColor="grey"
            />
          </View>
        </TouchableOpacity>
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
