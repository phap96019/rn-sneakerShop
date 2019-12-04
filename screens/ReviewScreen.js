import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ReviewComponent from '../components/ReviewComponent';
import RatingChart from '../components/RatingChart';

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
    createdAt: 'Oct 10 2019',
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
    createdAt: 'Oct 10 2019',
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
    createdAt: 'Oct 10 2019',
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
    createdAt: 'Oct 10 2019',
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
    createdAt: 'Oct 10 2019',
  },
  {
    id: 5,
    user: 'Chris',
    title: 'Ok',
    comment: 'This is a comment about this product.',
    rate: 5,
    pic:
      'https://vcdn.tikicdn.com/ts/review/48/c8/ee/96f5c3a0d6bf6828e29bd7b9bada2304.jpg',
    status: 'Purchased',
    createdAt: 'Oct 10 2019',
  },
  {
    id: 6,
    user: 'Chris',
    title: 'Ok',
    comment: 'This is a comment about this product.',
    rate: 5,
    pic:
      'https://vcdn.tikicdn.com/ts/review/48/c8/ee/96f5c3a0d6bf6828e29bd7b9bada2304.jpg',
    status: 'Purchased',
    createdAt: 'Oct 10 2019',
  },
];

const ReviewScreen = props => {
  const product = props.navigation.getParam('product');
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{
          flex: 1,
          marginVertical: 5,
          marginHorizontal: 20,
          marginBottom: 53,
        }}
        showsVerticalScrollIndicator={false}
      >
        <RatingChart
          productId={product.id}
          rating={product.rating}
          nRating={product.nRating}
        />
        <Text style={{ fontSize: 15, marginBottom: 0 }}>13 Reviews</Text>
        <FlatList
          data={Datatemp}
          keyExtractor={data => data.id.toString()}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          renderItem={({ item }) => {
            return <ReviewComponent item={item} />;
          }}
        />
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 5,
          right: 5,
          left: 5,
          zIndex: 2,
          flexDirection: 'row',
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#1d1d1d',
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
    </View>
  );
};

export default ReviewScreen;
