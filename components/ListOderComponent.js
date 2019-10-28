import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    margin: 5,
    paddingBottom: 10,
  },
  touchContainer: {
    flex: 1,
    // height: 110,
    flexDirection: 'row',
  },
  info: {
    flex: 1,
    padding: 5,
  },
});

const ListOrderComponent = ({
  item,
  containerStyle,
  buttonStyle,
  textStyle,
  handleOnPress,
  title,

  ...props
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        onPress={handleOnPress}
        style={{
          ...styles.touchContainer,
          ...containerStyle,
          ...buttonStyle,
        }}
      >
        <View style={styles.info}>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{'ID: ' + item.id}</Text>
          <Text style={{}}>{`Date: ${item.date}`}</Text>
          <Text style={{ fontWeight: 'bold' }}>{`Status: ${item.status}`}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ListOrderComponent;
