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
  Picker,
} from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { Context as ProductContext } from '../context/ProductContext';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';
import WishListItemComponent from '../components/WishListItemComponent';
import SearchResultItemComponent from '../components/SearchResultItemComponent';
import { Ionicons } from '@expo/vector-icons';
import LoadingComponent from '../components/LoadingComponent';
import { NavigationEvents } from 'react-navigation';

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
  {
    id: 2,
    name: 'Giày loại b',
    size: 'Size: 40',
    cost: 200,
    pic:
      'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ymmq6yswyxlxycdzquoi/epic-react-flyknit-2-running-shoe-B01C0P.jpg',
  },
];

const CategoryResultScreen = props => {
  const {
    searchProducts,
    setLoading,
    clearProducts,
    products,
    loading,
    searchQuery,
  } = useContext(ProductContext);
  useEffect(() => {
    if (!products || searchQuery) {
      const search = props.navigation.getParam('search');
      const field = props.navigation.getParam('field');
      const type = props.navigation.getParam('type');
      setLoading();
      searchProducts(search, 'CategoryResult', field, type);
      console.log(products);
      return () => {};
    }
  }, []);
  if (loading) {
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
        <LoadingComponent />
      </View>
    );
  }
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
      <NavigationEvents
        onWillBlur={() => {
          clearProducts();
        }}
      />
      <ScrollView>
        {/* ============= List ============ */}
        <View>
          <FlatList
            data={products}
            keyExtractor={data => data.id.toString()}
            renderItem={({ item }) => (
              <SearchResultItemComponent
                item={item}
                activeOpacity={0.8}
                handleOnPress={() => {
                  props.navigation.navigate('Product', { productId: item._id });
                }}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

CategoryResultScreen.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam('title', 'Category'),
  };
};

export default CategoryResultScreen;
