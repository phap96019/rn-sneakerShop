import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ReviewComponent from '../components/ReviewComponent';
import { Context as ReviewContext } from '../context/ReviewContext';
import { Context as UserContext } from '../context/UserContext';
import RatingChart from '../components/RatingChart';

const ReviewScreen = props => {
  const { setLoading, setAppLoading, getReview, reviews } = useContext(
    ReviewContext
  );
  const { user } = useContext(UserContext);
  const product = props.navigation.getParam('product');
  useEffect(() => {
    getReview(product.id);
  }, []);

  // console.log(reviews);

  const isNotReviewed = () => {
    if(!reviews) return true;
    const review = reviews.find(review => review.user._id.toString() === user._id.toString())
    if(review) return false;
    return true;
  } 

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{
          flex: 1,
          marginVertical: 5,
          marginHorizontal: 20,
          marginBottom: isNotReviewed() ? 53 : 0,
        }}
        showsVerticalScrollIndicator={false}
      >
        <RatingChart
          productId={product.id}
          rating={product.rating}
          nRating={product.nRating}
        />
        {/* <Text style={{ fontSize: 15, marginBottom: 0 }}>13 Reviews</Text> */}
        <FlatList
          data={reviews}
          keyExtractor={data => data._id.toString()}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          renderItem={({ item }) => {
            return <ReviewComponent item={item} />;
          }}
        />
      </ScrollView>
{
        isNotReviewed() && <View
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
            props.navigation.navigate('WriteReview', { productId: product.id });
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
}
    </View>
  );
};

export default ReviewScreen;
