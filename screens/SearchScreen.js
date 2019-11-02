import React, { useState, useRef, useEffect } from 'react';
import {
  Image,
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Text, Tile } from 'react-native-elements';

const styles = StyleSheet.create({
  Container: {
    // height: 80,
    // backgroundColor: '#1d1d1d',
    // justifyContent: 'center',
    flex: 1,
    paddingVertical: 40,
    paddingLeft: 15,
    paddingRight: 15,
  },
  SearchContainer: {
    height: 45,
    // backgroundColor: '#FFF',
    marginVertical: 30,
    flex: 1,
    borderColor: 'rgba(127, 140, 141, 0.43)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
  },
});

const SearchScreen = props => {
  const [value, setValue] = useState('');
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
        <View style={styles.Container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            >
              <Ionicons
                name="md-arrow-back"
                size={25}
                color="#3d3d3d"
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity> */}
            <View style={styles.SearchContainer}>
              <Ionicons
                name={'ios-search'}
                size={25}
                color="#3d3d3d"
                style={{ margin: 20 }}
              />
              <TextInput
                value={value}
                onChangeText={setValue}
                placeholder="Search"
                // autoFocus
                returnKeyType="go"
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                  if (!value.trim()) return;
                  setValue('');
                  props.navigation.navigate('SearchResult', { entered: value });
                }}
                style={{ fontSize: 20, marginLeft: 5, flex: 1 }}
              />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View>
              <Tile
                width={Dimensions.get('window').width - 30}
                height={Dimensions.get('window').height / 3}
                imageSrc={require('../assets/nike.jpg')}
                title="NIKE"
                featured
                containerStyle={{
                  borderRadius: 10,
                  marginVertical: 10,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 7,
                  },
                  shadowOpacity: 0.41,
                  shadowRadius: 9.11,

                  elevation: 14,
                }}
                imageProps={{
                  borderRadius: 10,
                }}
                overlayContainerStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  borderRadius: 10,
                }}
                caption="Just Do It"
              />
              <Tile
                width={Dimensions.get('window').width - 30}
                height={Dimensions.get('window').height / 3}
                imageSrc={require('../assets/adidas.jpg')}
                title="ADIDAS"
                featured
                containerStyle={{
                  borderRadius: 10,
                  marginVertical: 10,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 7,
                  },
                  shadowOpacity: 0.41,
                  shadowRadius: 9.11,

                  elevation: 14,
                }}
                imageProps={{
                  borderRadius: 10,
                }}
                overlayContainerStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  borderRadius: 10,
                }}
                caption="Impossible is nothing"
              />
              <Tile
                width={Dimensions.get('window').width - 30}
                height={Dimensions.get('window').height / 3}
                imageSrc={require('../assets/jordan.jpg')}
                title="JORDAN"
                featured
                containerStyle={{
                  borderRadius: 10,
                  marginVertical: 10,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 7,
                  },
                  shadowOpacity: 0.41,
                  shadowRadius: 9.11,

                  elevation: 14,
                }}
                imageProps={{
                  borderRadius: 10,
                }}
                overlayContainerStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  borderRadius: 10,
                }}
                caption="Become Legendary"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default SearchScreen;
