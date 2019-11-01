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
  Dimensions,
} from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';
import WishListItemComponent from '../components/WishListItemComponent';
import SearchResultItemComponent from '../components/SearchResultItemComponent';
import FilterItemComponent from '../components/FilterItemComponent';
import ListButtonComponent from '../components/ListButtonComponent';
import SmallPictureComponent from '../components/SmallPictureComponent';
import { Ionicons } from '@expo/vector-icons';

const item = {
  name: 'Nike Epic React Flyknit 2',
  pic1:
    'https://i.pinimg.com/originals/cc/ab/5e/ccab5e910619394d2641a99a962c7517.jpg',
  rating: 4,
  decription:
    'The Nike Epic React Flyknit 2 takes a step up from its predecessor with smooth, lightweight performance and a bold look. An updated Flyknit upper contours to your foot with a minimal, supportive design. Underfoot, durable Nike React technology defies the odds by being both soft and responsive, for comfort that lasts as long as you can run.',
  cost: 200,
};
const styles = StyleSheet.create({
  name: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  decription: {
    paddingRight: 10,
    paddingLeft: 10,
  },
});

const ProductScreen = props => {
  const renderStar = rating => {
    const rated = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 5; i++) {
      rated[i] =
        i < rating ? (
          <Ionicons name="ios-star" color="yellow" size={20} />
        ) : (
          <Ionicons name="ios-star-outline" color="yellow" size={20} />
        );
    }
    return rated;
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          flex: 1,
          // justifyContent: 'center',
          // alignItems: 'center',
        }}
      >
        <ScrollView>
          <View>
            <Image
              style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height / 2,
              }}
              source={{
                uri: item.pic1,
              }}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <SmallPictureComponent item={item.pic1} />
            <SmallPictureComponent item={item.pic1} />
            <SmallPictureComponent item={item.pic1} />
          </View>
          <View style={{ padding: 10 }}>
            <View>
              <View>
                <Text style={styles.name}>{item.name}</Text>
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 23,
                    paddingBottom: 10,
                  }}
                >
                  {`$ ${item.cost}`}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={{ fontSize: 17, paddingLeft: 10, paddingRight: 10 }}>
                {item.rating}
              </Text>
              <FlatList
                horizontal
                data={renderStar(item.rating)}
                keyExtractor={() => Math.random().toString()}
                // eslint-disable-next-line no-shadow
                renderItem={({ item }) => item}
              />
            </View>
          </View>
          <View style={styles.decription}>
            <Text style={{ fontSize: 17 }}>{item.decription}</Text>
          </View>
        </ScrollView>
      </View>
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <ButtonComponent
          activeOpacity={0.8}
          containerStyle={{ flex: 1, marginTop: 5 }}
          title="Add to cart"
          handleOnPress={() => {}}
        />
      </View>
    </View>
  );
};

export default ProductScreen;
