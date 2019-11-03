import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const item = {
  name: 'Adidas Yeezy 350 Boost V2',
  rate: 3.5,
  cost: 24.99,
  description:
    'San pham nay khong phai la thuoc va khong co tac dung thay the thuoc chua benh.',
  pic:
    'https://www.lesitedelasneaker.com/wp-content/images/2019/05/adidas-yeezy-350-boost-v2-black-non-reflective-banner1.jpg',
};

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

const ProductScreen = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: 15,
        marginHorizontal: 15,
        marginBottom: 20,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            borderRadius: 20,
            borderWidth: 1,
            borderColor: 'black',
            alignItems: 'center',
            paddingVertical: 10,
          }}
        >
          <Image
            style={{
              height: Dimensions.get('window').height / 2.75,
              width: Dimensions.get('window').width / 1.25,
            }}
            source={{ uri: item.pic }}
          />

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{ fontSize: 14, fontWeight: 'bold', marginRight: 1.5 }}
            >
              {item.rate}
            </Text>
            <Ionicons name="ios-star" color="#ffff14" size={17} />
            <TouchableOpacity>
              <Text style={{ fontSize: 14, marginLeft: 5 }}>See Reviews</Text>
            </TouchableOpacity>
          </View>

          <Text style={{ fontSize: 23, fontWeight: 'bold' }}>{item.name}</Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>${item.cost}</Text>
        </View>

        <View style={{ marginTop: 25, marginLeft: 5 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Description</Text>
          <Text
            style={{
              fontSize: 17,
              marginTop: 5,
            }}
          >
            {item.description}
          </Text>
        </View>

        <View style={{ marginTop: 25, marginLeft: 5 }}>
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
          <TouchableOpacity>
            <Text style={styles.TextStyle}>36</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.TextStyle}>37</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.TextStyle}>38</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.TextStyle}>39</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.TextStyle}>40</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.TextStyle}>41</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.TextStyle}>42</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.TextStyle}>43</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 25,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Ionicons name="ios-heart" color="red" size={30} />
          </TouchableOpacity>

          <TouchableOpacity
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
      </ScrollView>
    </View>
  );
};

export default ProductScreen;
