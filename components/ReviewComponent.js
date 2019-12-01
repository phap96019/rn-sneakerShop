import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ReviewComponent = ({ item }) => {
  return (
    <View style={{ paddingBottom: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <FontAwesome name="star" color="#fee501" size={18} />
        <FontAwesome name="star" color="#fee501" size={18} />
        <FontAwesome name="star" color="#fee501" size={18} />
        <FontAwesome name="star" color="#fee501" size={18} />
        <FontAwesome name="star-half-full" color="#fee501" size={18}/>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>
          {item.user}
        </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: '#005494' }}>{item.status}</Text>
        <Text style={{ marginLeft: 5 }}>{item.createdAt}</Text>
      </View>
      <Text style={{ fontSize: 18, marginBottom: 5}}>{item.comment}</Text>
      <Image
        style={{
          height: Dimensions.get('window').width / 4,
          width: Dimensions.get('window').width / 4,
        }}
        source={{ uri: item.pic }}
      />
    </View>
  );
};

export default ReviewComponent;
