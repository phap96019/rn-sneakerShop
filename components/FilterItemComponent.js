import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  containerStyle: {},
  info: {
    // justifyContent: 'center',
    flexDirection: 'row',
  },
});

const FilterItemComponent = ({ textStyle, handleOnPress, title, ...props }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        onPress={handleOnPress}
        style={{
          flex: 1,
        }}
      >
        <View style={styles.info}>
          <Text style={{ fontSize: 20 }}>{title}</Text>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Ionicons name="md-arrow-dropright" size={23} color="#3d3d3d" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FilterItemComponent;
