import React, { useContext, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import { Context as UserContext } from '../context/UserContext';
import ButtonComponent from '../components/ButtonComponent';
import InputComponent from '../components/InputComponent';
import LoadingComponent from '../components/LoadingComponent';
import trimData from '../utils/trimData';
import SearchResultItemComponent from '../components/SearchResultItemComponent';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  textstyle: {
    fontSize: 18,
  },
});
data2 = [
  {
    id: 0,
    name: 'Giày loại X',
    size: 'Size: 40',
    cost: 200,
    pic:
      'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ymmq6yswyxlxycdzquoi/epic-react-flyknit-2-running-shoe-B01C0P.jpg',
  },
  {
    id: 1,
    name: 'Giày loại A',
    size: 'Size: 40',
    cost: 200,
    pic: 'https://file.yes24.vn/Upload/ProductImage/anvietsh/1963437_L.jpg',
  },
];
dataInfo = {
  id: 2232334,
  date: '12/12/2019',
  stt: 'being transported',
  name: 'Truong Phap',
  phone: '0915227229',
  address: 'Kí túc xá khu B',
  cost: 200,
};
const OrderDetailScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            borderBottomWidth: 15,
            borderColor: '#ecf0f1',
            paddingBottom: 15,
            paddingTop: 15,
          }}
        >
          <Text
            style={{ fontSize: 18, fontWeight: 'bold' }}
          >{`ID: ${dataInfo.id}`}</Text>
          <Text style={styles.textstyle}>{`Order date: ${dataInfo.date}`}</Text>
          <Text style={styles.textstyle}>{`Status: ${dataInfo.stt}`}</Text>
        </View>
        <View
          style={{
            borderBottomWidth: 15,
            borderColor: '#ecf0f1',
            paddingBottom: 15,
            paddingTop: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Receiver's information
          </Text>
          <Text style={styles.textstyle}>{`${dataInfo.name}`}</Text>
          <Text style={styles.textstyle}>{`${dataInfo.phone}`}</Text>
          <Text style={styles.textstyle}>{`${dataInfo.address}`}</Text>
        </View>
        <View style={{ paddingTop: 15, paddingBottom: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Order 's information
          </Text>
          <View>
            <FlatList
              data={data2}
              keyExtractor={data => data.id.toString()}
              renderItem={({ item }) => (
                <SearchResultItemComponent
                  item={item}
                  activeOpacity={0.8}
                  handleOnPress={() => {}}
                />
              )}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}
          >
            <Text style={{ fontSize: 20, textAlign: 'right', paddingTop: 20 }}>
              Total:
            </Text>
            <Text
              style={{ fontSize: 20, textAlign: 'right', paddingTop: 20 }}
            >{`$${dataInfo.cost}`}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default OrderDetailScreen;
