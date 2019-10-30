import React, { useState, useContext } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context as AuthContext } from '../context/AuthContext';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';
import WishListItemComponent from '../components/WishListItemComponent';
import ListOderComponent from '../components/ListOderComponent';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const onSubmit = () => {};
const SearchScreen = props => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.Container}>
        <Animatable.View animation="slideInRight" duration={500} style={styles.SearchContainer}>
          <Ionicons name={'ios-search'} size={30} color="#3d3d3d" style={{ padding: 10 }} />
          <TextInput
            placeholder="Search"
            autoFocus
            returnKeyType="go"
            onSubmitEditing={() => {
              props.navigation.navigate('SearchResult');
            }}
            style={{ fontSize: 20, marginLeft: 5, flex: 1 }}
          />
        </Animatable.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: 80,
    backgroundColor: '#1d1d1d',
    justifyContent: 'center',
    paddingTop: 23,
    paddingLeft: 5,
    paddingRight: 5,
  },
  SearchContainer: {
    height: 50,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
  },
});

export default SearchScreen;
