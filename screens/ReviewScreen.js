import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import ReviewComponent from '../components/ReviewComponent';

const Datatemp = [
  {
    id: 0,
    user: 'Irene',
    title: 'Ok',
    comment: 'You are gorgeous',
    rate: 5,
    pic:
      'https://vcdn.tikicdn.com/ts/review/48/c8/ee/96f5c3a0d6bf6828e29bd7b9bada2304.jpg',
    status: 'Purchased',
    createdAt: '2019-11-30T09:01:58.819Z',
  },
  {
    id: 1,
    user: 'Alex',
    title: 'Ok',
    comment: 'Good',
    rate: 5,
    pic:
      'https://vcdn.tikicdn.com/ts/review/48/c8/ee/96f5c3a0d6bf6828e29bd7b9bada2304.jpg',
    status: 'Purchased',
    createdAt: '2019-11-30T09:01:58.819Z',
  },
  {
    id: 2,
    user: 'Leonardo',
    title: 'Ok',
    comment: "It's ok",
    rate: 5,
    pic:
      'https://vcdn.tikicdn.com/ts/review/48/c8/ee/96f5c3a0d6bf6828e29bd7b9bada2304.jpg',
    status: 'Purchased',
    createdAt: '2019-11-30T09:01:58.819Z',
  },
  {
    id: 3,
    user: 'Jennie',
    title: 'Ok',
    comment: 'Love you guys',
    rate: 5,
    pic:
      'https://vcdn.tikicdn.com/ts/review/48/c8/ee/96f5c3a0d6bf6828e29bd7b9bada2304.jpg',
    status: 'Purchased',
    createdAt: '2019-11-30T09:01:58.819Z',
  },
  {
    id: 4,
    user: 'Chris',
    title: 'Ok',
    comment: 'This is a comment about this product.',
    rate: 5,
    pic:
      'https://vcdn.tikicdn.com/ts/review/48/c8/ee/96f5c3a0d6bf6828e29bd7b9bada2304.jpg',
    status: 'Purchased',
    createdAt: '2019-11-30T09:01:58.819Z',
  },
];

const ReviewScreen = props => {
  return (
    <View style={{ flex: 1, marginHorizontal: 15, marginBottom: 55 }}>
      <View style={{}}>
        <FlatList
          data={Datatemp}
          keyExtractor={data => data.id.toString()}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return <ReviewComponent item={item} />;
          }}
        />
      </View>

      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: 'red',
          borderRadius: 10,
        }}
        onPress={() => {
          console.log('Press here');
          props.navigation.navigate('WriteReview');
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
          Write Review
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReviewScreen;
