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

const CategoryResultScreen = props => {
  const { searchProducts, setLoading, products, loading } = useContext(
    ProductContext
  );
  useEffect(() => {
    if (!products) {
      const search = props.navigation.getParam('search');
      const field = props.navigation.getParam('field');
      const type = props.navigation.getParam('type');
      setLoading();
      searchProducts(search, 'CategoryResult', field, type);
      console.log(products);
    }
  }, [products]);
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
