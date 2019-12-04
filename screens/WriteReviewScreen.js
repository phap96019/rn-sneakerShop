import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { Context as ReviewContext } from '../context/ReviewContext';
import trimData from '../utils/trimData';

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

const WriteReviewScreen = props => {
  const {
    setLoading,
    setAppLoading,
    getReview,
    reviews,
    createReview,
  } = useContext(ReviewContext);

  const [rating, setRating] = useState(0);

  const productId = props.navigation.getParam('productId');

  const ratingCompleted = rated => {
    console.log('Rating is: ' + rated);
    setRating(rated);
  };

  const [inputData, setInputData] = useState({
    review: '',
  });

  const { review } = inputData;
  const handleOnChange = name => text => {
    setInputData({ ...inputData, [name]: text });
  };
  const handleOnSubmit = () => {
    // Trim data to clear space
    const cleanData = trimData(inputData);

    // Update data input.
    // Don't send inputData to context beacause setInputData is async fuction
    setInputData(cleanData);

    // Dismiss keyboard
    // Keyboard.dismiss();

    // Cleare error on screen
    // clearError();

    // Set lottie loading
    setLoading();
    createReview(productId, { rating, review });
  };

  return (
    <View style={{ marginTop: 10, marginHorizontal: 20, marginBottom: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={{
            height: Dimensions.get('window').width / 4,
            width: Dimensions.get('window').width / 4,
          }}
          source={{
            uri:
              'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ymmq6yswyxlxycdzquoi/epic-react-flyknit-2-running-shoe-B01C0P.jpg',
          }}
        />
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>
          Adidas Ultra Boost
        </Text>
      </View>

      <AirbnbRating
        count={5}
        defaultRating={rating}
        size={25}
        // showRating={false}
        onFinishRating={ratingCompleted}
      />

      <TextInput
        style={{
          borderBottomWidth: 1,
          borderBottomColor: 'black',
          marginVertical: 10,
          fontSize: 18,
        }}
        placeholder="Write review..."
        autoCapitalize="none"
        autoCorrect={false}
        value={review}
        onChangeText={handleOnChange('review')}
      />
      {review.length < 2000 ? (
        <View style={{ alignItems: 'flex-end', marginBottom: 10 }}>
          <Text style={{ fontSize: 13, color: 'black' }}>
            {review.length}/2000
          </Text>
        </View>
      ) : (
        <View style={{ alignItems: 'flex-end', marginBottom: 10 }}>
          <Text style={{ fontSize: 13, color: 'red' }}>
            Character limit: 2000
          </Text>
        </View>
      )}

      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: '#1d1d1d',
          borderRadius: 10,
        }}
        
        onPress={handleOnSubmit}
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
