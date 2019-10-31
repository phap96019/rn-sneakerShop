import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Button,
} from 'react-native';
import Test1Component from '../components/Test1Component';
import Test2Component from '../components/Test2Component';
import { Ionicons } from '@expo/vector-icons';
import PlusNumberComponent from '../components/PlusNumberComponent';

const TestScreen = props => {
  return (
    <View>
      <PlusNumberComponent />
    </View>
  );
};

export default TestScreen;
