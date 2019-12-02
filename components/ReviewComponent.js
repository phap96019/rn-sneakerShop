import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ReviewComponent = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 5,
      }}
    >
      <View>
        <Image
          style={{
            height: Dimensions.get('window').width / 10,
            width: Dimensions.get('window').width / 10,
            borderRadius: 50,
            marginRight: 10,
          }}
          source={{ uri: item.pic }}
        />
      </View>

      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text style={{ flex: 1, fontSize: 17, fontWeight: 'bold' }}>
            {item.user}
          </Text>
          <Text style={{ fontSize: 13 }}>{item.createdAt}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome name="star" color="#fee501" size={15} />
          <FontAwesome name="star" color="#fee501" size={15} />
          <FontAwesome name="star" color="#fee501" size={15} />
          <FontAwesome name="star" color="#fee501" size={15} />
          <FontAwesome name="star-half-full" color="#fee501" size={15} />
          <Text style={{ marginLeft: 5, fontSize: 15, color: '#27ae60' }}>
            {item.status}
          </Text>
        </View>
        <Text style={{ fontSize: 15, marginBottom: 5 }}>{item.comment}</Text>
      </View>
    </View>
  );
};

export default ReviewComponent;
