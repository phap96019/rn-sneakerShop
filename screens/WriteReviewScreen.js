import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native';

const DataX = [
  {
    id: 0,
    name: 'Adidas Ultra Boost',
    size: 'Size: 40',
    cost: 44.99,
    pic:
      'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ymmq6yswyxlxycdzquoi/epic-react-flyknit-2-running-shoe-B01C0P.jpg',
  },
];

const WriteReviewScreen = () => {
  return (
    <View style={{ marginHorizontal: 15, marginBottom: 10 }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image
        style={{
          height: Dimensions.get('window').width / 5,
          width: Dimensions.get('window').width / 5,
        }}
        source={{ uri: 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ymmq6yswyxlxycdzquoi/epic-react-flyknit-2-running-shoe-B01C0P.jpg' }}
      />
      <Text>Adidas Ultra Boost</Text>
      </View>
      <TextInput
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'black',
          marginBottom: 10,
          fontSize: 17,
        }}
        placeholder="Write comment..."
        autoCapitalize="none"
        autoCorrect={false}
      />

      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: 'red',
          borderRadius: 10,
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
          Send
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WriteReviewScreen;
