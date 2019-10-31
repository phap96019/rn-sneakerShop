import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import apiHelper from '../utils/apiHelper';
import BigListItemComponent from './BigListItemComponent';
import SkeletonContent from 'react-native-skeleton-content';

const NewArriavalComponent = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    const { data } = await apiHelper.get(`/api/v1/products?limit=5`);
    setItems(data.data.data);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  return (
    <FlatList
      data={items}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        return <BigListItemComponent item={item} />;
      }}
    />
  );
};

export default NewArriavalComponent;
