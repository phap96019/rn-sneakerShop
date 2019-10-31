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
import PlusNumberComponent from '../components/PlusNumberComponent';

data = [
  {
    id: 0,
    name: 'Giày loại XL',
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
  {
    id: 2,
    name: 'Giày loại b',
    size: 'Size: 40',
    cost: 200,
    pic:
      'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ymmq6yswyxlxycdzquoi/epic-react-flyknit-2-running-shoe-B01C0P.jpg',
  },
  {
    id: 3,
    name: 'Giày loại b',
    size: 'Size: 40',
    cost: 200,
    pic:
      'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ymmq6yswyxlxycdzquoi/epic-react-flyknit-2-running-shoe-B01C0P.jpg',
  },
  {
    id: 4,
    name: 'Giày loại b',
    size: 'Size: 40',
    cost: 200,
    pic:
      'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ymmq6yswyxlxycdzquoi/epic-react-flyknit-2-running-shoe-B01C0P.jpg',
  },
  {
    id: 5,
    name: 'Giày loại b',
    size: 'Size: 40',
    cost: 200,
    pic:
      'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ymmq6yswyxlxycdzquoi/epic-react-flyknit-2-running-shoe-B01C0P.jpg',
  },
  {
    id: 6,
    name: 'Giày loại b',
    size: 'Size: 40',
    cost: 200,
    pic:
      'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ymmq6yswyxlxycdzquoi/epic-react-flyknit-2-running-shoe-B01C0P.jpg',
  },
];
const total = 400;
const CartScreen = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        //alignItems: "center",
        margin: 10,
      }}
    >
      <ScrollView>
        <View>
          <FlatList
            data={data}
            keyExtractor={data => data.id.toString()}
            renderItem={({ item }) => (
              <WishListItemComponent
                countButton
                item={item}
                activeOpacity={0.8}
                handleOnPress={() => {}}
              />
            )}
          />
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.total}>{'Total: $ ' + total}</Text>
        </View>
        <View>
          <ButtonComponent
            activeOpacity={0.8}
            containerStyle={{ flex: 1, marginTop: 30, marginBottom: 20 }}
            title="Proceed to ordering"
            handleOnPress={() => {}}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  totalContainer: {
    margin: 10,
  },
  total: {
    fontSize: 20,
    textAlign: 'right',
  },
});
export default CartScreen;
