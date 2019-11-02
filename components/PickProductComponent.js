import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import SelectItemComponent from './SelectItemComponent';

const PickProductComponent = ({ variants, pickedColor, pickedSize }) => {
  const [selectedColor, setSelectedColor] = useState(pickedColor);
  const [selectedSize, setSelectedSize] = useState(pickedSize);
  const [colorList, setColorsList] = useState([]);
  const [sizeList, setSizeList] = useState([]);

  useEffect(() => {
    const colors = variants
      .map(item => item.color)
      .filter((item, index, inputArray) => inputArray.indexOf(item) === index);
    setColorsList(colors);

    if (!selectedColor) {
      setSelectedColor(colors[0]);
    }
    const sizes = variants
      .filter(item => item.color === selectedColor)
      .map(item => item.size);
    setSizeList(sizes);

    if (!selectedSize || sizes.indexOf(selectedSize) < 0) {
      setSelectedSize(sizes[0]);
    }
  }, [selectedColor, selectedSize]);

  console.log('size ne', selectedSize);
  const handleOnPress = (type, att) => () => {
    console.log(type, att);
    if (type === 'color') {
      setSelectedColor(att);
      // setSelectedSize('');
      return;
    }
    if (type === 'size') {
      setSelectedSize(att);
      return;
    }
    return;
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 20,
          justifyContent: 'center',
          width: Dimensions.get('screen').width,
        }}
      >
        <FlatList
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          data={colorList}
          keyExtractor={color => color}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <SelectItemComponent
              att={item}
              type="color"
              handlePress={handleOnPress('color', item)}
              active={selectedColor === item}
            />
          )}
        />
      </View>

      <View>
        <FlatList
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          data={sizeList}
          keyExtractor={size => size.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <SelectItemComponent
              att={item}
              type="size"
              handlePress={handleOnPress('size', item)}
              active={selectedSize === item}
            />
          )}
        />
      </View>
    </View>
  );
};

PickProductComponent.defaultProps = {
  variants: [
    { color: 'red', size: 26, quantity: 10, id: 0 },
    { color: 'yellow', size: 27, quantity: 7, id: 1 },
    { color: 'yellow', size: 28, quantity: 5, id: 2 },
    { color: 'blue', size: 26, quantity: 10, id: 6 },
    { color: 'blue', size: 27, quantity: 7, id: 7 },
    { color: 'blue', size: 28, quantity: 5, id: 8 },
  ],
};
export default PickProductComponent;
