import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GifSlider from './GifSlider'

const imageOptions = [
  require('./assets/kitten3.jpeg'),
  require('./assets/kitten2.gif'),
  require('./assets/kitten.gif')
]

export default function App() {
  return (
    <View style={styles.container}>
      <GifSlider justify='flex-start' images={imageOptions} />
      <GifSlider justify='center' images={imageOptions} />
      <GifSlider justify='flex-end' images={imageOptions} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
