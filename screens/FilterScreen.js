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
} from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';
import WishListItemComponent from '../components/WishListItemComponent';
import SearchResultItemComponent from '../components/SearchResultItemComponent';
import FilterItemComponent from '../components/FilterItemComponent';
import ListButtonComponent from '../components/ListButtonComponent';

const FilterScreen = props => {
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'center',
        margin: 10,
        alignItems: 'center',
        marginTop: 40,
      }}
    >
      <FilterItemComponent title="Brand: " handleOnPress={() => {}} />
      <FilterItemComponent title="Size: " handleOnPress={() => {}} />
      <FilterItemComponent title="Color: " handleOnPress={() => {}} />
      <FilterItemComponent title="Type: " handleOnPress={() => {}} />
      <FilterItemComponent title="Cost: " handleOnPress={() => {}} />
      <View style={{ flexDirection: 'row' }}>
        <ButtonComponent
          activeOpacity={0.8}
          containerStyle={{ flex: 1, marginTop: 30 }}
          title="Apply"
          handleOnPress={() => {
            props.navigation.navigate('SearchResult');
          }}
        />
      </View>
    </View>
  );
};

export default FilterScreen;
