import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GifSlider from './GifSlider'
import images from './images.js'

export default function App() {
  return (
    <View style={styles.container}>
      <GifSlider images={images.head} />
      <GifSlider images={images.body} />
      <GifSlider images={images.legs} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
