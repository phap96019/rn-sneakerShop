import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import PickProductComponent from '../components/PickProductComponent';
import { Context as AuthContext } from '../context/AuthContext';
import { Context as UserContext } from '../context/UserContext';
import { Context as ProductContext } from '../context/ProductContext';
import { Ionicons } from '@expo/vector-icons';
import sourceAnimation from '../assets/notfound.json';
import LoadingComponent from '../components/LoadingComponent';
import AnimationViewComponent from '../components/AnimationViewComponent';
import ButtonComponent from '../components/ButtonComponent';
import { NavigationEvents } from 'react-navigation';

const styles = StyleSheet.create({
  TextStyle: {
    backgroundColor: 'white',
    color: 'black',
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#2f3542',
    fontSize: 17,
    padding: 10,
    marginRight: 8,
    marginVertical: 5,
  },
});

const ProductScreen = ({ navigation }) => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const { isSignIn } = useContext(AuthContext);
  const {
    cart,
    loading: userLoading,
    getMe,
    getCart,
    addWishlistItem,
    addCartItem,
    setLoading: setUserLoading,
  } = useContext(UserContext);
  const {
    getProduct,
    clearProduct,
    product,
    setAppLoading,
    appLoading,
  } = useContext(ProductContext);

  const productId = navigation.getParam('productId');
  // console.log(
  //   selectedProduct.color,
  //   selectedProduct.size,
  //   selectedProduct.quantity,
  //   selectedProduct._id
  // );

  useEffect(() => {
    const productId = navigation.getParam('productId');

    setAppLoading();
    getProduct(productId);
  }, []);

  const handleOnAddToCart = () => {
    if (!isSignIn) {
      navigation.navigate('Login');
      return;
    }
    setUserLoading();
    addCartItem(selectedProduct._id);
  };

  handleAddToWishlist = () => {
    if (!isSignIn) {
      navigation.navigate('Login');
      return;
    }
    setUserLoading();
    addWishlistItem(productId);
  };

  if (appLoading)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <LoadingComponent />
      </View>
    );

  if (!product) {
    return (
      <View style={styles.container}>
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
            Opps! Your product you find is not found!
          </Text>
          {/* <Text style={{ textAlign: 'center' }}>
            Add somthing to make me happy:)
          </Text> */}
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 15 }}>
          <ButtonComponent
            activeOpacity={0.8}
            title="Shopping now"
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
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        // marginTop: 15,
        // marginHorizontal: 15,
        marginBottom: 20,
        flex: 1,
      }}
    >
      <NavigationEvents
        onWillFocus={() => {
          clearProduct();
        }}
      />
      {userLoading && <LoadingComponent />}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: Dimensions.get('window').height / 2,
          }}
        >
          <View style={{ position: 'absolute' }}>
            <Image
              style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height / 2,
              }}
              source={{
                uri: product.imageCover,
              }}
            />
          </View>
        </View>

        <View style={{ marginTop: 15, marginHorizontal: 15 }}>
          <View
            style={{
              alignItems: 'center',
              paddingVertical: 10,
            }}
          >
            {/* <Image
            style={{
              height: Dimensions.get('window').height / 2.75,
              width: Dimensions.get('window').width / 1.25,
            }}
            source={{ uri: item.pic }}
          /> */}

            {/* images */}

            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 23, fontWeight: 'bold' }}>
                {product.name}
              </Text>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                ${product.price}
              </Text>
            </View>
          </View>

          {/* <View style={{ marginTop: 25, marginLeft: 5 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Color</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'flex-start',
              flexWrap: 'wrap',
            }}
          >
            <TouchableOpacity>
              <Text style={styles.TextStyle}>Black</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.TextStyle}>White</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 20, marginLeft: 5 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Size</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
            }}
          >
          </View> */}
          <PickProductComponent
            variants={product.variants}
            handleOnChange={setSelectedProduct}
          />

          <View
            style={{
              marginTop: 25,
              marginLeft: 5,
              marginHorizontal: 15,
              // marginBottom: Dimensions.get('window').height / 15,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
              }}
            >
              Description
            </Text>
            <Text
              style={{
                // color: '#C0C0C0',
                fontSize: 18,
                // textAlign: 'justify',
                // marginHorizontal: 15,
                lineHeight: 30,
              }}
            >
              {product.description}
            </Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          paddingTop: 10,
          backgroundColor: '#FFF',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: -5,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 25,
          marginHorizontal: 15,
        }}
      >
        <TouchableOpacity
          onPress={handleAddToWishlist}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Ionicons name="ios-heart" color="red" size={30} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleOnAddToCart}
          style={{
            flex: 4,
            backgroundColor: '#2f3542',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: 'white',
              padding: 15,
            }}
          >
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductScreen;
