import React from 'react';
import { StyleSheet } from 'react-native';
import animation from '../assets/animation.json';
import AnimationViewComponent from './AnimationViewComponent';

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#1d1d1d', // rgba(30, 30, 30, 0.05)
    position: 'absolute',
    zIndex: 1,
    borderRadius: 15,
  },
  animationStyle: {
    backgroundColor: 'transparent',
    height: 80,
    width: 80,
  },
});

const LoadingComponent = () => {
  return (
    <AnimationViewComponent
      containerStyle={styles.containerStyle}
      animationStyle={styles.animationStyle}
      autoPlay
      loop
      source={animation}
    />
  );
};

export default LoadingComponent;
