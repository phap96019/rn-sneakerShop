import React, { useState, useContext, useEffect } from 'react';
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
import ListOderComponent from '../components/ListOderComponent';
import { Context as orderContext } from '../context/OrderContext';
import LoadingComponent from '../components/LoadingComponent';

const data3 = [
  {
    id: '000001',
    date: '27/10/2019',
    status: 'Delivered',
    status: 'Delivered',
  },
];

const OrderScreen = props => {
  const { getOrders, setLoading, setAppLoading, orders, loading } = useContext(
    orderContext
  );
  useEffect(() => {
    setLoading();
    getOrders();
  }, []);
  if (orders) {
  }
  if (loading)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LoadingComponent />
      </View>
    );
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
            data={orders}
            keyExtractor={data => data._id.toString()}
            renderItem={({ item, index }) => (
              <ListOderComponent
                item={item}
                index={index}
                activeOpacity={0.5}
                handleOnPress={() => {
                  props.navigation.navigate('OrderDetail', {
                    orderId: item._id.toString(),
                  });
                }}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderScreen;
