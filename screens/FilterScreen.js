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
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import WishListItemComponent from '../components/WishListItemComponent';
import SearchResultItemComponent from '../components/SearchResultItemComponent';
import FilterItemComponent from '../components/FilterItemComponent';
import ListButtonComponent from '../components/ListButtonComponent';
import { CheckBox } from 'react-native-elements';

const styles = StyleSheet.create({
  titleName: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
    paddingLeft: 15,
  },
  priceContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  price: {
    fontSize: 20,
    marginLeft: 5,
    flex: 1,
    borderWidth: 0.3,
    borderRadius: 15,
    padding: 3,
    flexDirection: 'row',
  },
});

const FilterScreen = props => {
  const [yes, setYes] = useState(false);
  const [yes1, setYes1] = useState(false);
  const [yes2, setYes2] = useState(false);
  const [yes3, setYes3] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'center',
        margin: 10,
        // alignItems: 'center',
      }}
    >
      {/* ========== Chose Price ============ */}
      <Text style={styles.titleName}>Price Range</Text>
      <View style={styles.priceContainer}>
        <View style={styles.price}>
          <Text style={{ fontSize: 15, paddingTop: 4, paddingLeft: 7 }}>$</Text>
          <TextInput
            keyboardType="number-pad"
            placeholder="Lowest price"
            style={{ paddingLeft: 5 }}
          />
        </View>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}> - </Text>
        <View style={styles.price}>
          <Text style={{ fontSize: 15, paddingTop: 4, paddingLeft: 7 }}>$</Text>
          <TextInput
            keyboardType="number-pad"
            placeholder="Highest price"
            style={{ paddingLeft: 5 }}
          />
        </View>
      </View>
      {/* ========== Chose Size =============== */}
      <Text style={styles.titleName}>Sizes</Text>
      <View
        style={{
          width: Dimensions.get('window').width - 20,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <FilterItemComponent title="XS" handleOnPress={() => {}} />
        <FilterItemComponent title="S" handleOnPress={() => {}} />
        <FilterItemComponent title="M" handleOnPress={() => {}} />
        <FilterItemComponent title="L" handleOnPress={() => {}} />
        <FilterItemComponent title="XL" handleOnPress={() => {}} />
      </View>
      {/* ============ Chose brand =========== */}
      <Text style={styles.titleName}>Brand</Text>
      <CheckBox
        title="Nike"
        checked={yes}
        onPress={() => {
          setYes(!yes);
        }}
      />
      <CheckBox
        title="Adidas"
        checked={yes1}
        onPress={() => {
          setYes1(!yes1);
        }}
      />
      <CheckBox
        title="Reebok"
        checked={yes2}
        onPress={() => {
          setYes2(!yes2);
        }}
      />
      <CheckBox
        title="Other"
        checked={yes3}
        onPress={() => {
          setYes3(!yes3);
        }}
      />

      {/* ============ Button ================== */}
      <View style={{ flexDirection: 'row' }}>
        <ButtonComponent
          activeOpacity={0.8}
          containerStyle={{ flex: 1, marginTop: 10 }}
          title="Apply"
          handleOnPress={() => {
            props.navigation.navigate('SearchResult');
          }}
        />
      </View>
    </View>
  );
};

export default FilterScreen;
