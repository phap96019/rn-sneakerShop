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
data2 = [
  {
    id: 0,
    name: 'Giày loại X',
    size: 'Size: 40',
    cost: 200,
    pic:
      'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ymmq6yswyxlxycdzquoi/epic-react-flyknit-2-running-shoe-B01C0P.jpg',
  },
  {
    id: 1,
    name: 'Giày loại A',
    size: 'Size: 40',
    cost: 200,
    pic: 'https://file.yes24.vn/Upload/ProductImage/anvietsh/1963437_L.jpg',
  },
];
const ScreenForTest = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 10,
        paddingBottom: 20,
      }}
    >
      <ScrollView>
        <View>
          <FlatList
            data={data2}
            keyExtractor={data => data.id.toString()}
            renderItem={({ item }) => (
              <WishListItemComponent
                item={item}
                activeOpacity={0.8}
                handleOnPress={() => {}}
              />
            )}
          />
          <Text>hello</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ScreenForTest;
