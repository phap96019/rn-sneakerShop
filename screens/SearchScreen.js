import React, { useState, useRef, useEffect } from 'react';
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
import { NavigationEvents } from 'react-navigation';

const styles = StyleSheet.create({
  Container: {
    // height: 80,
    // backgroundColor: '#1d1d1d',
    // justifyContent: 'center',
    paddingVertical: 40,
    paddingLeft: 15,
    paddingRight: 15,
  },
  SearchContainer: {
    height: 45,
    // backgroundColor: '#FFF',
    flex: 1,
    borderColor: 'rgba(127, 140, 141, 0.43)',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
  },
});

const SearchScreen = props => {
  const [value, setValue] = useState('');
  useEffect(() => {
    willFocusSubscription = props.navigation.addListener('willFocus', () => {});

    return () => {
      // Remove the listener when you are done
      willFocusSubscription.remove();
    };
  }, [value]);

  return (
    <View style={styles.Container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Home');
          }}
        >
          <Ionicons
            name="md-arrow-back"
            size={25}
            color="#3d3d3d"
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
        <View style={styles.SearchContainer}>
          <Ionicons
            name={'ios-search'}
            size={25}
            color="#3d3d3d"
            style={{ margin: 20 }}
          />
          <TextInput
            value={value}
            onChangeText={setValue}
            placeholder="Search"
            autoFocus
            returnKeyType="go"
            onSubmitEditing={() => {
              Keyboard.dismiss();
              setValue('');
              props.navigation.navigate('SearchResult');
            }}
            style={{ fontSize: 20, marginLeft: 5, flex: 1 }}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;
