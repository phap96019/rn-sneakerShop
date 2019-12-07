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
import AnimationViewComponent from '../components/AnimationViewComponent';
import sourceAnimation from '../assets/emptybox.json';

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
  if (!products || (products && !products.length)) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
          marginHorizontal: 15,
          marginVertical: 80,
        }}
      >
        <AnimationViewComponent
          animationStyle={{ width: 200, height: 200 }}
          autoPlay
          source={sourceAnimation}
        />
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              marginVertical: 10,
            }}
          >
            Opps! Your products is empty
          </Text>
          <Text style={{ textAlign: 'center' }}>
            {`Add something to make me happy :)`}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 15 }}>
          <ButtonComponent
            activeOpacity={0.8}
            title="Go back"
            handleOnPress={() => {
              props.navigation.pop();
            }}
            containerStyle={{ flex: 1 }}
          />
        </View>
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
